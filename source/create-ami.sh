#!/bin/bash -x
if [ $1 == true ]; then
  echo "Install packer"
  wget https://releases.hashicorp.com/packer/1.6.6/packer_1.6.6_linux_amd64.zip
  apt install unzip
  unzip packer_1.6.6_linux_amd64.zip
  mv packer /usr/local/bin
  echo "Create AMIs"
  cd main/solution/machine-images
  pnpx sls build-image -s $2
else
  echo "Skipping AMI creation"
fi
