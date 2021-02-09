<!-- 
sub01.vue
@/views/manager/sub01.vue
功能块页面（markdown功能实装）
-->
<template>
  <!-- <mavon-editor v-model="value"/> -->
  <div>test</div>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>
<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  name: "Sub01",
};
</script>