---
title: '2.15 分数等级'
---

**题目**：
- 利用条件运算符的嵌套来完成此题：学习成绩>=90分的同学用A表示，60-89分之间的用B表示，60分以下的用C表示。

**程序分析**：
* 程序分析：(a>b) ? a:b 这是条件运算符的基本例子。

```
输入分数:
90

输出：
    90 属于 A
```


程序源代码
```python

score = int(input('输入分数:\n'))
if score >= 90:
    grade = 'A'
elif score >= 60:
    grade = 'B'
else:
    grade = 'C'

print('%d 属于 %s' % (score, grade))

```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225