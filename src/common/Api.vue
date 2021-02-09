<script>
// Api.vue
// @/common/Api.vue
// 封装后端接口请求为方法
// 
import http from "./Http";
export default {
  login(params) {
    return http.post("/auth/login", params);
  },
  logout() {
    return http.get("/auth/logout");
  },
};
</script>