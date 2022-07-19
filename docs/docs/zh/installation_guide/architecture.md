---
id: architecture
title: Service Workbench 架构
sidebar_label: Service Workbench 架构
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Service Workbench 集成了现有的 AWS 服务，例如 [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)、[AWS Lambda](https://docs.aws. amazon.com/lambda/latest/dg/welcome.html) 和 [AWS Step Functions](https://docs.aws.amazon.com/lambda/latest/dg/lambda-stepfunctions.html)。 Service Workbench 使您能够创建自己的自定义模板并与其他组织共享这些模板。为了提供成本透明度，Service Workbench 已与 [AWS Cost Explorer](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-getting-started.html)、[AWS Budgets](https ://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) 和 [AWS 组织](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/合并计费.html)。

### 主账号

这是部署 Service Workbench 基础架构的主帐户。

<img src={useBaseUrl('img/deployment/installation/main_account.png')} />

### 主机账户

这是部署计算资源的帐户。

<img src={useBaseUrl('img/deployment/installation/hosting_account.png')} />

### 身份认证

AWS 上的 Service Workbench 可以使用 OIDC IdP 作为身份验证来源。

### 存储

Service Workbench 区分三种类型的研究数据:我的研究、组织研究和开放数据。前两个是由您或整个组织或团体存储和维护的数据集。开放数据是指通过 AWS 上的开放数据提供的数据。针对开放数据集的频繁扫描可确保用户可以使用最新的开放数据集。

### AWS 服务目录

Service Workbench 中的 Workspace 管理的核心是 [AWS Service Catalog](https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort -顺序=描述）。在这里，系统查找并管理用于定义工作区的模板。当您想要使用新的 Workspace 类型时，可以在 AWS Service Catalog 中将其创建为 [AWS CloudFormation 模板](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)。

### 工作区管理

除了使用模板配置环境外，您还可以访问您的工作区、查看账单详细信息或停用它们。

<img src={useBaseUrl('img/deployment/installation/workspace_management.png')} />

### 成本控制

#### 帐户、索引和项目

Service Workbench 使用 AWS 账户来管理计算工作区。这样，您可以为不同的项目、成本中心或其他目的使用不同的帐户并管理成本。借助自动售货功能，管理员可以使用 Service Workbench 界面在相同的 AWS 组织下生成新的 AWS 账户。

#### 仪表板

仪表板显示您的工作区或项目累积的成本的快速概览。这有助于您保持预算并跟踪可能消耗更多资源的工作区。

<img src={useBaseUrl('img/deployment/installation/dashboard.png')} />

### 工作区大小

从模板创建工作区时，除了多种环境大小外，您还可以选择工作区类型。管理员可以预定义这些大小并根据个人权限将它们与用户相关联。

<img src={useBaseUrl('img/deployment/installation/workspace_sizes.png')} />