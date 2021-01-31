<template>
  <a-layout-content>
    <a-row align="center">
      <a-col :span="4" style="top: 300px">
        <a-card>
          <h2 style="text-align: center">{{ projectname }}</h2>
          <p style="text-align: center">版本：{{ version }}</p>

          <a-alert
            v-if="iswrong"
            type="error"
            message="账户或密码错误"
            banner
          />
          <a-form
            :model="loginForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-item label="账户">
              <a-input aria-placeholder="手机号、邮箱"></a-input>
            </a-form-item>
            <a-form-item label="密码">
              <a-input
                type="password"
                aria-placeholder="手机号、邮箱"
              ></a-input>
            </a-form-item>
            <a-form-item :wrapper-col="wrapperCol1">
              <a-button type="primary" block>登录</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </a-layout-content>
</template>
<script>
import Common from "../common/common.vue";
export default {
  name: "Login",
  data() {
    return {
      iswrong: true,
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      wrapperCol1: { span: 24 },
      projectname: Common.projectName,
      version: Common.version,
    };
  },
};
</script>