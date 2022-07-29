---
id: solutions
title: AWS解决方案安装方式升级
sidebar_label: AWS解决方案安装方式升级
---

此过程用于升级从 AWS 解决方案自动安装的 Service Workbench 安装。在此安装模型中，CloudFormation 模板启动安装，该安装由 AWS CodeBuild 项目执行。要升级 Service Workbench 部署，您需要访问 Service Workbench 安装。

1. 登录安装 Service Workbench 的账户的 AWS 管理控制台。
2. 打开 AWS CodeBuild 控制台并找到名为“swb-Setup”的 Service Workbench 项目。
3.进入项目，点击最近一次成功构建，打开**Environment Variables**选项卡。请注意以下值:
     - `OBJECT_KEY_NAME`:记录此字符串中的版本号（例如:'1.4.3'），用作下载 Service Workbench 源代码的 URL 的一部分。
     - `SOLUTION_NAME`:默认值为`swb`。
     - `STAGE_NAME`:默认值为`test`。
4. 在**构建项目**页面中:
     - 对于**编辑**，选择**环境**。
     - 展开**附加配置**部分。
5. 编辑 `OBJECT_KEY_NAME` 的值并将其设置为 `service-workbench-on-aws/v1.4.5`。
6. 如有必要，设置 `SOLUTION_NAME` 和 `STAGE_NAME` 的值以匹配之前使用的值。
7. 选择 **Update environment**，返回到 **Build projects** 页面。
8. 选择**开始构建**。该项目运行 20-30 分钟。
9. 通过访问站点 URL 测试部署。
10. 按照 [升级后](/installation_guide/postupgrade) 部分中的说明更新 Service Workbench 中的每个帐户。
