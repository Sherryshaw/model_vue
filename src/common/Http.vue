<script>
/****   http.js   ****/
// 导入封装好的axios实例
import axios from 'axios';

const host="http://localhost:8080/projectname"

const http ={
    /**
     * methods: 请求
     * @param url 请求地址 
     * @param params 请求参数
     */
    async get(url){
        return axios.get(host+url)
    },
    async post(url,params){
        return axios.post(host+url,params)
    },
    put(url,params){
        return axios.put(host+url,params)
    },
    delete(url){
        return axios.delete(host+url)
    }
}
//导出
export default http
</script>