---
id: introduction
title: Workspaces Introduction
sidebar_label: Introduction
---

Service Workbench 使组织能够为研究人员提供一个集中的位置来搜索数据集和部署研究工作空间。例如，研究人员可以访问门户，快速找到他们感兴趣的数据，并在 SageMaker Notebooks 中快速开始分析。

Service Workbench 还允许组织以受控方式向外部组织提供对其数据集或数据集子集的访问。此外，外部组织可以将自己的 AWS 帐户用于研究工作区并访问托管组织中的数据。

一旦用户找到了他们有兴趣进行研究的一项或多项研究，他们就可以部署一个工作区来将数据附加到我们的研究中并进行研究。

工作区是包含一组用于访问和集成数据的工具的环境。目前提供以下环境:

注意:目前在一个 SWB 环境中可以创建的工作空间数量限制为 10K。

- **SageMaker Notebook** - 带有 TensorFlow、Apache MXNet 和 Scikit-learn2 的 SageMaker Jupyter Notebook
- **EMR** - 带有 Hail 0.2、JupyterLab、Spark 2.4.4 和 Hadoop 2.8.52 的 Amazon EMR 研究工作区。
     **注意**:如果为部署启用了 AppStream，则 EMR 工作区不可用。
- **EC2 - Linux** - EC2 Linux 实例。
- **EC2 - Windows** - EC2 Windows 实例。
- **EC2 - RStudio** - EC2 RStudio 实例。
