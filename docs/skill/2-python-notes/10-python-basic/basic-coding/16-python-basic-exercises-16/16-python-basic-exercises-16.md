---
title: '2.16 日期格式化'
---

**题目**：
- 输出指定格式的日期。

**程序分析**：
* 使用 datetime 模块。



程序源代码
```python


import datetime

if __name__ == '__main__':
    # 输出今日日期，格式为 dd/mm/yyyy。更多选项可以查看 strftime() 方法
    print(datetime.date.today().strftime('%d/%m/%Y'))

    # 创建日期对象
    ChinaBirthDate = datetime.date(1949, 10, 1)

    print(ChinaBirthDate.strftime('%d/%m/%Y'))

    # 日期算术运算
    miyazakiBirthNextDay = ChinaBirthDate + datetime.timedelta(days=1)

    print(miyazakiBirthNextDay.strftime('%d/%m/%Y'))

    # 日期替换
    miyazakiFirstBirthday = ChinaBirthDate.replace(year=ChinaBirthDate.year + 1)

    print(miyazakiFirstBirthday.strftime('%d/%m/%Y'))

```



参考资料：
* 菜鸟教程 https://www.runoob.com/python/python-100-examples.html
* 知乎 https://zhuanlan.zhihu.com/p/115198225