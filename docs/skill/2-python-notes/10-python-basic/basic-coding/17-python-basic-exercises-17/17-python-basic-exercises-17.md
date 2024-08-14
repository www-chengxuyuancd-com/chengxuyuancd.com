---
title: '2.17 统计字符'
---

**题目**：
- 输入一行字符，分别统计出其中英文字母、空格、数字和其它字符的个数。

**程序分析**：
* 利用 while 或 for 语句,条件为输入的字符不为 '\n'。


* 获得类似效果：
```
请输入一个字符串:
hello chengxuyuancd.com, you're number 1!
char = 32,space = 4,digit = 1,others = 4
```


程序源代码
```python



s = input('请输入一个字符串:\n')
letters = 0      # 英文字母
space = 0        # 空格
digit = 0        # 数字
others = 0       # 其他字符
for c in s:
    if c.isalpha():
        letters += 1
    elif c.isspace():
        space += 1
    elif c.isdigit():
        digit += 1
    else:
        others += 1
print('char = %d,space = %d,digit = %d,others = %d' % (letters, space, digit, others))

```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225