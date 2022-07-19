---
id: account_structure
title: 账户结构
sidebar_label: 账户结构
---

## 账户结构

Service Workbench 使用了三种帐户，本指南中使用了它们的名称。 _Master_ 和 _Member_ 账户是指 [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) 的术语，而 _Main_ 账户是AWS Service Catalog术语。

- **Main**:部署服务目录的帐户。主账户将支付服务目录部署本身的所有 AWS 使用费用:保存网站的 S3 存储桶以及其他非用户创建的资源。服务目录可以部署在主账户（持有组织的账户）或成员账户（组织内）中。在任何一种情况下，此帐户都称为服务目录_Main_ 帐户。
- **Master**:托管 AWS 组织的账户。主账户负责组织内成员账户的计费。
- **成员**:AWS 组织内的账户。当您使用 [创建 AWS 账户](/deployment/post_deployment/aws_accounts#Create_AWS_Account) 创建账户时，该账户被创建为组织的成员。

另见源代码:

- `README.md`
- `main/solution/prepare-master-acc/README.md`

