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