---
title: '2.19 完数'
---

**题目**：
- 一个数如果恰好等于它的因子之和，这个数就称为"完数"。例如6=1＋2＋3.编程找出1000以内的所有完数。

**程序分析**：



* 获得类似效果：
```
6
1 2 3
28
1 2 4 7 14
496
1 2 4 8 16 31 62 124 248
```


程序源代码
```python


for j in range(2, 1001):
    k = []
    n = -1
    s = j
    for i in range(1, j):
        if j % i == 0:
            n += 1
            s -= i
            k.append(i)

    if s == 0:
        print(j)
        for i in range(n):
            print(str(k[i]), end=' ')
        print(k[n])
```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225