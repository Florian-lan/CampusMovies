# Net-Movie

## 技术栈
React + ReactHook + ReactRouter + Redux + Axios + Scss + 第三方 + lodash(实用js工具库)
CSS module: [CSSmodule介绍和使用](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

* redux可用recoil替代，recoil更简单但没那么全面 *



## 计划完成功能
1. 首页展示
3. 搜索功能
4. 上拉加载

## 环境构建
1. 项目环境：*create-react-app* 脚手架构建项目环境
2. 支持Less语法（在React脚手架构建的环境中，默认支持的是CSS和Sass/Scss,所以需要自己配置Less）
3. 集成网络请求Axios
4. 配置路由: *npm install --save react-router-dom*
5. [配置react-bootstrap环境](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
6. 


## 配置网络请求 Axios
1. 安装依赖
```js
npm install --save axios
```
（第一步已完成 ——03.05）
2. 配置相关文件


## 配置初始化样式
1. 初始化css文件
2. 引入字体图标库

## 实现首页展示
1. 创建页面：Home/Hall/Show
2. 创建路由
3. 


## Github和本地
1. 创建仓库
2. 克隆到本地 *git clone ...*
3. 

## 知识点
1.[CSS清除浮动原理理解](https://juejin.cn/post/6844903504545316877)
2. [grid布局的使](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
3. 按钮优化


### 影厅
1. 沙河校区
   1. 夏新厅
   2. 欣苑学生公寓电影厅
   3. 一教
2. 清水河校区
   1. 上三角厅
   2. 下三角厅
   3. 宾诺咖啡馆

初步计划，维护三个数据库，分别是影片信息，活动信息，影厅信息，（维护影片和活动的时间）