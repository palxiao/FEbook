## Vue 小知识

### 深度选择器

深度选择器最早是使用`>>>`来标识的，后来发现某些CSS预处理程序（例如SASS）在解析它时会遇到问题，因为这不是官方的CSS组合器，后来变成了`/deep/` 和 伪元素语法的 `::v-deep`，这两种方式在Vue2中任然生效，但是在Vue3中这种方式将会警告（the >>> and /deep/ combinators have been deprecated. Use :deep() instead.），需要改成这种方式`:deep()`。
```js
// 以下将废弃
<style scoped>
/deep/ .main{
    background: #fff;
}
>>> .main{
    background: #fff;
}
</style>

// 正确写法
<style scoped>
:deep(.main){
    background: #fff;
}
</style>
```

## Vue 3 升级相关

### vite全局变量

在webpack中，全局变量通过node的`process`来控制，而vite中则没有这个变量，而是使用`import.meta`，为了统一变量的使用，可以在`vite.config.ts`中增加一个配置:
```js
export default defineConfig({
  define: {
    'process.env': process.env,
  },
})
```
这样就在vite中创建了一个process变量，但这个变量是赋值了原生node下的，估计vue-cli-service对该变量做了一些封装的处理，所以会有些差异，这里统一差异需要自定义变量，如:
package.json
```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development vite",
    "v-build": "cross-env NODE_ENV=production vue-tsc --noEmit && vite build"
  }
}
```
(注: `cross-env`为兼容库，为了保证为node赋值的变量在不同平台下都生效)

通过如上设置，我们可以在项目中使用全局变量来判断特定环境了
```js
// const prefix = import.meta.env
const prefix = process.env
const isDev = prefix.NODE_ENV === 'development'
```

### 通过 Ref 获取 Dom 节点

```js
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const divRef = ref<HTMLElement>();
    const setDivRef = (el: HTMLElement) => {
      divRef.value = el;
    };
    return {
      setDivRef,
    };
  },
});
```
[参考文章](https://qiita.com/jay-es/items/6d0279737fb510b0aa6c)

### 生命周期对比

```js
  beforeCreate -> 使用 setup()
  created -> 使用 setup()
  beforeMount -> onBeforeMount  ---只能在setup里面使用
  mounted -> onMounted		---只能在setup里面使用
  beforeUpdate -> onBeforeUpdate	---只能在setup里面使用
  updated -> onUpdated		---只能在setup里面使用
  beforeDestroy -> onBeforeUnmount		---只能在setup里面使用
  destroyed -> onUnmounted		---只能在setup里面使用
  errorCaptured -> onErrorCaptured		---只能在setup里面使用
```

### v-model 非兼容差异 ( [ vue 文档 ](https://vue3js.cn/docs/zh/guide/migration/v-model.html#%E6%A6%82%E8%A7%88) )

```
prop：value -> modelValue
event：input -> update:modelValue
```

### 引入图片地址的方法

在vue2中一般使用`require('@/assets/xxx.png')`来引用图片，在vue3中由于配套工具不支持require，故可以用`await import('@/assets/xxx.png)`来引用图片或资源。

### Vue3 差异

Vue3 中已废弃 filter（过滤器）

**Global API**

全局 Vue API 已更改为使用应用程序实例
全局和内部 API 已经被重构为可 tree-shakable

**模板指令**

组件上 v-model 用法已更改
`<template v-for>` 和 非 `v-for` 节点上 key 用法已更改
在同一元素上使用的 `v-if` 和 `v-for` 优先级已更改
`v-bind="object"` 现在排序敏感
`v-for` 中的 `ref` 不再注册 `ref` 数组
    
**组件**
    
只能使用普通函数创建功能组件
functional 属性在单文件组件 (SFC)
异步组件现在需要 defineAsyncComponent 方法来创建

**渲染函数**
    
渲染函数API改变
`$scopedSlots property` 已删除，所有插槽都通过 `$slots` 作为函数暴露
自定义指令 API 已更改为与组件生命周期一致
一些转换 class 被重命名了：
`v-enter` -> `v-enter-from`
`v-leave` -> `v-leave-from`
组件 watch 选项和实例方法 $watch 不再支持点分隔字符串路径，请改用计算函数作为参数
在 Vue 2.x 中，应用根容器的 outerHTML 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。VUE3.x 现在使用应用程序容器的 innerHTML。

**其他**

destroyed 生命周期选项被重命名为 unmounted
beforeDestroy 生命周期选项被重命名为 beforeUnmount
[prop default工厂函数不再有权访问 this 是上下文
自定义指令 API 已更改为与组件生命周期一致
data 应始终声明为函数
来自 mixin 的 data 选项现在可简单地合并
attribute 强制策略已更改
一些过渡 class 被重命名
组建 watch 选项和实例方法 $watch不再支持以点分隔的字符串路径。请改用计算属性函数作为参数。
<template> 没有特殊指令的标记 (v-if/else-if/else、v-for 或 v-slot) 现在被视为普通元素，并将生成原生的 <template> 元素，而不是渲染其内部内容。
在 Vue 2.x 中，应用根容器的 outerHTML 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。Vue 3.x 现在使用应用容器的 innerHTML，这意味着容器本身不再被视为模板的一部分。
    
**移除 API**

keyCode 支持作为 v-on 的修饰符
$on，$off 和 $once 实例方法
过滤filter
内联模板 attribute
$destroy 实例方法。用户不应再手动管理单个 Vue 组件的生命周期。