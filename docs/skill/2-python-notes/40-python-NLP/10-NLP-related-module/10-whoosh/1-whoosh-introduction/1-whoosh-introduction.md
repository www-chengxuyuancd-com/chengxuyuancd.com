---

title: 1. whoosh介绍
---

# 1. whoosh介绍
- whoosh 是一个纯python实现的全文搜索引擎，它小巧轻便，安装简单，设计上参考了 Lucene ，性能上虽有欠缺，但贵在方便，无需复杂安装，对于构建小型网站的搜索引擎来说，是一个不错的选择
- 官网：https://whoosh.readthedocs.io/en/latest/intro.html

# 2. whoosh 安装
- 直接pip安装: `pip install whoosh`



# 3. whoosh 初体验
- 下面的例子来源于官网，建议初学者使用jupyter练习

- 先导入建立索引的包
```python
from whoosh.index import create_in
from whoosh.fields import *
```

- 输入文章段落建立索引
    - 首先需要在某个地方建立一个文件夹用来存放索引, 比如我这里建立了`indexdir01`文件夹
```python
schema = Schema(title=TEXT(stored=True), path=ID(stored=True), content=TEXT)
ix = create_in("indexdir01", schema)
writer = ix.writer()
writer.add_document(title=u"First document", path=u"./", content=u"This is the first document we've added!")
writer.add_document(title=u"Second document", path=u"./", content=u"The second one is even more interesting!")
writer.commit()

```

- 接着导入查询需要的包

```python
from whoosh.qparser import QueryParser
```

- 接着可以开始查询啦，比如希望找到 `interesting`相关的内容的文章

```python
with ix.searcher() as searcher:
    query = QueryParser("content", ix.schema).parse("interesting")
    results = searcher.search(query)
    print(results[0])
```

- 比如我这里就可以搜索到:
```python

<Hit {'path': './', 'title': 'Second document'}>

```