#!/bin/bash
set -e
set -o pipefail

pushd "$(dirname "${BASH_SOURCE[0]}")" > /dev/null
[[ $UTIL_SOURCED != yes && -f ./util.sh ]] && source ./util.sh
popd > /dev/null

# Setup the execution command
init_package_manager

##
pushd "$SOLUTION_DIR/alb" > /dev/null
stack_name_alb=$($EXEC sls info -s "$STAGE" | grep 'stack:' --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')
popd > /dev/null

set +e
aws_region="$(cat "$CONFIG_DIR/settings/$STAGE.yml" "$CONFIG_DIR/settings/.defaults.yml" 2> /dev/null | grep '^awsRegion:' -m 1 --ignore-case | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')"
aws_profile="$(cat "$CONFIG_DIR/settings/$STAGE.yml" "$CONFIG_DIR/settings/.defaults.yml" 2> /dev/null | grep '^awsProfile:' -m 1 | sed 's/ //g' | cut -d':' -f2 | tr -d '\012\015')"
set -e
echo aws_region: $aws_region
echo aws_profile: $aws_profile

if [ "$aws_profile" ]; then
  website_url="$(aws cloudformation describe-stacks --stack-name "$stack_name_alb" --output text --region "$aws_region" --profile "$aws_profile" --query 'Stacks[0].Outputs[?OutputKey==`LoadBalancerDNSNAme`].OutputValue')"
else
  website_url="$(aws cloudformation describe-stacks --stack-name "$stack_name_alb" --output text --region "$aws_region" --query 'Stacks[0].Outputs[?OutputKey==`LoadBalancerDNSNAme`].OutputValue')"
fi

lowerWebUrl=$(awk '{print tolower($0)}' <<<"${website_url}")
ALB_PORT=$( get_stage_value "albPort" )
WEBSITE_URL=http://"${lowerWebUrl}":"${ALB_PORT}"
pushd "../main/config/settings/" > /dev/null
echo websiteUrl: \'"$WEBSITE_URL"\' >> "$STAGE".yml
popd > /dev/null