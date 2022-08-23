---
id: software-req
title: 软件要求
sidebar_label: 软件要求
---

单击下面的链接下载并安装适合您的安装环境的软件:

|软件 |功能 |
| ------------ | ------------ |
| AWS 主账户 |部署 Service Workbench。我们建议您为此部署指定一个 AWS 账户。此外，您还需要管理员访问要在其中部署工作区的 AWS 账户。 |
| [AWS 命令​​行界面 (CLI)](https://aws.amazon.com/cli/) |从您的终端启动 AWS 服务。您必须准备好适当的 AWS 编程凭证。您还必须拥有在 AWS 账户上部署平台的适当权限。 |
|Packer |用于构建 AMI。有关安装 Packer 的信息，请参阅此 [README](https://github.com/awslabs/service-workbench-on-aws/blob/b20208099d5acf51816ee4efd5b5bb3bf6d22fc8/addons/addon-base-raas/packages/serverless-packer/README.md)。
| Pnpm 和 Node.js | <ul><li>安装和管理平台依赖中指定的 JavaScript 包。请参阅 [Pnpm](https://pnpm.io/installation)。 </li><li>构建 JavaScript 文件。请参阅 [Node.js](https://nodejs.org/en/)。</li><li>为云部署构建和打包代码。请参阅 [无服务器框架](https://www.serverless.com/)。有关使用 `node.js` 的任何问题，请参阅 [疑难解答](/zh/installation_guide/troubleshooting) 部分。</li></ul> |
| [golang](https://golang.org/dl/) |用于创建在 AWS Service Catalog EC2 基于 Windows 的研究环境中使用的多部分 S3 下载器工具。 |

**注意**：不要将 Service Workbench 安装在 `root` 目录中。
