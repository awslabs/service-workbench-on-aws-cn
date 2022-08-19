---
id: commandline
title: 通过命令行升级Service Workbench
sidebar_label: 通过命令行升级Service Workbench
---

您可以使用下载的源代码升级从命令行安装的 Service Workbench 部署。

### 先决条件

- 确保可以访问安装 Service Workbench 的账户。
- 已有要在此账户中使用的 EC2 部署实例。
- 确保源代码是最新的版本。
- 已有与原始部署中使用的配置文件匹配的配置文件。

### 访问账户

与初始安装类似，从 EC2 实例执行升级很容易。为此，请使用授予对 Service Workbench 账户的访问权限的实例角色。要设置实例并安装必备软件，请参阅安装前步骤。

登录到实例并通过列出 S3 存储桶来测试对账户的访问:
`aws s3 ls`
将显示七个名称相似的存储桶。名称包括稍后在配置文件中需要的几个值。它们具有以下格式:
 `<账户>-<阶段>-<区域>-<解决方案>-<目的>`
例如，桶`012345678901-demo-va-sw-studydata`在账户`012345678901`，Stage name`demo`，区域代码`va（us-east-1）`，解决方案名称`sw`，它托管数据集。

### 下载源代码

在部署实例上，验证初始部署中是否存在名为“service-workbench-on-aws”的目录。如果有，请在下载源代码之前重命名或将其移动到子目录中。这可以防止名称重复。

按照安装 Service Workbench 中描述的步骤，使用 git clone 从 GitHub 下载最新的源代码。

升级 Service Workbench 时，请参阅 [CHANGELOG](https://github.com/awslabs/service-workbench-on-aws-cn/blob/mainline/CHANGELOG.md)，了解升级版本可能需要的其他步骤。

### 设置配置

按照配置设置中的步骤操作，其中文件的名称来自存储桶名称 stem 中的Stage name。在配置文件中，进行以下设置：

- `awsRegion`：请参阅 [区域代码映射](/zh/installation_guide/uninstall) 部分以验证区域代码的完整区域名称。例如，为区域代码 va 设置 awsRegion: us-east-1。
- `solutionName`：使用存储桶名称词干中的解决方案名称（例如:solutionName: sw）

### 升级 Service Workbench

创建配置文件后，运行主部署脚本，如 Service Workbench 安装指南中所述。

在主服务工作台目录中，运行：

`./scripts/environment-deploy.sh ${STAGE_NAME}`

升级后，按照 [系统升级后处理](/zh/installation_guide/postupgrade) 部分中的说明更新 Service Workbench 中的每个账户。