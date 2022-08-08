---
id: set_account_budget
title: 设置AWS账户预算
sidebar_label: 设置AWS账户预算
---

要为 AWS 账户设置预算，请执行以下步骤:

1. 在门户中，使用左侧菜单导航到 **Accounts** 页面。
2. 单击顶部的 **AWS Accounts** 选项卡。
3. 单击**预算详细信息** 按钮。
4. 提供预算限制、开始日期和结束日期（结束日期需要距离开始日期不到一年）
5. 提供通知阈值和电子邮件
6. 阈值和邮箱是相互依赖的，请同时填写以获取通知或同时删除以关闭通知

设置预算后，AWS Budget 将监控相应 AWS 账户的实际支出。将发送警报
当实际花费超过每个阈值时发送到通知电子邮件地址。

警报也将在预算结束日期前 7 天发送。如果设置了通知电子邮件，预算结束日期警报将是
发送到通知电子邮件。如果未设置通知电子邮件，预算结束日期警报将发送到电子邮件地址
AWS 账户注册在。