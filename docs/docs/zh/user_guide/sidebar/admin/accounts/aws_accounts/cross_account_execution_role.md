---
id: cross_account_execution_role
title: 跨账户执行角色
sidebar_label: 跨账户执行角色
---

此角色驻留在[**Member AWS Account(s)**](introduction)中，由[**Main AWS Account**](introduction)担任。

在 [**Master AWS Account(s)**](introduction) 的组织中 [**Creating a Member AWS Account(s)**](create_member_account) 时，此角色由 `solution/packages/ cfn-templates/lib/templates/onboard-account.yaml` 模板。

## Trust Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": [
          "arn:aws:iam::${MainAccount}:role/${ApiHandlerRole}",
          "arn:aws:iam::${MainAccount}:role/${WorkflowLoopRunnerRole}",
          "arn:aws:iam::${MemberAccount}:root"
        ]
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": ${ExternalId}
        }
      }
    }
  ]
}
```

上面列出的主要是：

- ApiHandlerRole：主 AWS 账户中与 Service Workbench 后端 API 执行关联的角色。
- WorkflowLoopRunnerRole：主 AWS 账户中的一个角色，与后端 API 调用启动的后台工作流执行相关联。
- 会员 AWS 账户本身。

## Permissions

这些策略支持运行分析。

### CloudFormation

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "cloudformation:CreateStack",
        "cloudformation:DeleteStack",
        "cloudformation:DescribeStacks",
        "cloudformation:DescribeStackEvents"
      ],
      "Resource": "*",
      "Effect": "Allow"
    }
  ]
}
```

### Cost Explorer

```json
{
  "Statement": {
    "Action": ["ce:*"],
    "Resource": "*",
    "Effect": "Allow"
  }
}
```

:::tip
You will need to ensure that **Cost Explorer** has been enabled in the member account. [See here for more information](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-enable.html).
:::

### EC2

```json
{
  "Statement": {
    "Action": ["ec2:*"],
    "Resource": "*",
    "Effect": "Allow"
  }
}
```

### EMR

```json
{
  "Statement": {
    "Action": ["elasticmapreduce:*"],
    "Resource": "*",
    "Effect": "Allow"
  }
}
```

### IAM

```json
{
  "Statement": {
    "Action": ["iam:*"],
    "Resource": "*",
    "Effect": "Allow"
  }
}
```

### S3

```json
{
  "Statement": {
    "Action": ["s3:*"],
    "Resource": "*",
    "Effect": "Allow"
  }
}
```

### SageMaker

```json
{
  "Statement": {
    "Action": ["sagemaker:*"],
    "Resource": "*",
    "Effect": "Allow"
  }
}
```

### SSM

```json
{
  "Statement": {
    "Action": ["ssm:*"],
    "Resource": "*",
    "Effect": "Allow"
  }
}
```
