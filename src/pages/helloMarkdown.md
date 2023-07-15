---
title: my hello page title
description: my hello page description
hide_table_of_contents: true
---

# Hello

How are you?


## pages和docs的区别在于没有默认的侧边栏

所有src/pages里的js，ts文件都会被生成页面，除非你配置exclude选项。  
默认情况下，`_`开头的文件名，测试文件`.test.js`, `__tests__` 目录下的内容不会被转变为页面

转换页面路由依赖不重复