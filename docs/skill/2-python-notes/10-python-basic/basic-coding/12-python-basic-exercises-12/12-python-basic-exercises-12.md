---
title: '2.12 素数问题'
---

**题目**：
- 判断101-200之间有多少个素数，并输出所有素数。

**程序分析**：
* 判断素数的方法：用一个数分别去除2到sqrt(这个数)，如果能被整除，则表明此数不是素数，反之是素数。

```
期望输出
101 
103 
107 
109 
113 
127 
131 
137 
139 
149 
151 
157 
163 
167 
173 
179 
181 
191 
193 
197 
199 
101 到 201之间共有21个素数
```


程序源代码
```python

from math import sqrt
count = 0
is_prime = True

for m in range(101, 201):
    k = int(sqrt(m + 1))
    for i in range(2, k + 1):
        if m % i == 0:
            is_prime = False
            break
    if is_prime:
        print(m)
        count += 1
    is_prime = True
print('101 到 201之间共有%d个素数' % count)
```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225