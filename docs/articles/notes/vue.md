<!--
 * @Author: ShawnPhang
 * @LastEditors: ShawnPhang
 * @Description: 
 * @Date: 2021-07-26 15:09:45
 * @LastEditTime: 2021-07-26 15:46:42
 * @site: book.palxp.com / blog.palxp.com
-->

## Vue 3 升级相关

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

### v-model 非兼容差异

```
prop：value -> modelValue
event：input -> update:modelValue
```

[v-model 文档](https://vue3js.cn/docs/zh/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)
