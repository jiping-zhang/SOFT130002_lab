# Lab10 实验文档

### 19302010022 张稷平

## 页码的实现方式

#### 1.打印链接元素

用php查找mysql中的数据，打印每个链接，链接的innerHTML为艺术家名字，链接地址为本页面，URL中加上?id=这个画家对应的id，这样本页面就可以用get的方式获取到用户点击的画家的id

#### 2.根据用户点击打印相应的内容

本页面用get的方式获取到用户点击的画家的id后，继续通过mysql获取这个画家的画的照片路劲、描述、标题，再依次打印这些照片

#### 3.打印照片

把打印单张画封装成一个函数，再把每张画的信息传进去，就可以打印这些照片了