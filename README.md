<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h3 align="center" style="margin: 30px 0 35px;">轻量、可靠的移动端 VUE 组件库</h3>


---

## 特性

* 60+ 高质量组件
* 95% 单元测试覆盖率
* 完善的中英文文档和示例
* 支持按需引入 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* 支持主题定制
* 支持国际化
* 支持 TS
* 支持 SSR

## 安装

```bash
# Using npm
npm i jyh5vlib -S

# Using yarn
yarn add jyh5vlib
```

## Quickstart

```js
import Vue from 'vue';
import { Button } from 'jyh5vlib';
import 'jyh5vlib/lib/index.css';

Vue.use(Button);
```

## 浏览器支持

Modern browsers and Android 4.0+, iOS 7+.


## ⌨️ 本地开发

```bash
$ git clone git@github.com:syscl-design/syscl-design.git
$ cd jyh5vlib
$ npm install
$ npm run dev
```

## 如何发包

```bash
$ npm config set registry http://registry.npm.jieyuechina.com --global # 将npm切到公司的镜像
$ npm config get registry # 检查是否切换成功
$ npm run release # 1 提示输入版本号码，版本号不应低于目前 package.json 里的版本号  2 会询问是都发布 输入y 3 
```