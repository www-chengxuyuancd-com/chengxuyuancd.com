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