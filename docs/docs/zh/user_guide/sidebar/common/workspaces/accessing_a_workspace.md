---
id: accessing_a_workspace
title: 访问 Workspace
sidebar_label: 访问 Workspace
---

您可以连接到您有权访问的工作区。要访问工作区，请执行以下步骤:

在门户中，使用左侧的菜单导航到 **Workspaces** 页面。
在工作区列表中，找到要连接的工作区。

### 连接到 SageMaker 和 EMR 工作区

单击 **Connect** 按钮，Workspace 必须处于 **Ready** 状态才能访问它。
选定的研究数据将显示为在工作区（EMR 或 SageMaker）上运行的 Jupyter 笔记本中的已安装目录。
这些研究目录将包含上传到相应研究的文件。
在短暂的延迟之后，从 Service Workbench 上传到研究的任何文件都将自动显示在已安装的研究目录中。

> 注意:EMR 实例的密码是“go-research-on-aws”

### 连接到 EC2 Linux

1. 单击 EC2 Linux 实例中显示的连接按钮
2.点击创建密钥按钮，下载密钥文件（这是下载密钥文件的唯一机会）
3. 将密钥文件保存在本地并运行`chmod 600` 来限制对密钥文件的访问
4. 单击“使用此 SSH 密钥”按钮并按照说明链接到 EC2 实例
5. 如果页面上的 60 秒倒计时超时，只需再次单击“使用此 SSH 密钥”按钮并继续
6. 使用屏幕上显示的命令通过 SSH 连接到 EC2 Linux 机器。请注意，您可能需要在本地计算机上调整私钥的路径。
7. SSH 后，所选研究将显示为 EC2 Linux 实例上的挂载目录。这些研究目录将包含上传到相应研究的文件。任何从 Service Workbench 上传到研究的文件都会在短暂延迟后自动出现在挂载的研究目录中。

### 连接到 EC2 windows

单击连接按钮，按照说明使用本地 RDP 客户端链接到实例。

> 注意:EC2 证书可能会弹出警告消息。这是正常行为，因为 EC2 Windows 实例具有自身
> 签署的 SSL 证书。点击继续连接。

完成 RDP 后，所选研究将显示为“D”驱动器中 EC2 Windows 实例上的目录。
这些研究目录将包含上传到相应研究的文件。

对于 EC2 Windows，选定的研究数据将复制到附加的 EBS 卷，而不是在其他工作区类型的情况下安装 FUSE。
如果所选研究是可写的，则本地更改会尽快同步回 S3。

它使用自定义 S3 Synchronizer 工具（即 `c:\workdir\s3-synchronizer.exe`）工具将更改从 S3 同步到本地 EBS 卷，反之亦然。
   
请注意以下特定于 EC2 Windows 工作区类型的限制:

**限制:**

**S3 到本地同步限制:**
- 如果所选研究是只读的，则在本地映射研究目录及其子目录下所做的任何更改都将在定期同步后**丢失**。不会保留任何本地更改。
- 延迟的持续时间至少等于定期下载间隔加上 S3 更改的下载时间，以反映本地 EBS 卷。
- 删除研究 S3 位置中的子目录会将相应的子目录保留为本地 EBS 卷上的空目录。

**本地到 S3 同步限制:**
- 如果文件大小（字节）没有变化，则不会将更改从本地上传到 S3
- 如果文件为空（即零字节），则不会从本地上传更改到 S3
- **冲突解决未定义:** 即，如果文件在 S3 和本地同时修改，则行为未定义。无论哪个更改先同步，都可能获胜。

**S3 同步器工具:**
- 同步器在 EC2 Windows 实例启动时自动启动
- 您可以通过在 Windows 任务管理器中查找 `s3-synchronizer.exe` 来检查 S3 Synchronizer 工具是否正在运行
- **停止:** 要停止同步器，请在 Windows 任务管理器中右键单击 `s3-synchronizer.exe` 并选择 `结束任务`
- **Starting:** 要启动同步器，请运行 powershell 脚本 `c:\workdir\start-s3-synchronizer.ps1`（右键单击，选择 `Run with Powershell`）。
- **疑难解答:** 查看日志文件 `c:\workdir\s3-synchronizer-stderr.txt` 和 `c:\workdir\s3-synchronizer-stdout.txt`

### 连接到 RStudio

您可以使用 AWS [合作伙伴的存储库](https://github.com/RLOpenCatalyst/Service_Workbench_Templates) 中提供的模板和 AMI 连接到 RStudio 工作区类型。有关新 RStudio 增强功能的更多信息，请参阅*Service Workbench 部署后指南* 的 [创建 RStudio ALB 工作区](/deployment/post_deployment/aws_accounts#creating-rstudio-alb-workspace) 部分。

### 启动和停止工作区

EC2 Windows、EC2 Linux、RStudio 和 SageMaker 工作区可以在不使用时停止。单击停止按钮停止工作区，单击开始按钮再次启动工作区。

### 常见连接问题

与工作区的连接仅限于特定的 CIDR 块。

- 检查您的公共 IP 是否被工作区的受限 CIDR 块覆盖。
- 检查工作区类型配置是否在“AccessFromCIDRBlock”字段中具有硬编码值。 （仅限管理员）
- 如果您使用 VPN，您的公共 IP 地址可能会更改。尝试断开 VPN，然后连接到工作区。
