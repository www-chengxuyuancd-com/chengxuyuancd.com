---
title: 1. CSS Font
sidebar_position: 20
---

# 1. Font Size
- 1px(Pixel)
    - 1/96 inch
    - 0.26mm
- 1pt(Point)
    - 1/72 inch
    - 0.35mm
    - in word
- 1em()
    - 100% of parent
- 1rem 推荐
    - 100% of root

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Font-Size</title>
    <style>
      #pixel {
        font-size: 20px;
      }

      #point {
        font-size: 20pt;
      }

      #em {
        font-size: 1em;
      }

      #rem {
        font-size: 1rem;
      }

      footer {
        font-size: 12pt;
      }

      html {
        font-size: xx-large;
      }
    </style>
  </head>

  <body>
    <p id="pixel">1 Pixel is 1/96 of an Inch</p>
    <p id="point">1 Point is 1/72 of an Inch</p>
    <footer>
      <p id="em">1em is 100% the size of the parent element</p>
      <p id="rem">1rem is 100% the size of the root element</p>
    </footer>
  </body>
</html>

```


# 2. Font Weight

- 关键词
    - normal
    - bold
- Relative to Parent
    - lighter
    - bolder
- 数字
    - 100-900


# 3. Font Family

- Helvetica is sans serif
- Times New Roman is serif

```
h1 {
    font-family: Helvetica,sans-serif
}
```

```
h1 {
    font-family: "Times New Roman",sans-serif
}
```

- fonts.google.com


# 4. Text Align

```
h1 {
    text-align:center
}
```