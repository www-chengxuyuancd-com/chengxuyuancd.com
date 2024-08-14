## 1. 数据库相关

### 1.1 postgresql 列出所有的数据库

`\l`

### 1.2 删除数据库

`drop database database_name;`

### 1.3 创建一个数据库

`create database xxx;`

### 1.4 使用某个数据库

`\c xxx;`

## 2. 表相关

### 2.1 查看当前数据库的所有表

`select * from pg_tables;`

### 2.2 查看表结构

`\d tb_test;`