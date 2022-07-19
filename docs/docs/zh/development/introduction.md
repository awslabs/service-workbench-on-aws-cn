---
id: introduction
title: Local Development Introduction
sidebar_label: Introduction
---

部署应用程序和 UI 后，您可以开始在计算机上进行本地开发。 您将运行使用相同 lambda 函数代码的本地服务器。 要开始本地开发，请运行以下命令来运行本地服务器:

```重击
$ cd 解决方案/后端
$ pnpx sls 离线 -s $STAGE
$ 光盘 -
```

然后，在单独的终端中，运行以下命令来启动 ui 服务器并打开浏览器:

```重击
$ cd 解决方案/用户界面
$ pnpx sls start-ui -s $STAGE
$ 光盘 -