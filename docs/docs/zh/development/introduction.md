---
id: introduction
title: 本地开发介绍
sidebar_label: 本地开发介绍
---

部署应用程序和 UI 后，您可以开始在计算机上进行本地开发。 您将运行使用相同 lambda 函数代码的本地服务器。 要开始本地开发，请运行以下命令来运行本地服务器：

```bash
$ cd solution/backend
$ pnpx sls offline -s $STAGE
$ cd -
```

然后，在单独的终端中，运行以下命令来启动 ui 服务器并打开浏览器：

```bash
$ cd solution/ui
$ pnpx sls start-ui -s $STAGE
$ cd -
```