FARSER - 我的私人订制APP
================

FARSER APP powered by React Native
FARSER APP 由 React Native 强力驱动

![ZhihuDailyPurify](https://raw.githubusercontent.com/izzyleung/ZhihuDailyPurify/master/ZhihuDailyPurify.png)

__Disclaimer - 声明__  
*Zhihu* is a trademark of *Zhihu. Inc*. This app is not created nor endorsed by Zhihu Inc. All the infomation and content accessible through Zhihu Daily Purify are subject to Zhihu's copyright and terms of use. This is a free app and does not charge for anything. All content are available for free from [Zhihu](http://www.zhihu.com).  

『知乎』是 *知乎. Inc* 的注册商标。本软件与其代码非由知乎创作或维护。软件中所包含的信息与内容皆违反版权与知乎用户协议。它是一个免费软件，使用它不收取您任何费用。其中的所有内容均可在[知乎](http://www.zhihu.com)获取。

## Features - 特性
  - All about discussion in [Zhihu](http://www.zhihu.com) - 只提取[知乎](http://www.zhihu.com)讨论
  - Light weighted, about 3 times lighter than Zhihu Daily - 更小的体积：甚至不到『知乎日报』的 1/3
  - Do not request useless permission - 不需要多余的权限
  - No ads - 没有广告
  - No push services, or any background activity - 没有推送消息，甚至没有任何的后台进程
  - No tracking modules, do not collect any private data - 没有追踪模块，不收集您的任何隐私信息

## Dependency - 依赖
  - Java Development Kit (JDK)
  - Android SDK
    - Android SDK Build-tools
    - Android Support Repository

Set `ANDROID_HOME` environment variable properly - 将 `ANDROID_HOME` 环境变量指向你的 Android SDK 目录  
Always use the lateset version of them - 永远使用它们的最新版本


## Build - 构建
`./gradlew assemble`  

## Design Principles - 设计理念
  - Less is more - 更少即更多
  - Apply MVC patterns as much as possible - 尽可能实现 MVC 模式

## API Reference - API 分析
[APIs](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

## Accelerate Server - 加速服务器
You can find the code that drives those accelerate servers in my repo [Robots](https://github.com/izzyleung/Robots), under directories called `zhihu_daily_purify_backend_rails` and `zhihu_daily_purify_backend_django`.  
您可以在我的 repo [Robots](https://github.com/izzyleung/Robots) 中名为 `zhihu_daily_purify_backend_rails` 和 `zhihu_daily_purify_backend_django` 的文件夹中找到为加速服务器提供服务的代码。

## Contact - 联系
`echo aXp6eWxpYW5nQGdtYWlsLmNvbQo= | base64 --decode`

## License - 许可证
    Copyright 2013 Xiao Liang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
