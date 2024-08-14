---
title: '2.10 模拟报时'
---

**题目**：
- 每隔一秒报时，并格式化当前时间
**程序分析**：
* time.strftime 函数

* 期望输出:
```
现在是北京时间： 2024-03-02 10:48:21
现在是北京时间： 2024-03-02 10:48:22
现在是北京时间： 2024-03-02 10:48:23
现在是北京时间： 2024-03-02 10:48:24
现在是北京时间： 2024-03-02 10:48:25
```


程序源代码
```python
import time

for i in range(1, 100):
    print("现在是北京时间：", time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time())))
    # 暂停一秒
    time.sleep(1)
```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225