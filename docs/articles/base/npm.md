<!--
 * @Author: ShawnPhang
 * @LastEditors: ShawnPhang
 * @Description: 
 * @Date: 2021-07-23 11:40:27
 * @LastEditTime: 2021-12-20 14:47:23
 * @site: book.palxp.com / blog.palxp.com
-->

### 安装环境 

Docker 拉取镜像安装
```
docker run -d --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```
看到启动成功，桥接的4873端口，记得设置网关安全组或防火墙。

### 如何发布

安装npm源管理
```
npm i nrm -g
```
查看源
```
nrm ls
```
添加源
```
nrm add name http//:xxx.xxx.xxx.xxx:4873/
```
删除源
```
nrm del name
```
使用指定源
```
nrm use npm
```
登录
```
npm addUser
```
发布包
```
npm publish
```

### 私有域包管理
可以使用`npm config`以下方式将作用域与注册表关联：

`npm config set @myco:registry http://reg.example.com`

这表示将范围与注册表关联后，npm install具有该范围的软件包的任何内容都将向该注册表请求软件包。任何 npm publish一个包含范围包名称将被发布到注册表来代替。

### 鉴权管理

[配置项文档](https://verdaccio.org/docs/en/configuration)

### 效果预览

![](../../images/plugins/2021-08-30-3.22.03.png)