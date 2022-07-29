---
id: aws_accounts
title: 创建或添加账户
sidebar_label: 创建或添加账户
---

import useBaseUrl from '@docusaurus/useBaseUrl';

首次以 **root** 用户登录后，进入 [SideBar](/user_guide/introduction) 中的“**Accounts**”页面。 Service Workbench 使用此页面上的 AWS 账户来启动研究工作区。您可以在“**Accounts**”选项卡上添加现有 AWS 账户或创建新账户。账户负责在 Service Workbench 中部署的资源所产生的费用。

* **创建 AWS 账户**：使用 AWS Organizations 创建一个新的 AWS 账户。

* **添加 AWS 账户**：导入现有的 AWS 账户，该账户将负责自己的计费。

每个用户都通过 **Project** 和 **Index** 链接到一个 **Account**，因此在创建第一个用户之前必须至少创建或添加一个帐户。

_**重要提示：**如果您不需要在 Service Workbench 中创建新的 AWS 账户，请跳到下一部分，“添加 AWS 账户”部分。_


## 创建或添加计算托管帐户

首次以root用户登录后，进入**Accounts**页面。

<img src={useBaseUrl('img/deployment/post_deployment/navbar.png')} />

**图：Service Workbench 导航栏**

Service Workbench 使用此页面上的 AWS 账户来启动研究工作区。您可以在 **Accounts** 选项卡上添加现有 AWS 账户或创建新账户。

+ **创建 AWS 账户**：使用 AWS Organizations 创建一个新的 AWS 账户。请注意，如果您需要此功能，上述[准备组织帐户](/deployment/reference/prepare_master_account) 步骤是先决条件。

+ **添加 AWS 账户**：关联现有 AWS 账户以托管计算资源。此帐户可以负责自己的帐单。

每个用户都通过项目和索引链接到一个帐户，因此在将第一个用户关联到项目之前，必须至少创建或添加一个帐户。

**注意**：如果您不需要从 Service Workbench 中创建新的 AWS 账户，请跳至添加 AWS 账户部分。

## 创建 AWS 账户

### 先决条件


在从 Service Workbench 创建 AWS 账户之前，将现有 AWS 账户配置为 Service Workbench 的组织账户（上述[准备组织账户](/deployment/reference/prepare_master_account) 中概述的步骤）。当 Service Workbench 创建新的 AWS 账户时，这些账户的账​​单适用于组织账户。

### 创建一个新帐户
这会在组织中创建一个新的托管 AWS 账户，其账单将转到组织账户。
 
<img src={useBaseUrl('img/deployment/post_deployment/newacc1.png')} />

_**图：创建一个新的托管帐户**_

要创建一个帐户：

1. 在 Service Workbench 控制台中，选择 **AWS Accounts**，然后选择 **Create AWS Account**。

     + 在 **Role ARN** 中，输入从 [准备组织帐户](/deployment/reference/prepare_master_account) 步骤复制的 **Master Role ARN**。
     + 您在此处指定的电子邮件地址在组织内必须是唯一的。
     + 默认情况下，外部 ID 为 `workbench`。有关如何将其配置为另一个值的信息，请参阅 [IAM](/deployment/reference/aws_services#Organizations)。
2. 在处理过程中，**AWS Accounts** 选项卡中会显示以下信息：
     + '正在尝试创建 accountID: xxx'
     + **Workflows > Provision Account** 中正在进行的工作流（请参阅 [Workflows](http://swb-documentation.s3-website-us-east-1.amazonaws.com/user_guide/sidebar/admin/workflows/introduction) )

     **注意**：如果您看到错误消息，例如“Stop Internal State Account ID not found”，如果在组织账户中部署 Service Workbench，请检查组织账户的控制台中是否存在 AWS 组织。如果您在成员账户中进行部署，请检查并确保您遵循了[准备组织账户](/deployment/reference/prepare_master_account) 中描述的步骤。

     + 或者，在控制台中，您可以检查此脚本部署的以下资源。
         - 在 AWS CloudFormation 中，堆栈准备主机正在运行。它创建主角色，其输出是主角色 ARN。
         - 在 AWS Organizations 中的组织账户（请参阅 IAM）中，将显示新账户。
         - 在 IAM 中，创建了新的主角色。
3. 创建账户后，它会列在 AWS 账户中。



## 添加 AWS 账户

添加现有 AWS 账户使 Service Workbench 能够启动研究工作区。现有帐户与主账户的关系（独立或与组织相关联）决定了计费责任。

1. 在 **Accounts** 页面上，选择 **AWS Accounts**，然后选择 **Add AWS Account**。

     <img src={useBaseUrl('img/deployment/post_deployment/addacc1.png')} />
 
     _**图：添加现有账户**_

2. 创建并运行 AWS CloudFormation 模板。

### 如果 AppStream 未启用

+ 输入 **Account Name**、**Account ID**（您要添加的账户的 12 位 AWS 账户 ID）和 **Description**。

<img src={useBaseUrl('img/deployment/post_deployment/addacc2.png')} />

_**图：指定账户详情**_

+ 将显示 **Onboard AWS Account** 屏幕，您可以在其中选择以下任一选项：

     - **我有管理员访问权限**：您对正在载入的主机帐户具有管理员级别的访问权限。选择此选项然后继续在主机帐户中启动 CloudFormation 模板。请注意，选择此选项并继续时，您需要登录到托管账户的 AWS 账户控制台。
     - **我没有管理员访问权限**：生成 CloudFormation 模板，然后您可以共享该模板以由在您正在加入的 AWS 账户中具有管理员访问权限的一方运行。
 
<img src={useBaseUrl('img/deployment/post_deployment/onboardacc.png')} />


_**图：板载 AWS 账户**_



## 创建 RStudio ALB 工作区

### 访问 RStudio 工作区

您可以使用 AWS 合作伙伴的 
[repository](https://github.com/RLOpenCatalyst/Service_Workbench_Templates)中提供的模板和 AMI 访问 RStudio 工作区类型。 RStudio legacy 和 RStudio ALB 都使用自定义域名。您可以在 `/main/config/settings/<stage.yml>` 中定义自定义域名。

### RStudio ALB 工作区的应用程序负载平衡

当您创建 RStudio Application Load Balancer (ALB) 工作区时，会创建一个 ALB，每个托管账户最多可以托管 100 个工作区。每个工作区最多可以有 4 个 CIDR 块（IP 范围），仅用于端口 443。这是在托管帐户中更新的。如果该主机帐户没有 ALB，并且您已经创建了第一个工作区，则将首次创建 ALB，并且对于您随后创建的每个工作区都是通用的。终止所有工作区并终止该主机帐户的最后一个工作区后，将删除 ALB。为至少一个活动工作区创建 ALB。

<img src={useBaseUrl('img/deployment/post_deployment/ALB-1.png')} />

每个工作区类型对应一个侦听器规则，并且可以有 100 个这样的规则。在每个规则中，用户可以指定用户想要加入白名单的 IP 范围。每个侦听器规则最多只能指定 4 个 IP 范围。有关 ALB 的更多信息，请参阅 [Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)。

### 限制

1. 使用 RStudio ALB 实施，每个主机帐户最多只能创建 100 个工作区。
2. 每个工作区，您最多只能为端口 443 指定 4 个 CIDR 块。
