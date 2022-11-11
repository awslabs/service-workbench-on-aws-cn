#!/bin/bash
set -e

pwd
echo "step 1"



# 1, copy static to docker folder
pushd ./alb_website
REGION=$( get_stage_value "awsRegion" )
echo $REGION
awsProfile=$( get_stage_value "awsProfile" )
if [ -z "$awsProfile" ]
then
      echo "\$awsProfile is empty"
      PROFILE=default
else
      echo "\$awsProfile is NOT empty"
      PROFILE=$awsProfile
fi
echo $PROFILE
# aws ecr-public get-login-password --region $REGION --profile $PROFILE | docker login --username AWS --password-stdin public.ecr.aws

# docker build -t swb-web-image:latest .

# # 2, build images

IMAGE_NAME=swb-web-image

# # 3, create ecr repo if there is not exist


# aws ecr create-repository --repository-name swb-web-image --image-scanning-configuration scanOnPush=true --region $REGION --profile $PROFILE || true

# # 4, push images

# docker tag swb-web-image 360183261883.dkr.ecr.cn-northwest-1.amazonaws.com.cn/nginx-web-lambda:latest

# 5, create lambda for container
# ACCOUNT_ID=$(aws sts get-caller-identity --profile $PROFILE --region $REGION | jq -r '.Account')
# echo $ACCOUNT_ID

# REPOSITORY_URI=$(aws ecr describe-repositories --profile $PROFILE --region $REGION --repository-names $IMAGE_NAME | jq -r '.repositories[].repositoryUri')
# echo $REPOSITORY_URI

# ECR_ENDPOINT=$(echo $REPOSITORY_URI|cut -d"/" -f1)

# echo ECR_ENDPOINT: $ECR_ENDPOINT

# # # tag image
# docker tag $IMAGE_NAME $REPOSITORY_URI:latest

# # # login in ecr
# aws ecr get-login-password --profile $PROFILE --region $REGION | docker login --username AWS --password-stdin $ECR_ENDPOINT

# docker push $REPOSITORY_URI:latest

# create lambda with container image


# 6, create alb

echo Completed

