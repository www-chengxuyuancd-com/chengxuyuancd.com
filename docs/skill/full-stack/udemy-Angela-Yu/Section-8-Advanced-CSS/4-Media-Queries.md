---
title: 4. Media Queries
sidebar_position: 40
---

```css
@media (min-width: 600px) {
    h1{
        font-size: 15px;
    }
}

```

- combine

```css
@media (min-width: 600px) and (max-width: 900px) {
    /*styles for screes less than 600px and greater than 900px*/
}

```


- Device
```css
@Media screen(orientation: landscape) {
    /* Styles for landscape orientation*/
}
```

