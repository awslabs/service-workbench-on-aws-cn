---
id: postupgrade
title: 系统升级后处理
sidebar_label: 系统升级后处理
---
### 更新账户

添加到 Service Workbench 的任何新托管账户都必须使用新权限进行更新。对于此过程，您需要 onboard-account.cfn.yml，它是源代码分发的一部分。

对于每个托管账户：

1. 登录托管账户的 AWS 管理控制台。
2. 在该账户的 CloudFormation 控制台中，选择用于加入成员账户的堆栈（通常堆栈名称以 `initial-stack-` 开头）。
3. 选择Update stack并选择`addons/addon-base-raas/packages/base-raas-cfn-templates/src/templates/onboard-account.cfn.yml`文件。您也可以在这里下载:[onboard -account.cfn.yml](https://github.com/awslabs/service-workbench-on-aws/blob/mainline/addons/addon-base-raas/packages/base-raas-cfn-templates/src/模板/onboard-account.cfn.yml)。该堆栈上的所有现有参数应该仍然有效。

### 测试操作

成功部署脚本后，登录到 Service Workbench UI 并测试其功能。要显示 URL 和 root 密码，请运行`scripts/get-info.sh ${STAGE_NAME}`。