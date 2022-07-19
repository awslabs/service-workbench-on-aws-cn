---
id: master_role
title: Master账户角色
sidebar_label: Master账户角色
---

此角色位于[**Master AWS Account**](introduction)中，由[**Main AWS Account**](introduction)担任。

## Master Role Trust Policy

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

## Master Role Permissions

以下详细说明了所需的托管和内联策略权限。

### Managed Policy: AWSOrganizationsFullAccess

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

:::warning
You should restricted the actions to `createAccount`, `describeCreateAccountStatus` and `describeAccount` only.
:::

### Inline Policy: sts:AssumeRole

[**Master AWS Account**](introduction) and [**Master AWS Account**](introduction):

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
