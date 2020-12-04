#!/bin/bash -x
if [ $1 == true ]; then
  echo "Install packer"
  curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
  apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
  apt-get update && apt-get install packer
  echo "Create AMIs"
  cd main/solution/machine-images
  pnpx sls build-image -s $2
else
  echo "Skipping AMI creation"
fi
