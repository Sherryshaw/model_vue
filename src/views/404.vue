<!-- 
404.vue
@/views/404.vue
404(页面未找到)页面
-->
<template>
  <a-result status="404" title="4 0 4" sub-title="很抱歉，该页面未找到！">
    <template #extra>
      <a-button type="primary" @click="toBack"> 返回 </a-button>
    </template>
  </a-result>
</template>
<script>
//导入
import { useRouter } from "vue-router";

export default {
  //页面构造前执行
  setup() {
    //定义变量
    const router = useRouter();
    //定义变量 end
    //方法 点击按钮返沪至上一页面
    const toBack = () => {
      router.back();
    };
    //方法 点击按钮返沪至上一页面 end
    return {
      toHome,
    };
  },
};
</script>