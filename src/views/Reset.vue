<template>
  <div id="app">
    <password-reset-form tool-id="dkanlor" />
  </div>
</template>

<script>
import Userfront, { PasswordResetForm } from "@userfront/vue";

Userfront.init("pn4mvypb");

export default {
  name: "App",
  components: {
    PasswordResetForm,
  },
};
</script>

  