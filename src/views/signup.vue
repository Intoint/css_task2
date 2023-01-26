<template>
  <div id="app">
    SIGNUP!!
    <signup-form tool-id="mlbrmdr" />
  </div>
</template>

<script>
import Userfront, { SignupForm } from "@userfront/vue";

Userfront.init("pn4mvypb");

export default {
  name: "App",
  components: {
    SignupForm,
  },
  created() {
  document.body.style.backgroundColor = "#20B2AA";
  },
};
</script>