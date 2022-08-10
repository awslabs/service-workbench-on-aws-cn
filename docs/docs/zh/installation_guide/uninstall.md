---
id: uninstall
title: 卸载 Service Workbench
sidebar_label: 卸载 Service Workbench
---

按照下面的步骤删除各个组件以卸载 Service Workbench:

**CloudFormation 堆栈**

+ 对于正在运行的工作区，在成功删除堆栈之前手动删除 PVRE 角色添加。
+ 在删除堆栈之前清空每个存储桶。
+ 必须手动删除 S3 存储桶。

**来自 AWS Service Catalog 的产品**

+ 选择 portfolio，删除每个产品，删除组、角色和用户中的条目，然后删除portfolio。
+ 转到**产品**并从列表中删除产品。 AMI 和 snapshots
+ 转到 EC2 控制台，在左侧菜单中选择 AMI，选择所有 AMI（来自 SWB），然后选择 **Deregister**。
+ 选择所有快照并选择**删除**。

**Lambda 函数**

删除与 Service Workbench 相关的 Lambda 函数。

**CloudWatch 日志组**

转到 CloudWatch 控制台，然后选择并删除日志组。或者，设置保留时间，自动删除日志组。

**AWS Cloud9 IDE**

如果您使用 AWS Cloud9 部署 Service Workbench，则可以删除此环境。

**使用卸载脚本**

使用以下脚本卸载 Service Workbench:

```
https://github.com/awslabs/service-workbench-on-aws-cn/blob/develop/scripts/environment-delete.sh
```

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
