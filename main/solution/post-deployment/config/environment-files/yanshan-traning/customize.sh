#!/bin/bash
set -e
sudo -u ec2-user -i <<'EOF'
cp -rf /usr/local/share/workspace-environment/yanshan-traning/notebook/* ~/SageMaker/
EOF