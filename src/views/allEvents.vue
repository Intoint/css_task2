<script>
import eventView from '../components/eventView.vue'
import createEvent from '../views/CreateEvent.vue'


export default {
  name: 'allEvents',
  components: {
    eventView,
    createEvent
  },
  created() {
  document.body.style.backgroundColor = "#20B2AA";
  },
  data() {
    return {
      events: [
            { name: 'green', date: '15-09-1963', image: 'src/Images/Skærmbillede 2022-12-04 kl. 12.34.33.png', location: 'Hjemme' , description: 'TEST' },
            { name: 'blue', date: '15-09-1949', image: 'src/Images/Skærmbillede 2022-12-04 kl. 12.34.33.png', location: 'Ude' , description: 'TEST2' },
            { name: 'red', date: '03-09-1963', image: 'src/Images/forstørrelsesGlas.png', location: 'Hjemme' , description: 'TEST3' },
          ]
    }
  }
,
  methods: {
    addEvent(eventInfo) {
      console.log('MODTAGET')
      console.log('---------')
      console.log('Navn: '+eventInfo.name)
      console.log('Date: '+eventInfo.date)
      console.log('Location: '+eventInfo.location)
      console.log('Description: '+eventInfo.description)
      let newEvent = {
        name: eventInfo.name,
        date: eventInfo.date,
        image: eventInfo.image,
        location: eventInfo.location,
        description: eventInfo.description
      }
      this.events.push(newEvent)
    }
  }
};
</script>

<template>
  <div class="eventContainer">
 <span class="logo"><span>StarEvents</span></span>
    <ul>
        <li v-for="(event, index) in events" :key="index">
          <eventView :name="event.name" :date="event.date" :image="event.image" :location="event.location" :description="event.decription"></eventView>
        </li>
      </ul>
      <createEvent @event-created="addEvent"></createEvent>
    </div>
 
</template>

<style scoped>


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
</style>