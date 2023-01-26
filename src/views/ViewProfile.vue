<script>
  import Userfront from "@userfront/vue";

  export default {
  name: 'viewProfile',

  created() {
    document.body.style.backgroundColor = "#20B2AA";
    console.log('PROFILE')
  },
  computed: {
      user() {
        return Userfront.user;
      },
    },
  };
</script>


<template>
  <div>
    <span class="logo"><span>StarEvents</span></span>
    <div class="mainInputClass"> 
      <span class="headiLine">
        <span>Welcome to your profile!</span>
      </span>
      <img :src="user.image" alt="profilePic" class="profilePic"/>

      <span class="name"><span>Name: {{ user.name }}</span></span>  
      <span class="Txt"><span>Username: {{  user.username }}</span></span>    
      <span class="Txt"><span>E-mail: {{ user.email }}</span></span>
      <div>
        <a href="/logout">
        <span class="logOutTxt"><span>Log out</span></span> </a>
      </div>
      <div>
        
        <a href="/allEvents"> 
          <span class="myEventsTxt"><span>All events</span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .mainInputClass {
    margin-top: 70px;
    left: 25px;
    height: 559px;
    display: flex;
    padding: 0 0 84px 0;
    border-color: transparent;
    flex-direction: column;
    width: 70vw;
    margin-left: 50px;
  }

  .mainInputClass > input{
    color: rgba(151, 151, 151, 1);
    display: flex;
    flex-shrink: 0;
    border-radius: 20px;
    margin-bottom: 19px;
    font-family: Poppins;
    font-size: 16px;
    width: 65vw;
    padding: 18px 10px;
    border-color: transparent;
    background-color: rgba(249, 250, 251, 1);
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 5vw;
    color: rgba(242, 181, 90, 1);
    width: 152px;
    font-size: 20px;
    font-style: SemiBold;
    font-family: Plus Jakarta Sans;
    font-weight: 600;
  }

  .passwordTxt {
    color: rgba(151, 151, 151, 1);
    display: flex;
    flex-shrink: 0;
    border-radius: 20px;
    font-family: Poppins;
    font-size: 16px;
    width: 65vw;
    border-color: transparent;
    background-color: rgba(249, 250, 251, 1);
    padding: 18px 10px;
    margin-bottom: 19px;
  }


  .Txt {
    color: rgba(151, 151, 151, 1);
    display: flex;
    flex-shrink: 0;
    border-radius: 20px;
    font-family: Poppins;
    font-size: 16px;
    width: 65vw;
    border-color: transparent;
    background-color: rgba(249, 250, 251, 1);
    padding: 18px 10px;
    margin-bottom: 19px;
  }

  .myEventsTxt {
    color: rgba(255, 255, 255, 1);
    height: auto;
    font-size: 16px;
    align-self: auto;
    font-style: SemiBold;
    text-align: left;
    font-family: Poppins;
    font-weight: 600;
    line-height: 170.00000476837158%;
    font-stretch: normal;   
  }


  .logOutTxt{
    color: rgba(209, 244, 244, 1);
    height: auto;
    font-size: 14px;
    align-self: auto;
    font-style: Medium;
    font-family: Poppins;
    font-weight: 500;
    line-height: 170.00000476837158%;
    font-stretch: normal;
    margin-left: 58vw;
  }

  .nameProfile{
    display: flex;
    flex-direction: row; 
  }

  .profilePic {
    width: 75px;
    height: 75px;
    border-color: transparent;
    border-radius: 99px;
    margin-left:15px;
    margin-bottom: 20px;
  }

  .headiLine {
    color: rgba(255, 255, 255, 1);
    height: auto;
    flex-grow: 1;
    font-size: 25px;
    align-self: auto;
    font-style: Medium;
    text-align: center;
    font-family: Poppins;
    font-weight: 500;
    line-height: 170.00000476837158%;
    font-stretch: normal;
    margin-top: 30px;
  }

  .name {
    color: rgba(255, 255, 255, 1);
    height: auto;
    flex-grow: 1;
    font-size: 20px;
    align-self: auto;
    font-style: Medium;
    text-align: left;
    font-family: Poppins;
    font-weight: 500;
    margin-left: 1vw;
    margin-bottom: 30px;
  }
  .seeAllEvents {
    color: rgba(29, 176, 179, 1);
    width: 143px;
    height: auto;
    font-size: 16px;
    align-self: auto;
    font-style: SemiBold;
    text-align: left;
    font-family: Poppins;
    font-weight: 600;
    line-height: 170.00000476837158%;
    font-stretch: normal;
    margin-left: 55vw;
  }

  .logo {
    position: absolute;
    top: 15px;
    right: 5vw;
    color: rgba(242, 181, 90, 1);
    width: 152px;
    font-size: 20px;
    font-style: SemiBold;
    font-family: Plus Jakarta Sans;
    font-weight: 600;
  }

  img {    
      border-radius: 20px;
    }

    .eventContainer {
      display: flex;
      overflow-y: auto;
      flex-direction: row;
      background: #BEC0C7;
      min-height: 84px;
      min-width: 300px;
      padding: 10px;
      border-radius: 25px;
      gap: 10px;
      margin-top: 50px;
    }

  .eventContainer:hover {
    box-shadow: 0 0 30px rgba(29, 176, 179, 1);;
  }

  .eventName {
    color: #CD853F;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .sideData {
    color: white;
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 400;
    gap: 8%;
  }

  @media(max-width: 479px) {
    .frame162740-homescreenandevents {
      height: 777px;
    }
  }
</style>
