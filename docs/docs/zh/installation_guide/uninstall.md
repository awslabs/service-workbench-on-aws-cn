---
id: uninstall
title: 卸载 Service Workbench
sidebar_label: 卸载 Service Workbench
---

按照下面的步骤删除各个组件以卸载 Service Workbench:

## 1. 终止所有已启动的工作区

## 2. 使用卸载脚本

使用以下脚本卸载 Service Workbench:

```
cd ~/service-workbench-on-aws-cn
sudo yum install epel-release -y
sudo yum install jq -y
echo 'export STAGE="$STAGE_NAME"' >> ~/.bashrc
source ~/.bashrc
./scripts/environment-delete.sh
```

## 3. 检查和手动删除的CloudFormation Stack
检查步骤2中没有删除成功的 CloudFormation Stack，手动删除。
+ 在删除堆栈之前清空每个存储桶。
+ 必须手动删除 S3 存储桶。
+ 手动删除 CloudFormation Stack

## 4. 检查和删除 AWS Service Catalog 的产品
检查步骤2中没有删除成功的 portfolio 和 产品，手动删除。
+ 选择 portfolio，删除每个产品，删除组、角色和用户中的条目，然后删除portfolio。
+ 转到 **产品** 并从列表中删除产品。 

## 5. 删除 AMI 和 快照

+ 转到 EC2 控制台，在左侧菜单中选择 AMI，选择所有 AMI（来自 SWB），然后选择 **Deregister**。
+ 如果有快照，选择所有快照并选择**删除**。

**AWS Cloud9 IDE**

如果您使用 AWS Cloud9 部署 Service Workbench，则可以删除此环境。

**区域代码映射**

区域代码映射在 `main/config/settings/.defaults.yml` 文件中定义。

```'us-east-2': 'oh'
'us-east-1': 'va'
'us-west-1': 'ca'
'us-west-2': 'or'
'ap-east-1': 'hk'
'ap-south-1': 'mum'
'ap-northeast-3': 'osa'
'ap-northeast-2': 'sel'
'ap-southeast-1': 'sg'
'ap-southeast-2': 'syd'
'ap-northeast-1': 'ty'
'ca-central-1': 'ca'
'cn-north-1': 'cn'
'cn-northwest-1': 'nx'
'eu-central-1': 'fr'
'eu-west-1': 'irl'
'eu-west-2': 'ldn'
'eu-west-3': 'par'
'eu-north-1': 'sth'
'me-south-1': 'bhr'
'sa-east-1': 'sao'
'us-gov-east-1': 'gce'
'us-gov-west-1': 'gcw'
```
