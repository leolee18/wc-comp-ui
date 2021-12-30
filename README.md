# wc-comp-ui
引用 https://github.com/XboxYan/xy-ui

## 特性
```
* 跨框架。无论是`react`、`vue`还是原生项目均可使用。
* 组件化。`shadow dom`真正意义上实现了样式和功能的组件化。
* 类原生。一个组件就像使用一个`div`标签一样。
* 无依赖。纯原生，无需任何预处理器编译。
* 无障碍。支持键盘访问。
```

## 兼容性
```
现代浏览器。

包括移动端，不支持`IE`。

> `IE`不支持原生`customElements`，[webcomponentsjs](https://github.com/webcomponents/webcomponentsjs)可以实现对`IE`的兼容，不过很多`CSS`特性仍然无效，所以放弃
```


## 安装

* npm
```shell
npm i wc-comp
```

* cdn
```html

```
目录如下：

```text
.
└── my-comp-ui/src
    ├── components //功能组件
    |   ├── wc-icon.js
    |   └── ...
    ├── iconfont //图标库
    |   └── icon.svg
    ├── css //样式
    |   └── common.css
    ├── utils
    |   ├── app.js
    |   └── ...
    └── index.js
```
     
将整个文件夹放入项目当中（可选择以上几个目录文件即可，其他文件夹均为文档测试）。

### react项目引用
```js
import 'wc-comp';//推荐
//如需单独使用
import 'wc-comp/components/wc-button.js';
ReactDOM.render(<wc-button>button</wc-button>, document.body);
```

### vue项目引用
```js
import 'wc-comp';//推荐
//如需单独使用
import 'wc-comp/components/wc-button.js';
```

## 其他

大部分情况下，可以把组件当成普通的`html`标签，

比如给`<wc-button>button</wc-button>`添加事件，有以下几种方式

```html
<wc-button onclick="alert(5)">button</wc-button>
```

```js
btn.onclick = function(){
    alert(5)
}

btn.addEventListener('click',function(){
    alert(5)
})
```

> 自定义事件只能通过`addEventListener`绑定

比如元素的获取，完全符合`html`规则

```html
<wc-tab>
    <wc-tab-content label="tab1">tab1</wc-tab-content>
    <wc-tab-content label="tab2">tab2</wc-tab-content>
    <wc-tab-content label="tab3" id="tab3">tab3</wc-tab-content>
</wc-tab>
```

```js
const tab3 = document.getElementById('tab3');
tab3.parentNode;//wc-tab
```

组件的布尔类型的属性也遵从原生规范（添加和移除属性），比如

```html
<wc-dialog show></wc-dialog> <!-- 显示 -->
<wc-dialog></wc-dialog> <!-- 隐藏 -->
<wc-button loading>button</wc-button> <!-- 加载中 -->
<wc-button>button</wc-button> <!-- 正常 -->
```

总之，大部分情况下把它当成普通的`html`标签（不用关注shadow dom的结构）就好了，以前怎么做现在仍然怎么做，只是新增了方法而已。




## webpack5 error
```
//Error: Cannot find module 'webpack-cli/bin/config-yargs'

出错原因
查阅了其他人的解决，发现是因为webpack-cli的新版本对webpack-dev-server版本的不兼容，表示很无奈：

之前的版本是

node -v —— v12.19.0
npm -v —— v6.14.8
webpack -v —— "^5.1.3"
webpack-cli -v —— "^4.1.0"
webpack-dev-server -v —— "^3.11.0"
解决方案
之后降低webpack-cli的版本为 "^3.3.12"

npm i webpack-cli@3.3.12 -D 就ok了
```
