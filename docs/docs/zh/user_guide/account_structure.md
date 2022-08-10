---
id: account_structure
title: 账户结构
sidebar_label: 账户结构
---

## 账户结构

Service Workbench 使用两种类型的账户。您将在整个文档中看到这些账户名称。

- **Main**：部署 Service Workbench 的账户。将为此部署中的所有 AWS 使用费用付费。
- **Hosting**：通过账号加入流程建立的与 Service Workbench 主账户关联的账户，用于托管与 Service Workbench 工作区关联的计算资源（Amazon SageMaker 笔记本实例、Amazon EC2 Windows 和 Linux 实例、Amazon EMR 集群）。

您可以参阅源代码文档中的以下文件，了解有关 Service Workbench 中不同类型的 AWS 账户的更多信息：

- `README.md`
- `main/solution/prepare-master-acc/README.md`

