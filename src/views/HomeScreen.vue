<script>
import Userfront from "@userfront/vue"
export default {
  name: "allEvents",
  created() {
    document.body.style.backgroundColor = "#20B2AA";
  },
  computed: {
      user() {
        return Userfront.user;
      },
      userImgSrc() {
        return Userfront.user.image;
      },
    },
};
</script>

<template>
<div>
  <span class="logo"><span>StarEvents</span></span>
  <div class="mainInputClass">
    <div class="nameProfile">
      <img :src="userImgSrc" alt="profilepic" class="profilePic"/>
      <span class="greatToseeYoutext"> <span>Great to see you!</span>
      <span class="johnSmithText">
          <span>{{ user.name }}</span></span>
      </span>
    </div>
    <div>
      <span class="discoverText"> 
        <span>Discover Events in your neigborhood</span>
      </span>
      <input type ="text" placeholder ="Search events..." class="searchBoxText">
    </div>
    <div class="events">
      <span class="allEventsText"><span>All events</span></span>
      <a href="/createevent" class="button">
      <span class="newEventText"><span>Create new event</span></span></a>
      <span class="viewEventsTexts"><span>View my events</span></span>
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
  border-color: transparent;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
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

.events{
    display:flex;
  flex-direction: row;
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
.allEventsText{
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Poppins;
  font-weight: 600;
  line-height: 170.00000476837158%;
  
}
.newEventText {
  color: rgba(209, 244, 244, 1);
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: Medium;
  margin-left: 30px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
  font-stretch: normal;
  text-decoration: underline;
}

.viewEventsTexts {
  color: rgba(29, 176, 179, 1);
  height: auto;
  font-size: 54px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
  font-stretch: normal;
  
}

.profilePic {
  width: 75px;
  height: 75px;
  position: relative;
  border-color: transparent;
  border-radius: 99px;
}

.greatToseeYoutext {
  color: rgba(255, 255, 255, 1);
  height: auto;
  flex-grow: 1;
  font-size: 18px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
  font-stretch: normal;
  
}

.johnSmithText {
  color: rgba(255, 255, 255, 1);
  height: auto;
  flex-grow: 1;
  font-size: 20px;
  align-self: auto;
  font-style: SemiBold;
  margin-left: 10px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 170.00000476837158%;
}

.discoverText {
  color: rgba(255, 255, 255, 1);
  height: auto;
  flex-grow: 1;
  font-size: 30px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  
}

.searchBoxText{
  color: #F7F9F9;
  height: auto;
  flex-grow: 1;
  width: 300px;
  border-radius: 15px;
  font-size: 20px;
  align-self: auto;
  font-style: Medium;
  margin-top: 1px;
  margin-left: 70vw;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
  font-stretch: normal;
  right: 5vw;
  background-color: #66CCCC;
  border-color: transparent;
  
 
}

  .img {
    max-height: 40%;
    max-width: 15%;
    border-radius: 20px;
  }

  .eventContainer {
    display: flex;
    flex-direction: row;
    background: #BEC0C7;
    min-height: 84px;
    min-width: 300px;
    padding: 10px;
    border-radius: 25px;
    gap: 10px;
    margin-top: 70px;
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
