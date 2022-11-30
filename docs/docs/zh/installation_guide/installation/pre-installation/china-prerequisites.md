---
id: china-prerequisites
title: 部署到亚马逊云科技中国区的先决条件
sidebar_label: 部署到亚马逊云科技中国区的先决条件
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本节仅适用于部署到由光环新网运营的中国（北京）区域和由西云数据运营的中国（宁夏）区域的情况。部署之前，请准备一个ICP许可域名。
## 准备一个 ICP 许可域
准备一个 [ICP][icp] 许可域名。 Service Workbench 控制台通过 CloudFront 分发提供服务，该分发被视为 Internet 信息服务。 它被称为**Service Workbench 控制台域**。

**Note** 如果您想要在没有域名的前提下部署和使用Service Workbench，请参考[通过ALB接入Serivce Workbench](/zh/installation_guide/installation/pre-installation/conf-settings#使用application-load-balancer-接入该方案) configurations.


[icp]:https://www.amazonaws.cn/en/support/icp/?nc2=h_l2_su
