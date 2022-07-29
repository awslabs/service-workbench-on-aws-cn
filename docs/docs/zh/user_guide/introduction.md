---
id: introduction
title: Sidebar 介绍
sidebar_label: Sidebar 介绍
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本文档的这一部分旨在概述如何操作作为此解决方案的一部分提供的基于 Web 的用户门户。
用户门户在屏幕左侧（侧边栏）显示一个菜单栏，其中包含一组链接到 Web 界面不同功能的图标。

根据用户在登录用户界面时所拥有的角色，部分或全部菜单项将可用。
目标是只向用户展示与他们的工作相关的条目，而不是将它们与其他不相关的条目混淆。

根据用户的角色，边栏中提供了以下条目。

<table>
<tr>
<td 宽度="150">
<img src={useBaseUrl('img/deployment/reference/admin_interface_00.jpg')} height="100%" width="100%" />
</td>
<td>
<b>仪表板</b>

显示过去 30 天的支出

<b>授权</b>

列出在 Service Workbench 中配置的身份验证提供程序。这个
包括默认（本地帐户）和任何 Active Directory id 实体
提供者。

<b>用户</b>

创建和管理本地和联合用户和角色。

<b>工作流程</b>

监控并查看由
管理界面。这包括配置 [Account](/zh/post_deployment/aws_accounts) 以及创建和删除 [Workspace](/zh/user_guide/sidebar/common/workspaces/introduction)

<b>帐户</b>

创建和管理帐户。请参阅:[帐户结构](/zh/user_guide/account_structure)
AWS 账户和 Service Workbench 账户之间的关系，以及用于管理的 [Account](/zh/post_deployment/aws_accounts)
行动。

<b>研究</b>

参见:[研究](/zh/user_guide/sidebar/common/studies/introduction)

<b>工作区</b>

请参阅:[工作区](/zh/user_guide/sidebar/common/workspaces/introduction)

</td>
</tr>
</table>
