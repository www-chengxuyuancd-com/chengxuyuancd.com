---
title: tree 忽略部分目录
sidebar_position: 10
---

tree命令显示当前文件夹的目录结构，这是一个非常有用的命令，可以帮我们迅速了解当前目录的结构。

但有些文件夹里的内容我们是不想看到的（可能里面有太多的文件，又或许我们已经对里面的内容已经了解）

这时就需要忽略掉这些内容。

-I命令允许你使用正则匹配来排除掉你不想看到的文件夹，例如：node_modules里面有很多我们不希望看到的文件

`tree -I "node_modules"`


```shell
(base) ➜  project-1 tree -I node_modules
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js

4 directories, 11 files

```

也可以使用|同时排除掉多个文件夹：

`tree -I "node_modules|cache|test_*"`
最后一个使用到正则匹配，这样以test_开头的文件夹都不会被显示出来。


