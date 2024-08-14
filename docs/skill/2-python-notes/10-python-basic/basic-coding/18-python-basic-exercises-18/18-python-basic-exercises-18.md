---
title: '2.18 叠数相加'
---

**题目**：
- 叠数：是数学术语，指每个位上的数字都相等，比如，11， 22， 333， 44等
- 求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)，几个数相加由键盘控制。

**程序分析**：
* 关键是计算出每一项的值。


* 获得类似效果：
```
n = 5
a = 2
2
22
222
2222
22222
计算和为： 24690
```


程序源代码
```python

from functools import reduce

Tn = 0                     # 每一项的初始值
Sn = []
n = int(input('n = '))
a = int(input('a = '))
for count in range(n):
    Tn = Tn + a
    a = a * 10
    Sn.append(Tn)
    print(Tn)

Sn = reduce(lambda x, y: x + y, Sn)
# Sn = sum(Sn)
print("计算和为：", Sn)

```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225