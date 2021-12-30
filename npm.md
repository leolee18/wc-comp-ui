# npm

## 常用指令
```
* npm install xxx
* 全局安装 npm install xxx -g
* 生产环境安装 npm install xxx -S 存放于devDependencies节点
* 开发环境安装 npm install xxx -D 存放于dependencies节点
```

## 上传npm包
```text
1.npm网站注册账号密码
注册地址地址：https://www.npmjs.com/signup

2.初始化项目
npm init

3.编写代码
创建index.js
export functionsay(){console.log("hello word")}

4.登录npm
npm login
添加: npm adduser

5.发布npm包
npm publish

6.新建项目安装已发布的npm包
npm install zxb-npmdemo-wlww

7.更新npm包
更改版本号，重新发布
npm publish

8.在项目中更新npm包
npm update zxb-npmdemo-wlww

9.在npm上删除npm包
npm --force unpublish packageName

10.查看当前登录的账户
npm whoami

11.验证包发布
npm view <package-name>

```

## 指令
```shell
npm init

npm adduser
npm login
# Username:leolee18
# Password:liyuxiliyuxi
# Email:wwwliyuxi@163.com

npm whoami

npm publish

npm view <package-name>
```

