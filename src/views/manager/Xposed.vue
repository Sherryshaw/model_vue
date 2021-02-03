<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      style="background: #fff"
    >
      <a-page-header :title="projectName" :sub-title="version" />
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['2']"
        mode="inline"
        theme="light"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1"><MailOutlined /><span>操作1</span></a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span><MailOutlined /><span>操作2</span></span>
          </template>
          <a-menu-item key="2" @click="toPageNotFound">功能 1</a-menu-item>
          <a-menu-item key="3">功能 2</a-menu-item>
          <a-menu-item key="4">功能 3</a-menu-item>
          <a-menu-item key="5">功能 4</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0px">
        <a-row type="flex" justify="end">
          <a-col :span="1">
            <a-avatar
              style="color: #f56a00; backgroundcolor: #fde3cf"
              @click="showDrawer"
              >U</a-avatar
            >
            <a-drawer
              title="User"
              placement="right"
              :closable="false"
              v-model:visible="visible"
            >
              <a-button type="danger" @click="logout" block>登出</a-button>
            </a-drawer>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '80vh',
        }"
        >Content</a-layout-content
      >
      <a-layout-footer style="text-align: center">
        <span>Model_Vue ©2021 Created by Tianhao</span>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";
import store from "../../store";
import api from "../../common/Api";
import { useRouter } from "vue-router";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
  },
  setup() {
    const router = useRouter();
    const logout = () => {
      api.logout().then(() => {
        console.log(router);
        router.push("/");
      });
    };
    const toPageNotFound = () => {
      router.push("/Losadasdasgin");
    };
    return {
      logout,
      toPageNotFound,
    };
  },
  data() {
    return {
      projectName: store.state.projectName,
      version: store.state.version,
      visible: false,
      collapsed: false,
      list: [
        {
          key: "1",
          title: "Option 1",
        },
        {
          key: "2",
          title: "Navigation 2",
          children: [
            {
              key: "2.1",
              title: "Navigation 3",
              children: [{ key: "2.1.1", title: "Option 2.1.1" }],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    showDrawer() {
      this.visible = true;
    },
  },
};
</script>

