<template>
  <a-layout-content style="min-height: 100vh">
    <a-row
      align="middle"
      type="flex"
      justify="center"
      style="min-height: 100vh"
    >
      <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" style="">
        <a-card>
          <h2 style="text-align: center">{{ projectname }}</h2>
          <p style="text-align: center">版本：{{ version }}</p>
          <a-form
            :model="loginForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-item label="账户" v-bind="validateInfos.username">
              <a-input
                aria-placeholder="手机号、邮箱"
                v-model:value="loginForm.username"
              ></a-input>
            </a-form-item>
            <a-form-item label="密码" v-bind="validateInfos.password">
              <a-input-password
                v-model:value="loginForm.password"
              ></a-input-password>
            </a-form-item>
            <a-form-item :wrapper-col="wrapperCol1">
              <a-button type="primary" shape="round" block @click="onSubmit"
                >登录</a-button
              >
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </a-layout-content>
</template>
<script>
import Common from "../common/Common";
import { reactive, toRaw } from "vue";
import { useForm } from "@ant-design-vue/use";
import axios from "axios";
import Qs from "qs";
export default {
  setup() {
    const data = reactive({
      isWrong: false,
    });
    const loginForm = reactive({
      username: "",
      password: "",
    });
    const { resetFields, validate, validateInfos } = useForm(
      loginForm,
      reactive({
        username: [
          {
            required: true,
            message: "请输入用账户",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
        ],
      })
    );
    const onSubmit = (e) => {
      console.log(e);
      e.preventDefault();
      validate()
        .then((res) => {
          console.log(res, toRaw(loginForm));
          axios
            .post("/auth/login", Qs.stringify(loginForm))
            .then((res) => {
              res = res.data;
              if (res.code == 200) {
                Common.message.success("登录成功");
              } else {
                Common.message.error(res.message);
              }
              console.log(res);
            })
            .catch((err) => {
              Common.message.error("登录信息格式错误");
              console.error(err);
            });
        })
        .catch((err) => {
          Common.message.error("登录信息格式错误");
          console.error(err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      wrapperCol1: { span: 24 },
      validateInfos,
      onSubmit,
      reset,
      loginForm,
      data,
    };
  },
  name: "Login",
  data() {
    return {
      projectname: Common.projectName,
      version: Common.version,
    };
  },
};
</script>