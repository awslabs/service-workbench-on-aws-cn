---
id: authentication
title: Upgrading deprecated internal authentication
sidebar_label: Upgrading to deprecated internal authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';

在 Service Workbench 版本 5.0.0 中，不推荐使用内部身份验证。要从当前版本的 Service Workbench 升级到此版本，管理员需要通过停用、终止或取消关联内部用户及其关联的资源来准备升级环境。必须完成以下任务才能为升级准备 Service Workbench 环境:

+ 必须终止由内部认证用户创建的工作区。
+ 内部验证用户生成的 SSH 密钥必须停用或删除。
+ 内部认证用户不能关联到任何项目。
+ 内部身份验证用户不能与任何组织研究相关联。
+ 必须停用或删除内部认证用户（包括 root 用户）。

要在支持内部身份验证时允许管理员恢复到 Service Workbench 版本，我们建议停用而不是删除资源。

如果您在部署 5.0.0 版本之前尚未创建 IdP/native Cognito 用户，您可以重新部署之前的版本以创建它们，然后重新尝试部署 5.0.0 版本。

**重要**:请按此顺序遵循这些说明，以避免资源在本应被删除之前被删除。一些资源依赖于其他资源处于活动状态以允许停用。

您可能需要使用 Service Workbench API 库来完成此过程。您可以使用 [Postman](https://www.postman.com/)（可以用作 Web 版本或下载到桌面的外部软件）或命令行包 [cURL] 来执行此操作（https://curl.se/）。有关如何设置 Postman 环境的说明，请参阅 [为 Service Workbench 设置 Postman](#setpostman)。

## 终止工作区

1. 使用内部或外部身份验证管理员帐户以管理员身份登录 Service Workbench。
2. 终止工作空间:进入工作空间页面，终止内部用户拥有的所有活动工作空间。

## 停用/删除 SSH 密钥

### 使用 Service Workbench UI 删除 SSH 密钥

使用 Service Workbench UI，您只能看到自己的 SSH 密钥，并且只能删除 SSH 密钥。一种选择是让所有用户在部署之前登录并删除他们所有的 SSH 密钥。或者，如果您尝试部署最新版本的 Service Workbench，升级失败的输出应列出您需要停用的 SSH 密钥 ID。管理员可以使用 `{{baseURL}}/api/key-pairs/:keyPairId/deactivate` API 停用其他用户的 SSH 密钥。对每个需要停用的 SSH 密钥重复您选择的任何过程。

### 使用 Postman 停用 SSH 密钥

使用 Postman 时，请确保您的环境变量中有一个有效的令牌（有关获取此令牌的说明，请参阅 [获取身份验证令牌](#token)。

1. 在 Collections or APIs 部分，导航到 `service-workbench-on-aws/api/key-pairs/{key Pair Id}` API。
2. 选择**PUT Deactivate key pair**。
3. 在 **Params** 部分中，将失败部署的输出中的 SSH 密钥 Id 粘贴到 keyPairId 的路径变量中。
4. 选择**发送**。

<img src={useBaseUrl('img/deployment/installation/deactivate_ssh_key.png')} />

 
### 使用命令行停用 SSH 密钥

使用命令行时，请确保您拥有有效的令牌。有关如何获取此令牌的更多信息，请参阅 [获取身份验证令牌](#token)。在您的终端中，粘贴并替换以下内容:

```
curl --location --request PUT 'http://{{baseURL}}/api/key-pairs/{{keyPairId}}/deactivate' \
--header '内容类型:应用程序/json' \
--header '授权:承载 {{token}}' \
--data-raw '{
 “转”:0
}'
```

## 分离项目

1. 在 Service Workbench UI 中，转到用户页面并选择用户选项卡。
2. 对于身份证明者为内部的任何用户，如果 Project 列的值不是 none，请选择 **Detail**。
3. 选择**编辑**。
4. 选择 **Project** 字段中任何值旁边的 **X**。
5. 选择 **Save** 并为所有内部身份验证用户重复此操作。

## 分离组织研究

使用 Service Workbench UI 取消关联组织研究
如果您尝试部署最新版本的 Service Workbench，升级失败的输出应列出您需要取消与内部身份验证用户关联的组织研究及其管理员。 Service Workbench 管理员用户可以使用 `{{baseURL}}/api/studies/:studyId/permissions` API 更改任何组织研究的权限。为每个需要编辑权限的组织研究重复您选择的任何过程。您可以合并从同一个组织研究中删除多个用户，但每个请求只能编辑一项研究。

### 使用 Postman 分离组织学习

使用 Postman 时，请确保您的环境变量中有一个有效的令牌。有关如何获取此令牌的更多信息，请参阅 [获取身份验证令牌](#token)。

1. 在集合或 API 部分，导航到 `service-workbench-on-aws/api/studies/{study Id}/permissions` API。
2. 选择**PUT 更新学习权限**。
3. 在 **Params** 部分，将失败部署的输出中的组织 studyId 粘贴到 studyId 的路径变量中。
4. 在 **Body** 部分，添加您要添加​​和删除的用户的用户 ID 及其各自的权限级别。
5. 选择**发送**。

<img src={useBaseUrl('img/deployment/installation/diss_org_study.png')} />
<img src={useBaseUrl('img/deployment/installation/diss_org_study1.png')} />


### 使用命令行分离组织学习

使用命令行时，请确保您拥有有效的令牌。有关如何获取此令牌的更多信息，请参阅 [获取身份验证令牌](#token)。在您的终端中，粘贴并替换以下内容:

```
curl --location --request PUT 'http://{{baseURL}}/api/studies/{{study-id}}/permissions' \
--header '内容类型:应用程序/json' \
--header '授权:承载 {{token}}' \
--data-raw '{
 “用户添加”:[
 {
 "uid": "u-HJtc1fiQnF5XNmrIu6KLU",
 “权限级别”:“管理员”
 }
 ],
 “用户删除”:[
 {
 “uid”:“u-ebgwibnfdbv57uyeuygrf8”，
 “权限级别”:“只读”
 }
 ]
}'
```
在进行最后一步之前，请尝试部署以升级到最新版本的 Service Workbench。如果除内部身份验证用户检查之外的任何检查未通过，请在继续执行本文档之前重复上述相应步骤来补救。

## 停用内部认证用户

这是最后一步。要停用内部身份验证用户:

1. 在 Service Workbench UI 上，转到 **Users** 页面。
2. 对于每个内部用户，选择**详细信息**。
3. 选择**停用用户**。只有 root 用户可以自行停用。您必须部署 Service Workbench 版本 4.2.0 或更高版本才能将 root 用户作为自身停用。至少创建一个外部身份验证用户后，停用 root 用户。
4. 要停用 root 用户，请以内部身份验证 root 用户身份登录 Service Workbench UI。
5. 选择**详细信息**。
6. 选择**停用用户**。如果您登录到刚刚停用的用户帐户，您将立即失去对 UI 的访问权限。

完成所有这些步骤后，您现在可以部署并查看您是否通过了所有检查。如果检查未通过，请检查命令行上的输出并重复该步骤以停用/终止/取消关联列出的资源。查看 CloudWatch 日志以了解主账户中的预部署情况以了解更多信息。那里应该有额外的日志记录来帮助调试。

**重要**:升级到 Service Workbench 5.0.0 后，内部用户拥有的 My Studies 需要转移给外部 IdP/Cognito 本地用户。 Service Workbench 管理员必须在部署后将这些 My Studies 迁移到相应的外部身份验证用户。管理员负责完成此迁移。这可以通过使用选择的 API 工具来完成。有关如何完成此迁移的说明，请参阅 [迁移我的研究资源](#migrating)。

## 为 Service Workbench 设置 Postman

1. 下载【邮差】(https://www.postman.com/)。 <a name="setpostman"></a>
2.打开Postman后，要么登录，创建一个免费帐户，要么不登录继续应用（底部应该有这个选项）。
3. 在导航窗格中，选择**导入**。
4. 从 Service Workbench 存储库中导入 `openapi.yml`。如果您未登录，这会将 API 作为集合导入。
5. 选择 **Environment quick look** 图标。

<img src={useBaseUrl('img/deployment/installation/setting_postman1.png')} />

6. 在**Environment**部分，要么选择**Add**（如果您还没有为需要编辑的Service Workbench环境设置环境）或者选择与您的Service Workbench环境对应的环境正在准备升级。它将显示为:

<img src={useBaseUrl('img/deployment/installation/setting_postman2.png')} />

<img src={useBaseUrl('img/deployment/installation/setting_postman3.png')} />

7. 如果要添加新环境，则需要添加两个新变量。
    + 创建一个 `baseUrl` 变量。该值应该是 Service Workbench 环境的 API 端点。这可以在部署环境后或在您的 `service-workbench-on-aws` 存储库文件夹中运行 `scripts/get-info.sh <stage>` 后显示的信息中找到:
      ```
      :::service-workbench-on-aws % 脚本/get-info.sh 阶段
      STAGE 作为命令行参数提供:stage
      -------------------------------------------------- ----------------------
      概括:
      -------------------------------------------------- ----------------------
      环境名称:舞台
      解决方案:sw
      网址:https://------------.cloudfront.net
      API 端点:https://---------.execute-api.us-east-1.amazonaws.com/ 阶段
      ...
      -------------------------------------------------- ----------------------
      ```
    + 创建一个令牌变量。有关如何设置此值的更多信息，请参阅 [获取身份验证令牌](#token)。通过选择面板顶部的三个点，然后选择**设置为活动环境**，保存这些值并将此环境设置为活动环境。现在，当您选择 **Environment quick look** 图标时，您应该会看到刚刚添加的信息。如果您使用的是现有环境，请从显示当前活动环境的下拉菜单中导航到该环境。
       +选择所需的环境。
       + 通过选择面板顶部的三个点，然后选择**设置为活动环境**，将此环境设置为活动环境。
11. 现在，当您选择 **Environment quick look** 图标时，您应该可以查看环境信息。
12. 如果您尚未设置它（仅在现有环境的情况下）导航到 `service-workbench-on-aws` 集合或 API 的 **Authorization** 选项卡。
13. 对于 **Type** 下拉列表，选择 **Bearer Token**。
14. 对于 **Token**，输入 `{{token}}`。
15. 保存此配置。  

##获取身份验证令牌

### 使用服务工作台 UI

1. 在 Web 浏览器上登录 Service Workbench。 <a name="token"></a>
2. 右键单击​​并检查页面以显示开发者控制台。
3. 导航到**网络**选项卡。
4. 在 Service Workbench UI 中选择另一个页面。
5. 您应该会看到 **Name** 列中填充的项目。
6. 选择其中之一，然后选择 **Headers** 选项卡。
7.在**Request Headers**部分，应该有一个授权属性
8. 复制该值。这是您的身份验证令牌。

<img src={useBaseUrl('img/deployment/installation/setting_postman4.png')} />


## 迁移我的学习资源

我们将使用 API 调用来迁移 My Study 资源。<a name="migrating"></a>
1.如果不知道需要迁移哪些My Study资源，请先使用`{{baseUrl}}/api/migrate/my-studies GET` API。使用 Postman 时，请确保您的环境变量中有一个有效的令牌。有关如何获取此令牌的更多信息，请参阅 [获取身份验证令牌](#token)。
   + 在集合或 API 部分，导航到 `service-workbench-on-aws/api/migrate/my-studies` API。
   + 在环境中选择**GET list My Study(s)**。
   + 选择**发送**。响应将是一个空列表或我的研究 ID 和当前所有者用户 ID 的列表。在前一种情况下，本节无需进行任何其他操作，因为不需要迁移 My Study 资源。
   + 对于命令行，请确保您拥有有效的令牌。有关如何获取此令牌的更多信息，请参阅 [获取身份验证令牌](#token)。在您的终端粘贴并替换以下内容:
           ```
           curl --location --request GET 'https://{{baseUrl}}/api/migrate/my-studies' \
           --header '授权:承载 {{token}}'
           ```
2. 如果您有 My Study 资源要迁移，您可以对 `{{baseUrl}}/api/migrate/my-studies PUT` API 进行一次 API 调用。您需要拥有要迁移的研究 ID 列表以及要将所有权迁移到的非内部身份验证用户 ID。
   + 对于 Postman，请确保您的环境变量中有一个有效的令牌。有关如何获取此令牌的更多信息，请参阅 [获取身份验证令牌](#token)。
   + 在集合或 API 部分，导航到 `service-workbench-on-aws/api/migrate/my-studies` API。
   + 选择 **PUT 将我的研究迁移到新用户**。
   + 在正文部分，使用 studyId 和 uid 值创建对象。
   + 选择**发送**。

<img src={useBaseUrl('img/deployment/installation/migrating_my_studies.png')} />

对于命令行，请确保您拥有有效的令牌。有关如何获取此令牌的更多信息，请参阅 [获取身份验证令牌](#token)。在您的终端粘贴并替换以下内容:

```
curl --location --request PUT 'https://{{baseUrl}}/api/migrate/my-studies' \
--header '内容类型:应用程序/json' \
--header '授权:承载 {{token}}' \
--data-raw '[
 {
 "studyId": "test_study_id",
 “uid”:“u-C-l14OuIfNk7vL7AqmjvC”
 },
 {
 "studyId": "test_study_id",
 “uid”:“u-C-l14OuIfNk7vL7AqmjvC”
 }
]'
```
您可以通过重复步骤 1 来验证是否迁移了所有 My Study 资源。
 
