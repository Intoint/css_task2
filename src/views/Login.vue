<script>

import Userfront, { LoginForm } from "@userfront/vue";

Userfront.init("pn4mvypb");

export default {
  name: "App",
  components: {
    LoginForm,
  },
  created() {
  document.body.style.backgroundColor = "#20B2AA";
  }
};
</script>

<template>
  <div id="app">
    LOGIN!!
    <login-form tool-id="kdkrama" />
  </div>
</template>

