---
id: link_aws_account
title: 创建和添加一个AWS Account
sidebar_label: 创建和添加一个AWS Account
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Service Workbench 中有两类 AWS 账户：**内部账户**和**外部账户**。
* **内部账户**：内部账户是与您部署 Service Workbench 的 AWS 账户相关联的账户。链接到内部账户的用户都将被计入该 AWS 账户。
* **外部账户**：外部账户提供自己的 AWS 账户，链接到外部账户的用户将向外部 AWS 账户收费。这就是外部研究人员可以在 Service Workbench 内协作和共享数据的方式，但仍需对自己的计费负责。

首次以 **root** 用户身份登录 Service Workbench Web 界面后，执行以下操作：
1. 在侧边栏中，单击“**账户**”以显示“**账户**”页面。
2. 在“**账户**”页面上，在 Service Workbench 中创建一个 **AWS Account**。

## 创建 AWS 组织
在 AWS 管理控制台中，在 **Master** 账户中创建一个 AWS 组织。没有要设置的配置； Service Workbench 将在 AWS 组织中为此部署创建一个新账户，以部署时使用的 **Stage Name** 命名。如果您已创建 AWS 组织，则无需进一步操作。

## 获取主账户角色 ARN
1. 阅读文件：`main/solution/prepare-master-acc/README.md`。
2. 将目录更改为**根文件夹**并运行以下命令。执行此命令大约需要 8 分钟。
```
`scripts/master-account-deploy.sh <stage>`
```
    **图 2** 中描述了此命令的输出。
    <img src={useBaseUrl('img/deployment/post_deployment/service_information_00')} />
    **_图2：服务信息_**
3. 从上一步的输出中复制 **Master Role ARN** 的值。此值是新创建的 **Master** 角色的 ARN。

### 创建 AWS 账户

这将创建一个账户，其帐单将转到 **Main** 账户。 **Main** 账户是部署 Service Workbench 的账户。参见**图 3**。

<img src={useBaseUrl('img/deployment/post_deployment/create_account_00.jpg')} />
**_图 3：创建 AWS 账户_**

要创建 AWS 账户，请执行以下操作：
1. 在 Service Workbench 控制台中，导航到“**账户 > AWS Accounts**”并单击“**Create AWS Account**”。
2. 指定以下详细信息：
– 在“**Role ARN**”中，填写从上一步复制的 **Master Role ARN**。
– 您在此处指定的**电子邮件地址** 在 AWS 组织中必须是唯一的。
– **External ID** 默认为字符串工作台。有关如何将其配置为另一个值的信息，请参阅 [IAM 角色](/deployment/reference/iam_role)。

一分钟后，“**AWS 账户**”选项卡中将显示以下信息：
– “_尝试创建账户 ID：xxx_”。
– “**Workflows > Provision Account**”中正在进行工作流（请参阅侧边栏的“Accounts”页面。）

_**注意**：如果您看到错误消息，例如“Stop Internal State Account ID not found”，请在您的 **Master** 账户的控制台中检查 AWS 组织。您的账户不得属于现有 AWS 组织。您必须拥有现有的 AWS 组织或能够创建新的 AWS 组织。_
1. （可选）在 AWS 控制台中，您可以检查此脚本部署的以下资源：
– 在 AWS CloudFormation 中，堆栈准备主机将运行。它创建 **Master** 角色，其输出是 **Master Role ARN**。
– 在 AWS Organization 中，新账户将显示在 **Master** 账户中
– 在 AWS IAM 中，将创建新的 **Master** 角色。
添加账户后，它会列在“**AWS Accounts**”中，如**图 4** 所示。

<img src={useBaseUrl('img/deployment/post_deployment/create_account_02.jpg')} />
**_图 4：AWS 账户示例_**

## 添加外部 AWS 账户

这将创建一个账户，其账单将转到外部 AWS 账户，例如外部研究人员。
1. 部署下面的文件。它将输出 Role ARN、VPC ID 等。
```
插件/addon-base-raas/packages/base-raas-cfn-templates/src/templates/onboard-account.cfn.yml
```
2. 在 Service Workbench 管理界面中，单击管理员登录的“**AWS Accounts**”选项卡。参见**图 5**。
3. 点击“**添加 AWS 账户**”并输入账户信息。

<img src={useBaseUrl('img/deployment/post_deployment/create_account_01.jpg')} />
**_图 5：添加 AWS 账户_**
