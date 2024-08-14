---
title: 1. 中级 Javascript
sidebar_position: 10
---

## Random Number Generation in Javascript: Building a Love Calculator

```js
Math.random();
```

## Comparators and Equality

`===` is equal to
`!==` is not equal to
`>` is greater than
`<` is lesser than
`>=`
`<=`

## Combining Comparators

`&&` AND
`||` OR
`!` Not


## BMI again

```js
function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation;
    if (bmi<18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    } else {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    }
    return interpretation;
}
```

## Leap Year Challenge
This is a Difficult Challenge 💪

Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

This is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.



e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)



So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap)



Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.



Example Input 1

2400
Example Output 1

Leap year.


Example Input 2

1989


Example Output 2

Not leap year.


Hint

Remember that the modulo (%) operator gives you the remainder of a division. We covered this in this lesson.

Try to visualise the rules by creating a flow chart on www.draw.io.

If you really get stuck, you can see the flow chart I created.

Try to run your code in this Repl.it playground and check it against the known leap years.



- Leap Year: https://www.youtube.com/watch?v=xX96xng7sAE


```js
function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here. 
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return "Leap year.";
            } 
            return "Not leap year.";
        }
        return "Leap year.";
    }
    return "Not leap year.";


    

/**************Don't change the code below****************/    

}
```

## Collections: Working with Javascript Arrays

## Adding Elements and Intermediate Array Techniques
```js
var eggs = [];

eggs.push(2);

eggs.pop;
```

- https://www.jitbit.com/alexblog/249-now-thats-what-i-call-a-hacker/

## Who's Buying Lunch?
```js
function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var nameIndex = Math.floor(Math.random()*names.length);
    var name = names[nameIndex];
    return name + " is going to buy lunch today!";
    

/******Don't change the code below*******/    
}
```

## Control Statements: While loops

- A programmer's wife tells him: "while you're at the store, get some milk." He never comes back.

## Fibonacci Exercise
```js
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    if(n===1){
        return [0];
    }
    if (n===2) {
        return [0, 1];
    }
    var output = [0, 1];
    for (var i = 2; i<n; i++) {
        output.push(output[i-1] + output[i-2]);
    }
    return output;
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}



```