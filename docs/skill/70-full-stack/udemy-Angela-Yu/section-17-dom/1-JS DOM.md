---
title: 1. Javascript DOM
sidebar_position: 10
---

## Adding Javascript to Websites

- 第一种方式`<body onload="alert('Hello')">`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body onload="alert('Hello')">
    <h1>Hello</h1>
</body>
</html>
```

- 第二种方式 `<script type="text/javascript">`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>

    <script type="text/javascript">
    alert("Hello");
    </script>
</body>
</html>
```

- 第三种方式 引入外部的 js文件


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>

    <script src="index.js" charset="UTF-8">
    </script>
</body>
</html>
```

```js
alert("Hello");
```

- 通过 js 修改 DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
    
    <script src="index.js" charset="UTF-8"></script>
</body>
</html>
```

```js
document.querySelector("h1").innerHTML = "Good Bye";
```

## Introduction to the Document Object Model(DOM)

- HTML Tree Generator Plugin

- Properties
- Methods


- https://www.w3schools.com/jsref/dom_obj_style.asp


## The Dicee Game

### 1. 课程目标
本节课目的是为了打造出如下网站，网站进来后出现如下两个骰子，代表两个玩家
![初始状态](https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/docs/skill/70-full-stack/udemy-Angela-Yu/section-17-dom/images/image-1.png)

刷新页面后会变化，并判断哪个玩家的骰子大，判断为他赢了

### 第 0 步: 资源准备

### 第 1 步: 创建 HTML 引用 JS 文件

### 第 2 步: 添加骰子图片

目标如下：
![骰子图片](https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/docs/skill/70-full-stack/udemy-Angela-Yu/section-17-dom/images/image-1.png)

### 第 3 步: 修改 JS 文件，设置随机数

> Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.

### 第 4 步: 替换玩家 1 的骰子为随机骰子图片
![替换玩家 1 的骰子为随机骰子图片](https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/docs/skill/70-full-stack/udemy-Angela-Yu/section-17-dom/images/image-5.png)
### 第 5 步: 替换玩家 2 的骰子为随机骰子图片

![替换玩家 2 的骰子为随机骰子图片](https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/docs/skill/70-full-stack/udemy-Angela-Yu/section-17-dom/images/image-5.png)

### 第 6 步: 判断输赢并显示在页面上

![判断输赢并显示在页面上](https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/docs/skill/70-full-stack/udemy-Angela-Yu/section-17-dom/images/image-6.png)