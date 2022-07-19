---
id: instance-req
title: 安装实例的要求
sidebar_label: 安装实例的要求
---


import useBaseUrl from '@docusaurus/useBaseUrl';

|部分 |说明 |
| ------------ | ------------ |
| [创建 EC2 实例](#createinst) |提供有关为 Service Workbench 安装选择 EC2 实例大小的信息。 |
| [配置 EC2 实例](#confinst) |描述配置 EC2 实例、创建 IAM 角色以及将管理员角色分配给 EC2 实例的过程。 |
| [在EC2实例上安装所需软件](#install) |描述克隆包含 Service Workbench 安装的 Git 目录的命令。 |


### 创建一个 EC2 实例

<a name="createinst"></a>

您可以创建具有以下规格的 EC2 实例:

- Amazon EC2 实例类型:使用 `T2.medium` Amazon EC2 实例或更大。更大的机器有更快的网络，更大的磁盘有更高的性能。

**重要提示**:建议安装所需的磁盘驱动器大小为 40 GB。

- VPC 和子网:使用默认的 VPC 和子网。
- AWS IAM 角色:将具有足够权限的 AWS IAM 角色附加到您的实例，例如管理员访问权限。

### 配置 EC2 实例

<a name="confinst"></a>

可以为 Amazon EC2 实例分配一个包含 AWS IAM 角色的实例配置文件。 AWS IAM 角色为 Amazon EC2 实例提供一组权限。 Amazon EC2 实例执行由其 AWS IAM 角色定义的操作。向 Amazon EC2 实例添加 AWS IAM 角色可让您的应用程序安全地进行 API 调用，从而减少管理安全凭证的需要。
Service Workbench 部署应用程序必须能够创建 AWS 资源。满足此要求的最简单方法是为 Amazon EC2 实例提供管理员角色。

#### 创建新的 IAM 角色


在创建新的 Amazon EC2 实例时，可以将实例配置文件分配给 Amazon EC2 实例。

1. 选择位于 AWS IAM 角色下拉列表旁边的**创建新的 IAM 角色**。要继续该过程，请突出显示 Amazon EC2 并继续访问权限。

<img src={useBaseUrl('img/deployment/installation/iam1.png')} />

2. 对于 **Permissions**，从过滤器中选择 **AdministratorAccess** 并继续执行 **tags**。

<img src={useBaseUrl('img/deployment/installation/iam2.png')} />

3. 在 **Review** 页面中，输入角色名称。
 
<img src={useBaseUrl('img/deployment/installation/iam3.png')} />

4. 返回 **Amazon EC2** 选项卡，刷新 **IAM 角色** 下拉菜单，然后选择您的管理员角色以附加到新的 Amazon EC2 实例。

<img src={useBaseUrl('img/deployment/installation/iam4.png')} />

5. 创建 Amazon EC2 实例。

#### 将角色添加到现有实例

要将角色添加到已在运行的 Amazon EC2 实例:

1. 在 EC2 控制台中选择 Amazon EC2 实例。
2. 在 **Actions** 菜单上，选择 **Security, Modify IAM role**。
3. 在 **Modify IAM role** 屏幕中，选择您创建的角色并选择 **Update IAM role**。
 
### 在 EC2 实例上安装所需的软件

<a name="安装"></a>

1. 在 EC2 实例上安装用于在 AWS 上安装 Service Workbench 的必备软件（无服务器和 pnpm）:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm install 14
npm install -g pnpm@5.18.9
npm install -g serverless hygen
```

2. 运行以下命令显示无服务器包的版本:

`serverless -v`

3. 如果要在Service Workbench 中部署Windows 工作区，必须在部署前安装Go lang。
   `sudo yum install golang`
   安装完成后，请运行`go version`查看版本，版本应为`1.13.7`或更高版本。