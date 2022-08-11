<!--
 * @Author: ShawnPhang
 * @LastEditors: ShawnPhang
 * @Description: 
 * blog.palxp.com/book.palxp.com
-->

## vscode 文件差异比较

先配置：

```
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
```

然后运行
```
git difftool
```
即可进行文件比较，非常方便找出未提交代码的改动

## koroFileHeader 注释生成插件

文件头部注释：

快捷键: window：`ctrl + alt + i` 、 mac：`ctrl + cmd + i`

函数注释：

快捷键: window：`ctrl + alt + t` 、 mac：`ctrl + cmd + t`
函数注释在文件的任意位置都可生成，这里需要自己控制。

[配置字段](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE%E5%AD%97%E6%AE%B5)

eg:

```
  "fileheader.customMade": {
    "Author": "ShawnPhang",
    "Date": "Do not edit", // 设置后默认设置文件生成时间
    "Description": " ",
    "LastEditors": "ShawnPhang", // 设置后，保存文件更改默认更新最后编辑人
    "LastEditTime": "Do not edit", // 设置后，保存文件更改默认更新最后编辑时间
    "custom_string_obkoro1": "@site: book.palxp.com"
  },
```