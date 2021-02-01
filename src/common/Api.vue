<script>
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