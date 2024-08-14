---
title: 2. 如何添加CSS
sidebar_position: 20
---

- Inline

```html
<html style="background: blue">

</html>
```

- Internal

```html

<html>
    <head>
        <style>
           html {
                background: red;
            } 
        </style>
    </head>
</html>
```

- External

```html
<html>
    <head>
        <link rel="stylesheet" href="./styles.css" />
    </head>
</html>
```
- `rel="stylesheet"` 表示 relationship
- `href="./styles.css"` 表示 location

```css

// style.css
html {
    background: red;
}
```

- 练习
