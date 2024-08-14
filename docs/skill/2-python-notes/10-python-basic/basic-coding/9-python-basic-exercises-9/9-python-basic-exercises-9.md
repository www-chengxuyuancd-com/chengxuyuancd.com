---
title: '2.9 模拟人报数'
---

**题目**：
- 从1数到100，模拟人来每秒报一个数

**程序分析**：
* 用time.sleep()函数

* 期望输出:
```
1
2
3
4
5
...
(每个数输出间隔需要1秒)
```


程序源代码
```python
import time

for i in range(1, 100):
    time.sleep(1)
    print(i)
```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225