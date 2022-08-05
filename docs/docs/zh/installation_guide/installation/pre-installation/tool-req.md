---
id: tool-req
title: 预安装要求
sidebar_label: 预安装要求
---

import useBaseUrl from '@docusaurus/useBaseUrl';

最初的先决条件包括在 AWS 中创建一个主账户、启用 AWS Cost Explorer 和激活成本分配标签。

**重要提示**:在安装 Service Workbench 之前，请确保您具备核心 AWS 服务的使用知识。

### 设置主账户

主账户是部署 Service Workbench 的 AWS 账户。
 
### 启用 AWS 成本管理器

为了在成本仪表盘和工作区中查看实际成本，您必须在 AWS Cost Explorer 中设置一个主账户。主账户拥有创建成员账户的 AWS 组织。

**注意**:即使在安装 Service Workbench 之后，您也可以启用 AWS Cost Explorer。

要在您将在 AWS 上部署 Service Workbench 的账户中启用 AWS Cost Explorer，请执行以下步骤:

1. 从帐户下拉列表中，选择**我的账单仪表盘**。

<img src={useBaseUrl('img/deployment/installation/billing_dashboard.png')} />

2. 从边栏中选择 **Cost Explorer**。

<img src={useBaseUrl('img/deployment/installation/cost_explorer1.png')} />

3. 选择**启动 Cost Explorer**。

<img src={useBaseUrl('img/deployment/installation/cost_explorer2.png')} />

**注意**:初始化可能需要 24 小时；但是，它不必在开始安装过程之前完成。

### 激活成本分配标签

在 **AWS Billing & Cost Management Dashboard** 中激活必要的成本分配标签:

:::tip

标签会在方案部署过程中自动创建，但仍需要手动激活。

:::

1. 登录 AWS 管理控制台并打开 **Billing & Cost Management Dashboard** [此处](https://console.aws.amazon.com/billing/)。

2. 在导航窗格中，选择**成本分配标签**。

<img src={useBaseUrl('img/deployment/installation/cost_atags1.png')} />

3. 在 User-defined cost allocation tags 下，选择 **createdBy**、**Env** 和 **Proj** 标签。
 
<img src={useBaseUrl('img/deployment/installation/cost_atags2.png')} />

**注意**:启用 AWS Cost Explorer 后，这些标签可见之前可能会有延迟。

如果您启用了 Cost Explorer，但您没有通过 AWS 控制台看到这些标签，您仍然可以继续安装。稍后检查（启用 Cost Explorer 后最多可能需要 24 小时）并启用标签以在 Service Workbench 中正确运行成本报告。

有关更多信息，请参阅 [账单和成本管理](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html)。
