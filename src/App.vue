<template>
  <router-view />
</template>
<script>
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    let nowRoute = route.path;
    if (nowRoute.path == "/") {
      router.push("Login");
    }
  },
};
</script>
<style>
</style>
