---
id: create_member_account
title: Create an AWS Account
sidebar_label: Create an AWS Account
---

当您尝试创建 [**Member AWS 账户**]（简介）时，[**主 AWS 账户**]（简介）将在 [**主 AWS 账户**]（简介）中担任角色.担任该角色后，它将创建一个 [**Member AWS Account**]（简介）。

创建 [**Member AWS 账户**]（简介）后，[**主要 AWS 账户**]（简介）将在该账户中担任角色并启动 CloudFormation 模板以构建资源（VPC、子网） , [**跨账户执行角色**](cross_account_execution_role))。

要创建新的 [**Member AWS 账户**]（简介），请执行以下步骤:

1. 在门户中，使用左侧菜单导航到 **Accounts** 页面。
2. 单击顶部的 **AWS Accounts** 选项卡。
3. 单击**创建 AWS 账户** 按钮。
4. 在 **Account Name** 字段中键入 AWS 账户的名称。
5. 在 **AWS Account Email** 字段中键入 AWS 账户的电子邮件地址。
6. 在 **Master Role Arn** 字段中为 [**Master AWS Account**]（简介）提供 [**Master Role**](master_role) ARN。
7. 在 **External ID** 字段中键入 AWS 账户的外部 ID。
8. 在 **Description** 字段中键入 AWS 账户的描述。
