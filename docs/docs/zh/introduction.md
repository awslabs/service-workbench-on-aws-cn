---
id: introduction
title: 简介
sidebar_label: 简介
---

Service Workbench on AWS 是一个基于云计算的自服务式开源平台，便于IT团队为研究人员提供协作研究的解决方案。

- 它集成了多个AWS 服务，例如 Amazon CloudFront、AWS Lambda、AWS Step Functions 等。您可以使用 Service Workbench 创建自定义的研究环境模板并与其他组织共享这些模板。
- 同时，为了控制研究成本，Service Workbench 已与 AWS Cost Explorer、AWS Budgets 和 AWS Organizations 集成。您可以快速访问仪表板（dashboard)，参照预算查看您当前 AWS 服务的使用成本。 
- Service Workbench 已与第三方服务提供商集成，以便在需要时启用。
- Service Workbench 还可以模拟本地环境中用户已知的概念，从而更轻松地切换到云技术。

组织中的研究人员通过访问用户界面，能快速找到感兴趣的数据，然后仅需简单操作就可以使用机器学习服务分析数据，例如使用 [Amazon SageMaker](https://aws.amazon.com/sagemaker/) 提供的Jupyter笔记本。研究人员甚至可以管理和协助远程虚拟课堂。

在控制成本方面，仪表板提供基于工作区或项目的已累积成本概览，从而帮助您保持在预算范围内并跟踪可能会占用过多资源的工作区。仪表板显示过去 30 天的索引和工作区成本以及昨天的工作区成本。Service Workbench 通过 AWS 账户来管理计算工作区（compute workspace)的启动和管理，这意味着您可以为不同的项目、成本中心或其他目的使用不同的账户，并管理成本的详细信息。

Service Workbench 提供三种类型的数据集（Studies）：我的数据集、组织数据集、和开放数据。您可以在创建数据集之后上传文件。组织的数据集可以与组织中其他成员共享。数据集的所有者可以修改数据集的权限，并授予其他用户访问权限。当找到感兴趣的数据集后，您可以部署工作区并加载数据进行研究。