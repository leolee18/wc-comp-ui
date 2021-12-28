# wc-comp-ui
引用 https://github.com/XboxYan/xy-ui

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
