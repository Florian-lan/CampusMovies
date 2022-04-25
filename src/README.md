
```
src
├─ .DS_Store
├─ App.css
├─ App.jsx
├─ Data
│  ├─ MovieInfo
│  │  └─ MovieInfo.json
│  └─ TheaterInfo.json
├─ README.md
├─ assets
├─ components
│  ├─ CardTittle
│  │  ├─ CardTitle.jsx
│  │  └─ style.scss
│  ├─ ConfirmBtn
│  │  ├─ ConfirmBtn.jsx
│  │  └─ style.module.scss
│  ├─ MovieBox
│  │  ├─ MovieBox.jsx
│  │  └─ style.module.scss
│  ├─ MovieModal
│  │  ├─ MovieModal.jsx
│  │  └─ style.module.scss
│  ├─ PriComments
│  │  ├─ CommentList
│  │  │  ├─ CommentList.jsx
│  │  │  └─ style.scss
│  │  ├─ PriComments.jsx
│  │  └─ style.scss
│  ├─ PrimaryTag
│  │  ├─ PrimaryTag.jsx
│  │  └─ style.module.scss
│  ├─ PurchaseDrawer
│  │  ├─ PurchaseDrawer.jsx
│  │  └─ style.module.scss
│  ├─ PurchaseModal
│  │  ├─ PurchaseModal.jsx
│  │  └─ style.module.scss
│  ├─ PurchasedBox
│  │  ├─ PurchasedBox.jsx
│  │  └─ style.module.scss
│  └─ RateModal
│     ├─ RateModal.jsx
│     └─ style.module.scss
├─ index.css
├─ index.js
├─ pages
│  ├─ .DS_Store
│  ├─ Details
│  │  ├─ Details.jsx
│  │  ├─ ShowTime
│  │  │  ├─ ShowTime.jsx
│  │  │  └─ style.module.scss
│  │  ├─ Theater
│  │  │  ├─ Theater.jsx
│  │  │  └─ style.module.scss
│  │  └─ style.scss
│  ├─ Footer
│  │  ├─ Footer.jsx
│  │  ├─ FooterBottom
│  │  │  ├─ FooterBottom.jsx
│  │  │  └─ style.scss
│  │  ├─ FooterTop
│  │  │  ├─ FooterTop.jsx
│  │  │  └─ style.scss
│  │  └─ style.scss
│  ├─ Header
│  │  ├─ Header.jsx
│  │  ├─ searchBox
│  │  │  ├─ searchBox.jsx
│  │  │  └─ style.scss
│  │  └─ style.scss
│  ├─ Home
│  │  ├─ .DS_Store
│  │  ├─ Banner
│  │  │  ├─ Banner.jsx
│  │  │  └─ style.scss
│  │  ├─ Home.jsx
│  │  └─ style.scss
│  ├─ Login
│  │  ├─ .DS_Store
│  │  ├─ Login.jsx
│  │  ├─ images
│  │  │  ├─ .DS_Store
│  │  │  └─ login.jpg
│  │  └─ style.scss
│  ├─ MovieInfo
│  ├─ MovieStore
│  │  ├─ LikeStore
│  │  │  ├─ LikeStore.jsx
│  │  │  └─ style.scss
│  │  ├─ MovieStore.jsx
│  │  └─ style.scss
│  ├─ NotFound
│  │  └─ NotFound.js
│  ├─ Personal
│  │  ├─ Personal.jsx
│  │  └─ style.scss
│  └─ Register
│     ├─ Register.jsx
│     └─ style.scss
├─ redux
│  └─ movieReducers
│     ├─ action.js
│     ├─ reducers.js
│     └─ store.js
├─ router
│  └─ AppRouter.js
└─ utils

```

1.	完成平台框架构建和具体设计：完成该课题平台的主题和页面设计，包括主页、各子页面、登录、注册等页面的设计；
2.	完成主页信息展示：对本周上映和即将上映的演出/影片信息分门别类在主页显示，为用户提供信息导览。整体页面分为三部分，包括header栏和footer栏以及中间防止网页内容的content栏，具体设计如下：
a)	Header栏：header栏包括该平台logo、搜索栏、功能区、用户logo，搜索栏支持用户在全平台搜索自己想看的演出/影片，功能区包括主页、影库、个人中心；
b)	Banner区域：显示本平台一些关键信息，或最近活跃、值得推广的活动信息；
c)	主要的content区域：显示校园内最近上映或者即将上映的演出或影片；
d)	Footer栏：分为两部分，分别是用户关注区域footer-top栏和用户权益区域footer-bottom栏；用户关注区域提供本平台的官方链接，同时支持用户输入邮箱订阅本平台的最新通知，用户权益区域维护一些常见的功能，保障用户权益，为用户联系本平台提供渠道；
1.	完成演出/影片盒子设计：对盛装演出/影片的盒子进行设计，提供包括图片、标题、功能区等信息的展示，支持用户对盒子进行交互操作，具体效果如下图：
盒子提供功能如下：
a)	加入个人喜欢，点击小红心可加入个人喜欢，再点击即可取消喜欢；
b)	预览影片/演出信息，悬浮于图片上并点击可大致预览信息，包括名称，大致内容，涉及人员等；
c)	进入详情页，点击三点即可进入影片/演出的详情页进行下一步操作，包括查看影片/演出信息，或者预定具体场次等；
4.	完成演出/影片信息预览：对某个具体的演出/影片，为用户提供预览信息，增强用户体验，提供信息包括图片，名称，类型分类，活动大致内容，影片/演出相关人员等，具体以Modal的形式实现，具体设计如下图所示：
5.	完成喜欢某演出/影片的逻辑处理：对某个具体的演出/影片，用户可加入个人喜欢；平台针对每个用户维护一个“喜欢”列表，用户在全平台提供该功能的地方都可以对某个演出/影片进行加入或移出喜欢列表的操作，并将同步更新在个人喜欢的界面展示中，具体逻辑可借助redux实现；
6.	完成用户注册界面的设计和实现：注册界面用户选择所在大学院校，并使用学号进行注册，若已有账号则可直接切回登录界面，注册时用户需确认密码，保证两次密码一致，其中用于院校，账号，密码都为必填项，若有误平台会给出错误提示，用户邮箱为可选项，

7.	完成用户登录界面的设计和实现：登录界面用户可以直接输入账号密码进行登录，平台验证账号是否已注册过，或密码是都输入正确，登录账号和密码都强制要求输入，若用户输入有误，给出提示信息，具体设计如下图：
