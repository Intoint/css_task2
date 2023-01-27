<script>
  import Userfront from "@userfront/vue"
  export default {
    computed: {
      isLoggedIn() {
        return (!!Userfront.tokens.accessToken)
      },
    },
  }
</script>

<template>
  <div id="app">
    <ul>
      <li v-if="isLoggedIn"><a href="/home">Home</a></li>
      <li v-if="isLoggedIn"><a href="/viewprofile">My profile</a></li>
      <li v-if="isLoggedIn"><a href="/allEvents">Events</a></li>
      <li v-if="isLoggedIn"><a href="/logout">Log out</a></li>
      <li v-else><a href="/login">Log in</a></li>
      <li v-if="!isLoggedIn"><a href="/signUp">Sign up</a></li>
    </ul>    
    <router-view/>
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #FFD580;
    position: fixed;
    top: 0;
    width: 100%;
  }

  li {
    float: left;
    background-color: #FFD580;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #04AA6D;
  }
</style>