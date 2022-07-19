---
id: data_sources
title: Data Sources
sidebar_label: Data Sources
---

＃＃ 介绍 ＃＃

Service Workbench 可以在内部托管研究，并提供对驻留在部署应用程序的 AWS 账户外部的 S3 存储桶中的外部研究的访问权限。数据源页面使管理员能够配置和管理这些研究。

外部研究账户必须向 Service Workbench 提供访问包含外部研究数据的特定 S3 存储桶和路径的权限。这些权限是使用应用程序生成的 AWS CloudFormation 模板在外部账户中创建的。

数据源页面列出了已在 Service Workbench 中注册的外部研究。外部研究也出现在配置权限的研究页面上。

## 使用 Service Workbench 注册外部研究 ##

要注册外部研究，请执行以下步骤:

### 第 1 步:设置外部学习帐户 ###

1. 使用左侧的菜单导航到 **Data Sources** 页面。
2. 点击**注册研究**按钮。
3. 输入包含 S3 存储桶的 AWS 账户的 AWS 账户 ID。
     - 先前注册的外部学习帐户可在下拉列表中找到。
     - 如果选择了之前注册的账户，请跳到第 2 步。
4. 选择将用于部署入职模板的区域。
5. 在 Service Workbench UI 中输入用于标识此帐户的帐户名称。
6. 指定帐户的可选联系信息。

### 步骤 2:指定 S3 存储桶详细信息 ###

1. 对于 **Bucket Name**，选择外部 S3 存储桶的名称。
     - 下拉列表中提供了以前注册的外部存储桶。
     - 如果选择了之前注册的存储桶，则跳到步骤 3。
2. 对于 **Bucket Region**，选择一个区域。
3. 对于**Bucket Default Encryption**，如果外部存储桶使用**AWS Key Management Service key (SSE-KMS)**，则**KMS Arn** 字段需要一个值。

### 步骤 3:指定研究项目详细信息 ###

1. 单击**添加研究**。
2. 对于 **Study Id**，输入唯一的 Study ID。
3. 对于 **Study Name**，输入研究名称。
4. 对于 **Study Folder**，输入文件夹名称（S3 存储桶中的路径）。
5. 对于**Project**，选择一个项目。
6. 选择**类型**。有关详细信息，请参阅 [创建研究](/user_guide/sidebar/common/studies/creating_a_study)。
7. 对于 **Access**，选择 **Read Only** 或 **Read/Write**。如果是组织的研究，则可以在研究页面上按用户分配适当的权限。
8. 对于 **Description**，输入研究项目详细信息。
9. 对于 **Study KMS ARN**，输入值（如果适用）。
10. 对于**Admin**，如果是组织的研究，请为研究选择一个或多个管理员。这可以稍后在 **Studies** 页面上进行编辑。
20. 单击**保存并继续**。

将显示一个信息面板，指示帐户、存储桶和研究已在 Service Workbench 中注册。最后一步是使用生成的 CloudFormation 模板加入帐户。

## 加入外部学习帐户##

如果外部研究帐户是首次加入 Service Workbench，则选择 *Create Stack* 选项。该应用程序将生成一个适合首次入职的新 CloudFormation 模板。

如果外部研究帐户已注册（请参阅上面的“使用 Service Workbench 注册外部研究”部分），则选择 *Update Stack* 选项。该应用程序生成对先前部署的 CloudFormation 模板的更新。

首次注册外部学习账户:

1. 在 **Register Studies** 窗口中，单击 **Next** 以显示 CloudFormation 模板信息。
2. 显示生成的 CloudFormation 模板，特定于外部学习账户和外部 S3 存储桶。选择了适当的 *Create Stack* 或 *Update Stack* 选项。
3. 如果您拥有外部学习账户的管理员权限:
1. 在新的浏览器选项卡中，登录 AWS 管理控制台中的外部研究账户。确保选择了正确的区域。
2. 在 Service Workbench 中，根据需要单击 **Create Stack** 或 **Update Stack** 按钮，将 CloudFormation 模板加载到 AWS 管理控制台中。
3. 在 AWS 管理控制台中，按照提示操作并单击 **Create Stack**。
4. 单击**完成**。
4. 如果您对 S3 存储桶所在的 AWS 账户没有管理员访问权限:
1. 单击按钮将 CloudFormation 模板链接复制到剪贴板。
2. 向帐户管理员创建一封电子邮件，其中包含指向 CloudFormation 模板的链接。
注意:指向 CloudFormation 模板的链接有效期为 12 小时。
3. 单击**完成**。
5. 显示数据源页面，新注册的研究处于 *Pending* 状态。在所有入职完成并且 Service Workbench 可以到达研究后，它将显示状态为可用。
6. 单击**测试连接**。

## 删除外部研究##
目前不支持删除外部研究，它将在未来的版本中提供。

要删除对外部研究账户中数据的访问权限，请删除 AWS 账户中的 CloudFormation 堆栈（在上面的“启用外部研究账户部分”中指定）。这将删除允许访问数据的权限。


