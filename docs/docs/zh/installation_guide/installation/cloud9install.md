---
id: cloud9install
title: 通过Cloud9 安装 Service Workbench
sidebar_label: 通过Cloud9 安装 Service Workbench
---


您可以使用 AWS Cloud9 安装 Service Workbench。本部分提供有关使用 AWS Cloud9 IDE 安装 Service Workbench 的过程的信息。

|部分 |说明 |
| ------------ | ------------ |
| [创建 AWS Cloud9 实例](#createinst) |描述创建将用于 Service Workbench 安装的 AWS Cloud9 实例的步骤。 |
| [修改磁盘容量](#modifyvol) |描述修改卷大小的步骤。 |
| [安装节点包管理器](#pakcer) |描述安装节点包管理器的命令。 |
| [克隆 Git 目录](#git) |描述克隆包含 Service Workbench 安装的 Git 目录的命令。 |
| [制作环境文件的副本](#env) |描述了制作环境文件副本以及在文件中为 Service Workbench 安装进行所需设置的步骤。 |
| [运行脚本安装Service Workbench](#script) |描述安装 Service Workbench 的步骤。 |


### 创建 AWS Cloud9 实例

<a name="createinst"></a>

1. 进入 AWS Cloud9 产品页面。
2. 选择**创建环境**按钮。
3. 输入 AWS Cloud9 环境的名称和描述。
4. 选择**下一步**。
5. 对于 **Instance type**，选择 **m5.large (8 GiB + 2 vCPU)**。
6. 对于 **Platform**，选择 **Amazon Linux 2**。
7. 选择**下一步**。
8. 查看所有更改并选择**创建环境**。

### 修改磁盘容量
<a name="modifyvol"></a>

有关修改磁盘容量的信息，请参阅[调整环境使用的 Amazon EBS 卷的大小](https://docs.aws.amazon.com/cloud9/latest/user-guide/move-environment.html#move-environment -调整大小）。

### 安装打包程序
<a name="pakcer"></a>

Packer 用于构建 AMI。有关打包程序安装的步骤，请参阅 [README](https://github.com/awslabs/service-workbench-on-aws-cn/blob/develop/addons/addon-base-raas/packages/serverless-packer/README.md)。

#### 验证文件大小

要验证文件大小，请键入:
`df -hT`
#### 检查安装的节点版本

输入 `node --version`

要安装长期支持版本，请输入:

`nvm 安装 14`

### 安装节点包管理器

<a name="npm"></a>

`npm install -g pnpm`
#### 验证 Go 版本

`go version`

**注意**:将所有内容安装在一个目录中。

### 克隆 Git 目录
<a name="git"></a>

`git clone https://github.com/awslabs/service-workbench-on-aws-cn.git`

### 制作环境文件的副本

1.<a name="env"></a> 在文件资源管理器中，选择`example.yml`。

2. 复制此文件并创建一个新版本。例如，`dev.yml`。

3.在`dev.yml`中取消注释:<br />
     + `awsRegion: us-east-1`<br />
     + `解决方案名称:sw`<br />
     + `envType: dev`<br />
     + `createServiceCatalogPortfolio: true`<br />

4.保存`dev.yml`。<br />

### 运行脚本安装Service Workbench

<a name="脚本"></a>

`./scripts/environment-deploy.sh <stage>`
示例: ./scripts/environment-deploy.sh dev

### 复制 CloudFront URL 详细信息

安装完成后，屏幕上会显示以下详细信息。记下网站 URL 和 root 密码。您可以使用此 URL 和密码登录到 Service Workbench。