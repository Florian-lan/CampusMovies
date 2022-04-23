
## 技术栈
React + ReactHook + ReactRouter + Redux + Axios + Scss + 第三方 + lodash(实用js工具库)

CSS module: [CSSmodule介绍和使用](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

+ *redux可用recoil替代，recoil更简单但没那么全面*
+ [axios是什么，有什么用](https://zhuanlan.zhihu.com/p/69157371)
+ [axios和ajax的区别](https://www.1024sou.com/article/560749.html)
axios用于替代ajax，其实就是用promise再次封装ajax

### 后端技术栈
node.js + koa

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
6. React使用Mock.js教程：https://erioy.gitee.io/2020/08/12/React%E4%BD%BF%E7%94%A8Mock.js%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE/
7. 


## 配置初始化样式
1. 初始化css文件
2. 引入字体图标库

## 实现首页展示
1. 创建页面：Home/Hall/Show
2. 创建路由
3. 



### 影厅
1. 沙河校区
   1. 夏新厅
   2. 欣苑学生公寓电影厅
   3. 一教
2. 清水河校区
   1. 上三角厅
   2. 下三角厅
   3. 光影厅（图书馆二楼）
   4. 宾诺咖啡馆



### TODO
1. 解决在新页面打开的问题
初步计划，维护三个数据库，分别是影片信息，活动信息，影厅信息，（维护影片和活动的时间）


## 参考项目
+ [React+express全栈项目](https://github.com/wujiabk/zhaopinApp)
  + 一个基于react16，redux，react-router4，antd-mobile，axios及node，express，mongodb实现的全栈招聘类webapp项目。
+ [React+koa](https://github.com/B2D1/TodoList)
  

## 启动Mongo数据库

 ` cd /usr/local/mongodb/bin `
  `./mongo`
## 运行服务端
` npm run dev `

## 运行客户端
` npm start `

