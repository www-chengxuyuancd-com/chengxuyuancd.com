---
title: '2.4 判断某一天是一年的第几天'
---

**题目**：
- 输入某年某月某日，判断这一天是这一年的第几天？



**程序分析**：闰年时需考虑二月多加一天

期望输入输出：
```
输入:
year: 2022
month: 3
day: 3

期望输出：
    这一天是一年的第62天

输入:
    year: 2020
    month: 3
    day: 1
期望输出：
    这一天是一年的第61天
```


程序源代码，解法一：
```python
year = int(input('year: '))
month = int(input('month: '))
day = int(input('day: '))

sum_day_till_by_month = (0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334)   # 某个月之前的月份的总天数，比如如果我输入的是4月，那么前三个月的总天数为90天（假设2月天数为28天，闰年后面再补充）
sum_day_till_by_day = 0
if 0 < month <= 12:
    sum_day_till_by_day = sum_day_till_by_month[month - 1]
else:
    print('data error')

sum_day_till_by_day += day  # 此时再加上当月的输入的天数
leap = False                # 是否是闰年
if (year % 400 == 0) or ((year % 4 == 0) and (year % 100 != 0)):  # 闰年的计算方式，如果是世纪年（可以整除一百），则看能否整除四百，否则，看能否整除4
    leap = True
if leap and (month > 2):    # 如果是闰年，并且月份大于2，此时少计算闰月的一天，需要加上
    sum_day_till_by_day += 1
print('it is the %dth day.' % sum_day_till_by_day)


```



程序源代码，解法二：
```python
def is_leap_year(y):            # 定义一个函数来判断是否为闰年
    return y % 400 == 0 or (y % 4 == 0 and y % 100 != 0)

day_of_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]
# 先用一个数组存储每个月有多少天，注意这里第一个数是0，意思是输入为n月，先计算前 n-1 个月的天数，同样二月先给28天

res = 0
year = int(input('year:'))
month = int(input('month:'))
day = int(input('day:'))
if is_leap_year(year):
    day_of_month[2] += 1

for i in range(month):
    res += day_of_month[i]
print('这一天是一年的第%d天' % (res + day))

```







参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225