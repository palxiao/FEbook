<!--
 * @Author: ShawnPhang
 * @LastEditors: ShawnPhang
 * @Description: 
 * @Date: 2021-07-23 11:40:27
 * @LastEditTime: 2021-08-30 15:26:06
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

### 鉴权管理

[配置项文档](https://verdaccio.org/docs/en/configuration)

![](../../images/plugins/2021-08-30-3.22.03.png)