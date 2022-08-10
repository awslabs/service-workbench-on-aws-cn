---
id: master_role
title: Master账户角色
sidebar_label: Master账户角色
---

此角色位于[**Master AWS Account**](introduction)中，由[**Main AWS Account**](introduction)担任。

## Master 账户角色信任策略

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::${MainAccount}:root"
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

## Master 账户角色权限

以下详细说明了所需的托管和内联策略权限。

### 托管策略: AWSOrganizationsFullAccess

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "organizations:*",
            "Resource": "*"
        }
    ]
}
```

:::注意
您应将操作限制为 `createAccount`, `describeCreateAccountStatus` 和 `describeAccount`。
:::

### 内联策略: sts:AssumeRole

该策略用于控制 [**Master AWS Account**](introduction) 和 [**Master AWS Account**](introduction)之间的角色：

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Effect": "Allow",
        "Action": "sts:AssumeRole",
        "Resource": "arn:aws:iam::*:role/OrganizationAccountAccessRole"
    }
}
```
