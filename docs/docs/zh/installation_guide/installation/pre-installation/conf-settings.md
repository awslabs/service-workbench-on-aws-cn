---
id: conf-settings
title: 配置设置
sidebar_label: 配置设置
---
### Stage name

Stage name 用于允许来自同一账户的多个 Service Workbench 部署。它代表配置文件的名称。对于 Amazon Simple Storage Service ([Amazon S3](https://aws.amazon.com/s3/)) 部署存储桶中的限制，Stage name不得超过五个字符。存储桶是 Amazon S3 中用于数据存储的基本容器。
您可以选择自己的stage名称。如果您计划只部署一次解决方案，一个常见的做法是使用您自己的登录名。在本章节中，自定义Stage name表示为 `<stage>`。

### 可单独部署的组件

Service Workbench 代码分为多个（目前是七个）可单独部署的组件 (SDC)：后端、用户界面、部署后、部署前、edge-lambda、基础设施、机器镜像和 prepare-aster-acc。每个 SDC 在位置 main/solution 中都有一个目录。您可以从根目录运行脚本，也可以使用单独的脚本单独部署每个 SDC。有关更多信息，请参阅 [无服务器框架和项目](../../components.md)。

### 准备主配置文件

您可以复制示例全局 AWS Config 文件，命名为您的Stage name并修改它。主配置的当前默认值存储在目录的默认文件中，`main/config/settings/.defaults.yml`。如果Stage name的设置文件不可用，则从此默认文件中读取值。

要创建自定义（以Stage name的）设置文件，请在目录 `main/config/settings` 中，将 `example.yml` 复制到 `<stage>.yml` 并编辑此新文件。默认值从 `.defaults.yml` 中读取，除非这些值在此文件中被覆盖。下表描述了默认值:

|配置 |默认值 |
| ------------ | ------------ |
| `awsRegion` | `us-east-1` |
| `awsProfile` |无默认值；将此设置为您当前的 AWS 配置文件，除非使用默认配置文件或实例配置文件。 |
| `solutionName` | `sw` |
| `envName` |与Stage name相同 |
| `envType` | `prod` |
| `enableExternalResearchers` | `false` |

### 自定义身份提供者
Service Workbench 内置的 IdP 是 Cognito 用户池，如果不想使用 Cognito 用户池作为 IdP 或者部署区域不支持 Cognito 用户池，您可以使用外部 OIDC IdP，例如 Keycloak、Authing 和 Okta 来与 Service Workbench 集成。

要使用OIDC IdP，首先需要安装或应用OIDC IdP，详情可参考[OIDC Providers Settings](./oidc-providers)，然后在`<stage>.yml`文件中添加如下配置:
```
defaultIdpType: oidc
oidcIssuer: xxx
oidcClientId: xxx
rootUserEmail: xxx
rootUserFirstName: xxx
rootUserLastName: xxx
```

### 自定义域名

要使用自定义域名，请输入手动创建的 TLS 证书的域名和 ARN。

```
domainName: host.domain.toplevel
certificateArn: <ARN>
```
* **说明**：当前的实现假定 DNS 在其他地方处理。未来改进后将自动处理证书和 Route 53 条目的创建。
* **说明**：安装 Service Workbench 时，该步骤是可选的。对于由西云数据运营的亚马逊云科技中国（宁夏）区域（cn-northwest-1）或由光环新网运营的亚马逊云科技中国（北京）区域（cn-north-1），必须配置“域名”。请参考[部署到中国区域的先决条件](./china-prerequisites)创建ICP许可域。
* **说明**：如果当前 AWS 账户 Route 53 中未管理 DNS 解析，请将 `customDomainInR53` 配置设置为 `false`。

### 命名空间

许多已部署资源的名称都包含一个命名空间字符串，例如“mystage-va-sw”。该字符串是通过连接以下内容组成的:

+ 环境名称
+ 区域简称（例如，US-East-1 或 US-West-2 简称为 `va`，可在 `.defaults.yml` 中定义）
+ 解决方案名称

### 部署到中国区域时的额外配置
如果您在北京/宁夏地区部署 Service Workbench，请在 `<stage>.yml` 文件中设置以下配置。

```
awsPartition: aws-cn
awsSuffix: amazonaws.com.cn
```

### 准备SDC配置文件

每个 SDC 都有一个 `config/settings` 目录，您可以在其中放置自定义设置。设置文件以Stage name `<mystagename.yml>` 命名。一些 SDC 设置目录包含一个“example.yml”文件，可以将其复制并重命名为该 SDC 的设置文件。否则，无论Stage name是什么，都会读取并使用该目录中的默认文件 `.defaults.yml`。

**注意**：安装 Service Workbench 时，该步骤是可选的。


### 支持的区域

以下区域支持运行 Service Workbench 所需的所有 AWS 服务和功能:
+ US East (Ohio)
+ US East (N. Virginia)
+ US West (N. California)
+ US West (Oregon)
+ Asia Pacific (Mumbai)
+ Asia Pacific (Seoul)
+ Asia Pacific (Singapore)
+ Asia Pacific (Sydney)
+ Asia Pacific (Tokyo)
+ Canada (Central)
+ Europe (Frankfurt)
+ Europe (Ireland)
+ Europe (London)
+ Europe (Paris)
+ Europe (Stockholm)
+ South America (São Paulo)
+ China (Beijing) Region Operated by Sinnet
+ China (Ningxia) Region operated by NWCD
+ Asia Pacific (Hong Kong)

