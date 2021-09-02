<!--
 * @Author: ShawnPhang
 * @LastEditors: ShawnPhang
 * @Description: 
 * @Date: 2021-07-26 15:09:45
 * @LastEditTime: 2021-09-01 10:29:49
 * @site: book.palxp.com / blog.palxp.com
-->

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

