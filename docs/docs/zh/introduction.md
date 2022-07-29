---
id: introduction
title: 简介
sidebar_label: 简介
---

Service Workbench on AWS 是一个基于云计算的自服务式开源平台，IT团队可以使用该平台为研究人员提供协作研究解决方案。它集成了多个AWS 服务，例如 Amazon CloudFront、AWS Lambda、AWS Step Functions 等。 Service Workbench 使您能够创建自定义的研究环境模板并与其他组织共享这些模板。为了控制研究成本，Service Workbench 已与 AWS Cost Explorer、AWS Budgets 和 AWS Organizations 集成，提供对仪表盘的快速访问，该仪表盘显示了您当前的AWS使用成本。 Service Workbench 还与第三方服务提供商集成，以便在需要时启用。Service Workbench 还可以模仿本地环境中用户已知的概念，从而更轻松地切换到云技术。组织中的研究人员可以访问门户，快速找到他们感兴趣的数据，只需单击几下，就可快速使用机器学习服务分析数据，比如使用 [Amazon SageMaker](https://aws.amazon.com/sagemaker/) 提供的Jupyter笔记本。Service Workbench 也可以作为一个远程虚拟课堂的管理和协助平台，让研究人员或者学生快速访问自己需要的研究工具。

对于成本控制，仪表盘提供了基于工作空间或项目的已累积成本概览。这可以帮助您保持在预算范围内并跟踪可能会占用过多资源的工作空间。仪表盘显示过去 30 天的索引和工作区成本以及昨天的工作区成本。Service Workbench 使用 AWS 账户来管理计算工作空间的启动和管理。这样，您可以为不同的项目、成本中心或其他目的使用不同的帐户，并详细管理成本。

Service Workbench 中提供三种类型的研究数据存储类型: 我的研究数据、组织研究数据和开放数据。创建研究数据后，您可以将文件上传到其中。组织研究数据可以与组织中的其他成员共享。研究数据的所有者可以修改研究数据的权限以授予其他用户访问权限。找到您感兴趣的研究数据后，您可以部署研究环境以将数据加载到环境中并进行研究。