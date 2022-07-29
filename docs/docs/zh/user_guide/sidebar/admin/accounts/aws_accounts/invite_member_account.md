---
id: invite_member_account
title: 邀请一个AWS账户
sidebar_label: 邀请一个AWS账户
---

除了[**创建会员账户**](create_member_account)，您还可以邀请 AWS 账户加入解决方案。被邀请的 AWS 账户需要提供一个 VPC、其中的一个子网和一个 [**跨账户执行角色**](cross_account_execution_role)。

## 添加 AWS 账户

要将 AWS 账户添加到解决方案，请执行以下步骤:

1. 在门户中，使用左侧菜单导航到 **Accounts** 页面。
2. 单击顶部的 **AWS Accounts** 选项卡。
3. 单击**添加 AWS 账户** 按钮。
4. 在 **Account Name** 字段中键入 AWS 账户的名称。
5. 在 **AWS 账户 ID** 字段中提供 AWS 账户 ID（12 位）。
6. 在 **Role Arn** 字段中提供创建 [**Cross Account Execution Role**](cross_account_execution_role) 时创建的 Role Arn。
7. 在 **External ID** 字段中输入 AWS 账户的外部 ID。
8. 在 **VPC ID** 字段中提供 [**Workspaces**](../../../common/workspaces/introduction.md) 将部署到的 VPC ID。
9. 在 **KMS Encryption Key ARN** 字段中为 AWS 账户提供 KMS 加密密钥 ARN。
