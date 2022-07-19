---
id: rstudio
title: 搭建 RStudio ALB workspace
sidebar_label: 搭建 RStudio ALB workspace
---

### 概述

您可以使用 AWS 合作伙伴存储库中提供的模板和 AMI 访问 RStudio 工作区类型。下表总结了在 Service Workbench 环境中完成 RStudio ALB 工作区安装所需遵循的步骤顺序。

|任务 |说明 |
| ------------ | ------------ |
| [创建主账号和主机账号](#createacct) |提供有关如何设置用于 RStudio 工作区类型的环境的信息。在这些帐户中，您将设置托管区域，配置部署 RStudio ALB 工作区所需的证书。 |
| [在主账户中创建公共托管区域](#hostedzone) |提供有关如何路由域/子域的流量的路由信息​​。 |
| [在共享域中创建新的名称服务器记录](#nserver) |为托管区域提供名称。在这里，您将复制您在主账户中创建的值（包含路由信息）。 |
| [在托管区域的主帐户中请求公共证书](#pubcert) |在托管区域的主账户中请求公共证书。该地区被选为“us-east-1”。使用此选项，您向 Amazon 请求公共证书。默认情况下，这些公共证书受浏览器和操作系统的信任。 |
| [使用最新的 Service Workbench 代码创建暂存文件](#staging) |下载最新的 Service Workbench 代码并设置暂存文件以部署 RStudio ALB 工作区。有关暂存文件的更多信息，请参阅 [配置设置](/installation_guide/installation/pre-installation/conf-settings)。 |
| [创建 AMI](#ami) |提供研究人员用于研究的 RStudio 环境的基础。有关更多信息，请参阅 AWS 合作伙伴的 [README](https://github.com/RLOpenCatalyst/Service_Workbench_Templates/blob/main/RStudio/machine-images/config/infra/README.md)。 |
| [安装 EC2 RStudio 服务器](#rstudio) |将 RStudio 部署到 Service Workbench 的产品组合中。有关更多信息，请参阅 AWS 合作伙伴的 [README](https://github.com/RLOpenCatalyst/Service_Workbench_Templates/blob/main/RStudio/machine-images/config/infra/README.md)。 |
| [在托管区域域的成员帐户中请求新的公共证书](#newpubcert) |提供有关如何使用 ACM 为成员（托管）帐户请求公共证书的步骤。证书包含用于导入产品的 ARN 值。 |
| [在主账户托管区创建新记录](#newrec) |验证成员帐户公共证书。如果没有验证，则无法创建工作区。 |
| [在 Service Workbench 中访问 RStudio 工作区](#swb) |使用 Service Workbench 配置 RStudio ALB。 |


### 创建主账户和托管账户

<a name="createacct"></a>

**任务**:您将学习创建一个主帐户和一个主机帐户，并为这些帐户分配管理员角色。

1. 选择**创建/注册帐户**。
2. 在 **Account Creation** 页面上，选择 **Create**。
3. 在 **Create AWS Accounts** 页面上，指定账户电子邮件地址、账户名称、二级所有者、财务所有者、所有权组、描述和账户类型。
4. 选择**提交**。
5. 选择**管理帐户**。
6. 创建控制台角色:
       一个。选择**添加**。
       湾。对于 **One Click Roles**，选择 **Admin**。

**注意**:按照上述相同步骤创建主机帐户并选择管理员角色。在描述中，指定它是一个主机帐户。


### 在主账户中创建公共托管区域

<a name="hostedzone"></a>

**任务**:您将学习为主账户创建一个公共托管区域并为其添加路由信息。

1. 登录 AWS 管理控制台。
2. 在 AWS 服务下，选择 **Route 53**。
3. 在 Route 53 仪表板上，选择 **Hosted zone**。
4. 选择**创建托管区域**。
5. 在**创建托管区域**页面上:
     一个。对于 **Domain name**，输入域名。
     湾。对于**描述 - 可选**，输入描述。
     C。对于**类型**，选择**公共托管区域**。
6. 选择**创建托管区域**。
7. 复制 **Value/Route traffic to** 字段中的值以供以后使用。

### 在共享域中创建新的名称服务器记录

<a name="nserver"></a>

**任务**:您将学习为公共托管区域创建新的记录名称。

1. 登录 AWS 管理控制台。
2. 在 AWS 服务下，选择 **Route 53**。
3. 在 Route 53 仪表板上，选择 **Hosted zone**。
4. 选择您刚刚创建的托管区域。
5. 选择**创建记录**。
6. 在**快速创建记录**页面，选择**添加另一条记录**。
7. 对于**记录名称**，输入名称。
8. 对于**记录类型**，选择**NS – 托管区域的名称服务器**。
9. 对于 **Value**，输入您之前从 Value/Route traffic to 字段复制的值。
10. 对于**TTL（秒）**，输入值。
11. 对于 **Routing policy**，选择 **Simple routing**。
12. 选择**创建记录**。

### 在托管区域的主帐户中请求公共证书

<a name="pubcert"></a>

**任务**:您将学习如何在 AWS Certificate Manager (ACM) 中为主账户申请证书并从该证书访问 CNAME 记录详细信息。

#### 在 AWS Certificate Manager 中请求证书

1. 登录 AWS 管理控制台。
2. 转到 AWS 证书管理器。
     **注意**:要将 ACM 证书与 Amazon CloudFront 结合使用，您必须在美国东部（弗吉尼亚北部）区域申请或导入证书。
3. 选择**申请证书**。
4. 在 **Request certificate** 页面上，选择 **Request a public certificate**。
5. 选择**下一步**。
6. 在 **Request a public certificate** 页面上:
     一个。对于 **Domain names**，输入域名。
     湾。对于 **选择验证方法**，选择 **DNS 验证 - 推荐**。
7. 选择**请求**。
8. 刷新屏幕以查看新创建的证书。
9. 选择证书以查看详细信息。
10. 在 **Domains** 下，复制 **CNAME name** 和 **CNAME value** 的值。

#### 在主账户中创建新记录

1.进入主账户。
2. 选择之前创建的托管区域。请参阅[在主账户中创建公共托管区域](#hostedzone)。
3. 创建新记录。
4. 对于**记录名称**，粘贴在上一节中创建的**CNAME** 记录的第一部分。
5. 对于 **Value**，粘贴上一节中复制的 **CNAME 值**。
6. 选择**创建记录**。

### 使用最新的 Service Workbench 代码创建暂存文件

<a name="staging"></a>

**任务**:您将学习如何创建和配置暂存文件以设置 RStudio ALB 工作区。

1. 进入`/main/config/settings`目录。
2. 创建一个新的暂存文件。例子:
      `cp example.yml albr.yml`
3. 在新创建的阶段文件中，删除注释并将 awsRegion 保留为 us-east-1。您可以更改 awsProfile 的值，例如 rstudio。更新 `.aws` 文件夹中的配置（配置文件）和凭据（凭据文件），以便包含新帐户详细信息。更新后的配置文件应具有以下值:`region`（默认为`us-east-1`）、输出（`yaml`）、`account_id`和`role_name`。要更新凭据，您需要创建 CLI 用户。有关创建用户的更多信息，请参阅 [IAM 用户](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)。
4. 对于`solutionName`，输入`sw`。
5. 对于 `envName`，输入Stage name，例如，`albr`。
6. 对于 `envType`，输入一个名称，例如，`dev`。
7. 对于 `createServiceCatalogPortfolio`，输入值为 `true`。
8. 对于 `rootUserEmail`，输入电子邮件地址。
9. 对于“domainName”，输入主账户托管区域的域名。
10. 对于`certificateArn`，复制主账户的证书ARN并粘贴。
11. 从 `defaults.yml` 文件中，将 hostsZoneId 复制到新创建的暂存文件中（例如，`albr.yml`）。
12. 复制 Route 53 中的托管区域 ID 详细信息托管区域页面，并将其粘贴到暂存文件的“hostedZoneId”中。

您的新阶段文件现在可以部署了。

### 创建 AMI

<a name="ami"></a>

按照自述文件中的说明安装 EC2 RStudio 服务器 AMI。您可以转到您的主账户并在图像下访问这些 AMI。

注意:编辑配置文件（`RStudio/machine-images/config/infra/configuration.json`）。您需要更新区域（以匹配您的部署配置文件）、“amiName”（建议:“rstudio-alb”）和“awsProfile”（以匹配您的部署配置文件）。更新 `stageName` 以匹配您的部署配置文件。

### 安装 EC2 RStudio 服务器

<a name="rstudio"></a>

按照自述文件中的说明安装 EC2 RStudio 服务器。

### 在托管区域域的成员帐户中请求新的公共证书

<a name="newpubcert"></a>

**任务**:您将学习使用 ACM 为成员（托管）帐户申请公共证书并复制 ARN 值。

1. 登录 AWS 管理控制台。
2. 选择证书管理器。
3. 在 **AWS Certificate Manager** 页面上，选择`Request a certificate`。
4. 选择“下一步”。
5. 对于“证书类型”，选择“请求公共证书”。
6. 选择“下一步”。
7. 在“申请公共证书”页面上:
     一个。对于“域名”，可以通过以下两种方式输入域名:“example.corp.com”和“*.example.corp.com”。这里，`example.corp.com` 是完整的域名。
     湾。对于 **选择验证方法**，选择 **DNS 验证 - 推荐**。
8. 选择**请求**。
9. 在 **Certificate** 页面的 Certificate status 中，复制 ARN。 ARN 将用于导入产品。

### 在主账户托管区域创建新记录

<a name="newrec"></a>

**任务**:此任务验证成员帐户公共证书。

1. 转到托管帐户证书管理器。
2. 在证书页面上，复制“CNAME 名称”和“CNAME 值”的值。
3.切换到主账号。
4. 在 AWS 管理控制台上，选择 **Route 53**。
5. 选择**托管区域**。
6. 选择域名。
7. 选择**创建新记录**。
8. 对于**记录名称**，粘贴在上一节中创建的 CNAME 记录的第一部分。
9. 对于 **Record type**，选择 **CNAME – 将流量路由到另一个域**。
10. 对于 **Value**，粘贴上一节中复制的 **CNAME 值**。
11. 选择**创建记录**。

### 在 Service Workbench 中访问 RStudio 工作区

<a name="swb"></a>

**任务**:您将登录到 Service Workbench，创建用户并配置帐户以使用 RStudio ALN 工作区。

1. 首次以 root 用户登录 Service Workbench。
2. 添加本地用户。
3. 对于**Accounts**、**AWS Accounts**、**Add AWS Account**，添加成员账户。
4. 对于与会员账户关联的**Accounts**、**Indexes**、**Add Index**，创建一个索引。
5. 对于与该索引关联的**Accounts**、**Projects**、**Add Project**，创建一个新项目。
6. 对于**Users**、**Users**、**Detail**、**Edit**，将用户与新项目相关联。
7. 导入 EC2 RStudio Server 并为工作区类型添加新配置。 `ACMSSLCertArn` 要求提供成员帐户证书 ARN。
8. 输入 EC2 实例的实例类型。 `AmiId` 是主账户中新创建的 AMI 的 AMI ID。
9. 批准配置。
10. 通过选择 RStudio Server 工作区类型和配置来创建一个新工作区。
11. 连接到 RStudio 工作区。确保弹出窗口已启用。

