<template>
    <div id="app">
      <logout-button tool-id="mlbrmda" />
    </div>
  </template>
  
  <script>
  import Userfront, { LogoutButton } from "@userfront/vue";
  
  Userfront.init("pn4mvypb");
  
  export default {
    name: "App",
    components: {
      LogoutButton,
    },
  };
  </script>