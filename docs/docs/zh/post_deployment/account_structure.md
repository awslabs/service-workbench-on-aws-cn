---
id: account_structure
title: 账户结构
sidebar_label: 账户结构
---

Service Workbench 使用_三种_类型的帐户。您将在整个文档中看到这些帐户名称。

- **Organizational** ：持有创建托管账户的AWS Organizatio服务的账户。请注意，您可能已经有了获取组织支持的 AWS 账户的方法。如果是这种情况，您将不会在加入主机帐户时创建组织帐户或使用 Service Workbench 中的创建帐户功能。
- **Main**：部署 Service Workbench 的帐户。将为此部署中的所有 AWS 使用费用付费。
- **Master**：持有创建成员账户的 AWS Organization服务的账户。
- **托管账户**：通过账号加入流程建立的与 Service Workbench 主账户关联的账户，用于托管与 Service Workbench 工作区关联的计算资源（Amazon SageMaker 笔记本实例、Amazon EC2 Windows 和 Linux 实例、Amazon EMR 集群）。

阅读源代码文档中的以下文件，了解有关 Service Workbench 中不同类型的 AWS 账户的更多信息：

- `README.md`
- `main/solution/prepare-master-acc/README.md`