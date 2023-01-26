<template>
  <div id="app">
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/login">Log in</a></li>
      <li><a href="/viewprofile">My profile</a></li>
      <li><a href="/allEvents">Events</a></li>
      <li><a href="/createevent">New event</a></li>
      <li><a href="/signUp">Sign up</a></li>
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