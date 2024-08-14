---
title: 1. 介绍 JavaScript ES6
sidebar_position: 10
---

## 介绍JavaScript

- Netscape Navigator, 90年代在浏览器界有统治地位的公司
![Netscape Navigator](./images/image1.png)

![image2](./images/image.png)

![alt text](./images/image-1.png)

![alt text](./images/image-2.png)


![alt text](./images/image-5.png)


## Java和 JavaScript 的区别

## Javascript Alerts - Adding Behaviour to websites

* https://developer.mozilla.org/en-US/docs/Web/API/Window/alert


最全的写法是`window.alert("Hello world");`

但是大多数都写成: `alert("Hello world");`

* https://github.com/rwaldron/idiomatic.js

就像《The Elements of Style》

## Data Types

`alert("Hello");` 里面的 `"Hello"`就是 string 类型

类似的数据类型有：
- number
- boolean
- string

## Javascript Variables
- 我叫 xxx
- 我住在 xxx
- 我的兴趣是 xxx

- `prompt("What is your name?");`

- `var myName = "Baozige";`

- `var yourName = prompt("What is your name?");`

## Javascript Variables Exercise Start

```js
var a = "3";
var b = "8";

// 交换 a b 的内容
```

## Naming and Naming Conventions for Javascript Variables

- 要有意义
- 不要用关键字
- 字母，数字，`$`, `_`,其他的都不行

## String Concatenation

`+`

## String Lengths and Retrieving the Number of Characters

```js
var name = "Baozige";
var nameCount = name.length;


```


- `www.twitter-character-counter.com`

## Slicing and Extracting Parts of a String

```js

var name = "Angela";
name.slice(0,1);
```

## toUpperCase

```js

var name = "Baozige";
name = name.toUpperCase();
```

## Challenge: Chaging String Casing Solution

把人名首字母大写

## Basic Arithmetic and the Modulo Operator in Javascript

- `/`
- `%`
- `*`
- `+`
- `-`

- 优先级

- 狗的年纪转换到人的年纪

`humanAge = (dogAge - 2)x4 + 21`

## Increment and Decrement Experssions

- `x++` = `x = x+1`
- `x--` = `x = x-1`

- `x+=2` = `x=x+2`

```
var x = 3;
var y = x++;
y += 1;

```

## Functions Part1: Creating and Calling Functions

```js
function getMilk() {
    // ...
}

```

## Functions Part 1 Challenge - The Karel Robot

- `https://stanford.edu/~cpiech/karel/ide.html`

```js
function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}
 
function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}
 
function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}
 
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
 
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
```


```js
function getMilk() {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
```

```js

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
    var days = (90-age)*365;
    var weeks = (90-age)*52;
    var months = (90-age)*12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
    
    
    
/*************Don't change the code below**********/
}



```

## Functions Part 3: Outputs & Return Values

## BMI Calculator

BMI = weight(kg)/height**2(m**2)

- https://www.nhs.uk/Tools/Pages/Healthyweightcalculator.aspx

```js

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height){
    return Math.round(weight/(height*height));
    return Math.round(weight/Math.pow(height, 2));

}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/


```