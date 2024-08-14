---
title: '2.5 三数排序'
---

**题目**：
- 输入三个整数x,y,z，请把这三个数由小到大输出。

**程序分析**：
* 法一：我们想办法把最小的数放到x上，先将x与y进行比较，如果x>y则将x与y的值进行交换，然后再用x与z进行比较，如果x>z则将x与z的值进行交换，这样能使x最小。
* 法二：找个排序算法实现一下当作练手，
* 法三：直接调函数。

期望输入输出：
```
输入:
整数1:
34
整数2:
22
整数3:
25


期望输出：
    [22, 25, 34]
```


程序源代码，解法一：
```python
x = int(input('整数1:\n')) 
y = int(input('整数2:\n'))
z = int(input('整数3:\n'))

if x > y:                   # 使用了冒泡排序算法的思想
    x, y = y, x
if x > z:
    x, z = z, x
if y > z:
    y, z = z, y
print(x, y, z)


```



程序源代码，解法二：
```python
raw_list = []
for i in range(3):
    x = int(input('整数%d: ' % (i + 1)))
    raw_list.append(x)
for i in range(len(raw_list)):        # 此为冒泡排序算法
    for j in range(i, len(raw_list)):
        if raw_list[i] > raw_list[j]:
            raw_list[i], raw_list[j] = raw_list[j], raw_list[i]
print(raw_list)

```


程序源代码，解法三：
```
lis = []
for i in range(3):
    x = int(input('整数%d:\n'%(i+1)))
    lis.append(x)     # 依次把数存入数组中
lis.sort()            # 直接调用list的内置函数
print(lis)

```






参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225