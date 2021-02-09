<script>
// Http.vue
// @/common/Http.vue
// 封装基本的get,post,put,delete请求
// 无特殊情况不需要更改
//
/****   http.js   ****/
// 导入封装好的axios实例
import axios from "axios";
import request from "../common/Request";

const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url, params) {
    const config = {
      method: "get",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
  post(url, params) {
    console.log(params);
    const config = {
      method: "post",
      url: url,
    };
    if (params) config.data = params;
    return request(config);
  },
  put(url, params) {
    const config = {
      method: "put",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
  delete(url, params) {
    const config = {
      method: "delete",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
};
//导出
export default http;
</script>