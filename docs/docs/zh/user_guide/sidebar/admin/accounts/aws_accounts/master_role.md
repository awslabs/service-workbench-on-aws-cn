---
id: master_role
title: Master Account Role
sidebar_label: Master Account Role
---

此角色位于 [**Master AWS Account**]（简介）中，由 [**Main AWS Account**]（简介）担任。

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

This policy is for the controlling role between [**Master AWS Account**](introduction) and [**Master AWS Account**](introduction):

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
