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

<template>
  <div id="app">
    <signup-form tool-id="mlbrmdr" />
  </div>
</template>