<script>

import Userfront, { LoginForm } from "@userfront/vue";
Userfront.init("pn4mvypb");

export default {
  name: "App",
  components: {
    LoginForm,
  },
  created() {
    console.log('LOGIN')
    document.body.style.backgroundColor = "#FFFFFF";
  }
};
</script>

<template>
  <div class="vertical-center" id="app">
    <div class="container">
      <div class="loginText">
        <p class="center">Du skal logge på for at komme på</p>
      </div>
      <div class="center">
        <p><login-form tool-id="kdkrama" /></p>
      </div>
    </div>
  </div>
</template>

<style>
  .container {
    height: 200px;
    position: top;
  }

  .loginText {
    height: 100px;
    position: absolute;
    margin: 0;
    border: 3px solid green;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>

