---
id: github-giscus-comments
slug: /github-giscus-comments
title: 让个人网站可以展现通过github 登录实现评论功能
authors: baozige
---

> 兼听则明，偏信则暗。-- 《资治通鉴》

> We all need people who will give us feedback. That’s how we improve. -- Bill Gates

所以外界的评论，看法无论对个人还是对组织都是非常重要的，不能陷入自嗨状态。

而博客系统想要集成评论，并非一定要后端服务，有很多方式可以实现, 比如本文介绍的 Giscus

Giscus：基于GitHub Discussions，对程序员相对友好，评论信息提示通过github邮箱发送。

## [giscus](https://giscus.app/)

利用 GitHub Discussions 实现的评论系统，让访客借助 GitHub 在你的网站上留下评论和反应吧！本项目深受 utterances 的启发。

- 开源。🌏
- 无跟踪，无广告，永久免费。📡 🚫
- 无需数据库。所有数据均储存在 GitHub Discussions 中。:octocat:
- 支持自定义主题！🌗
- 支持多种语言。🌐
- 高可配置性。🔧
- 自动从 GitHub 拉取新评论与编辑。🔃
- 可自建服务！🤳

## 它如何运作

giscus 加载时，会使用 GitHub Discussions 搜索 API 根据选定的映射方式（如 URL、pathname、<title> 等）来查找与当前页面关联的 discussion。如果找不到匹配的 discussion，giscus bot 就会在第一次有人留下评论或回应时自动创建一个 discussion。

访客如果想要评论，必须按照 GitHub OAuth 流程授权 giscus app 代表他发布，或者可以直接在 GitHub Discussion 里评论。你可以在 GitHub 上管理评论。


## 配置

### 语言

选择 giscus 的显示语言。如果找不到你的语言？可以去贡献一个

### 仓库
选择 giscus 连接到的仓库。请确保：

1. 该仓库是公开的，否则访客将无法查看 discussion。
2. giscus app 已安装，否则访客将无法评论和回应。
3. Discussions 功能已在你的仓库中启用。

### 页面 ↔️ discussion 映射关系

选择页面与嵌入的 discussion 之间的映射关系。

