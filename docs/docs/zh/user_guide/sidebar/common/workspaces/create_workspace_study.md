---
id: create_workspace_study
title: 创建一个新的 Workspace
sidebar_label: 创建一个新的 Workspace
---

用户可以选择一项或多项研究数据并启动工作区来访问和分析该数据。要启动工作区，请执行以下步骤:

1. 在门户中，使用左侧菜单导航到 **Studies** 页面。
2. 选择要附加到新工作区的研究数据。
   1. 注意:如果研究处于 *Pending* 或 *Error* 状态，则托管数据的 AWS 账户可能存在权限问题。您将无法选择研究数据。请联系您的管理员。
3. 一旦你选择了所有你想要的研究数据，点击**下一步**按钮。
4. 选择您想要的工作区类型，然后单击**下一步**按钮。
5. 在 **Name** 字段中输入 Workspace 的名称。
6. 在 **Project ID** 下拉字段中选择此 Workspace 将属于的项目。
7. 选择**配置**类型。
8. 在 **Description** 字段中输入 Workspace 的说明。
9. 单击**创建研究工作区**按钮。

这将部署新的工作区并附加选择的研究。您将自动被重定向到门户上的工作区选项卡。

**NOTE** 
如果您要部署 EMR、EC2 - Linux 或 EC2 - 基于 Windows 的工作区，您还将被要求提供**列入白名单的 CIDR**。
您当前的 IP 地址会自动检测为 x.x.x.x/32。
这将用于配置与此实例关联的安全组，使您能够获得访问权限。


**TIP**
建议您将列入白名单的 CIDR 范围限制为仅需要访问工作区的 IP 地址。