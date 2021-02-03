<template>
  <a-result status="404" title="4 0 4" sub-title="很抱歉，该页面未找到！">
    <template #extra>
      <a-button type="primary" @click="toHome"> 返回 </a-button>
    </template>
  </a-result>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    const toHome = () => {
      router.back();
    };
    return {
      toHome,
    };
  },
};
</script>