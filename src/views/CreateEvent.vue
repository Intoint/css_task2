<script>
export default {
  name: "createEvent",
  created() {
  document.body.style.backgroundColor = "#20B2AA";
  },
  data() {
      return {
        name: "",
        location: "",
        date: "",
        description: "",
        image: ""
  }

  },
  methods: {
    onSubmit() {
      console.log('Submit')
      let eventInfo = {
       name: this.name,
       location: this.location,
       date: this.date,
       description: this.description,
       image: this.image
     }
     if (this.name != "")
     {
      console.log('name '+this.name)
      console.log('location '+this.location)
      console.log('description '+this.description)
      console.log('date '+this.date)
      console.log('Image '+this.image)
      this.$emit('event-created', eventInfo)
      this.name = ''
      this.location = ''
      this.date = ''
      this.description = ''
      this.image = ''
     }
     else
     {
      alert("Name cannot be empty")
     }
    }
  },
  watch: {
    image: function () {
      document.getElementById("showImage").src = this.image
    }
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div  >
      <div class="mainInputClass">
        <span class="headline"><span>Create new event</span></span>
        <span class="logo"><span>StarEvents</span></span>
      <img
        id="showImage"
        src="images/GreyBox.jpeg"
        alt="Rectangle13404068"
        class="greyBox"
      />
      <span class="addPictureText"><span>Add picture..</span></span>
        <input id ="name" type="text" placeholder="name" v-model="name"/>
        <input id = "date" type="text" placeholder="date"  v-model="date"/>
        <input id="location" type="text" placeholder="location" v-model="location"  />
        <input id="description" type="text" placeholder="description" v-model="description"/>
        <input id="image" type="text" placeholder="image" v-model="image"/>
        <span class="button"><input class="button" type="submit" value="Create event" > </span>
      </div>      
    </div>
  </form>
</template>


<style scoped>

.mainInputClass {
  margin-top: 70px;
  left: 25px;
  height: 559px;
  display: flex;
  padding: 0 0 84px 0;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  flex-direction: column;
  width: 70vw;
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

.button {
  display: flex;
  flex-shrink: 0;
  border-radius: 14px;
  padding: 18px 10px;
  width: 65vw;
  height: 2vw;
  align-items: center;
  border-color: transparent;
  justify-content: center;
  background-color: rgba(29, 176, 179, 1);
  cursor: pointer
}
.buttonText {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 16px;
  font-style: SemiBold;
  font-family: Poppins;
  font-weight: 600;
  line-height: 160.0000023841858%;
  text-align: center 
}

.headline {
  width: 325px;
  display: flex;
  align-items: center;
  border-color: transparent;
  flex-direction: column;
  margin-top: 8vw;
  color: rgba(10, 13, 20, 1);
  font-size: 24px;
  font-family: Poppins;
}

.greyBox {
  top: 300px;
  left: 47px;
  width: 277px;
  height: 149px;
  border-color: transparent;
  object-fit: scale-down;  
}
.addPictureText {
  top: 245px;
  left: 78px;
  color: rgba(105, 184, 185, 1);
  width: 200px;
  font-size: 16px;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  margin-right: 0;
  margin-bottom: 2vw;
  text-decoration: underline;
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


@media(max-width: 479px) {
  .frame162740-homescreenandevents {
    height: 777px;
  }
}
</style>
