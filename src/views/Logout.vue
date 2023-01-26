<script>
  import Userfront, { LogoutButton } from "@userfront/vue";
  Userfront.init("pn4mvypb");

  export default {
    name: "App",
    components: {
      LogoutButton,
    },
    created() {
      console.log('LOGOUT')
      document.body.style.backgroundColor = "#20B2AA";
    }
  };
</script>

<template>
  <div class="vertical-center" id="app">
    <div class="container">
      <div class="loginText">
        <p class="center">Er du sikker på at du vil logge af?</p>
      </div>
      <div class="center">
        <logout-button tool-id="mlbrmda" />    
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
  position: relative;
  margin: 0;
  border: 3px solid green;
  top: 150px;
  left: 10%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.center {
  margin: 0;
  position: absolute;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>

