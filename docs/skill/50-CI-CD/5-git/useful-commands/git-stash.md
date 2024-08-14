---
title: Git Stash 小技巧
sidebar_position: 50
---

# Git Stash 命令简介

`git stash` 是一个非常有用的 Git 命令，它允许你在工作目录中保存当前的修改，并将其“藏匿”起来，以便稍后恢复。

这在你需要切换到其他分支或处理其他紧急任务时特别有用。

基本用法很简单：


```shell
git stash save "描述"
```

这个命令将当前的工作目录中的修改存储到一个栈中，可以带一个描述性的信息。默认情况下，save 参数是可选的，你也可以只用 git stash。

接着你可以切换到其他分支，处理其他任务，然后再回到原来的分支。

一旦你回到原来的分支，你可以使用以下命令来应用之前暂存的修改：

```shell
git stash apply
```

这会将最近的暂存修改应用到当前分支上。如果你有多个暂存的修改，可以通过 `git stash apply stash@{n}` 来应用特定的暂存修改，其中 n 是暂存的索引号。

你也可以使用 `git stash pop` 命令来应用最近的暂存修改并将其从栈中移除。

当你在应用或弹出暂存修改后，可以使用 `git stash list` 命令来查看暂存栈的内容。

如果你想要丢弃某个暂存的修改，可以使用 `git stash drop` 命令：

`git stash drop stash@{n}`

