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
  mounted() {
    if(localStorage.events) {
      this.events = JSON.parse(localStorage.events);
    }
  },
  watch: {
    events: {
      handler(allEvents) {
        localStorage.events = JSON.stringify(allEvents);
      },
      deep: true
    }
  },
  data() {
    return {
      events: [
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
      console.log('Image: '+eventInfo.image)
      let newEvent = {
        name: eventInfo.name,
        date: eventInfo.date,
        image: eventInfo.image,
        location: eventInfo.location,
        description: eventInfo.description
      }
      this.events.push(newEvent)
    },
    deleteEvent() {
      this.events.splice(event.target.parentNode.id,1)
    }
  }
};
</script>

<template>
  <div class="eventContainer">
    <span class="logo"><span>StarEvents</span></span>
    <table class="eventTable">
      <tr v-for="(event, index) in events" :key="index" :id="index">
        <eventView :name="event.name" :date="event.date" :image="event.image" :location="event.location" :description="event.decription"></eventView><button v-on:click="deleteEvent">Delete</button>
      </tr>
    </table>
    <createEvent @event-created="addEvent"></createEvent>
  </div>
</template>

<style scoped>

  .eventTable {
    width: 100%;
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