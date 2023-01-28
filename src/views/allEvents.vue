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
    this.sortedData = this.events;
  },
  watch: {
    events: {
      handler(allEvents) {
        localStorage.events = JSON.stringify(allEvents);
        this.sortedData = this.events;
      },
      deep: true
    }
  },
  data() {
    return {
      events: [],
      isHidden: false,
      sortedData: [],
      sortedbyASC: true,
      search: ""
    }
  },
  computed: {
      filteredEvents() {
        console.log("FE")
        return this.events.filter(ev => {
          return (ev.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1) 
        });
      },

  },
  methods: {
    addEvent(eventInfo) {
      this.isHidden = !this.isHidden;
      console.log('MODTAGET')
      console.log('---------')
      console.log('Navn: '+eventInfo.name)
      console.log('Date: '+eventInfo.date)
      console.log('Location: '+eventInfo.location)
      console.log('Description: '+eventInfo.description)
      console.log('Rating: '+eventInfo.rating)
      console.log('Image: '+eventInfo.image)
      let newEvent = {
        name: eventInfo.name,
        date: eventInfo.date,
        image: eventInfo.image,
        location: eventInfo.location,
        description: eventInfo.description,
        rating: eventInfo.rating
      }
      this.events.push(newEvent)
    },
    deleteEvent() {
      this.events.splice(event.target.parentNode.id,1)
    },
    sortList(sortBy) {
      if (this.sortedbyASC) {
        this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
        this.sortedbyASC = false;
      } else {
        this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
        this.sortedbyASC = true;
      }
    },
  },
};
</script>

<template>
  <div class="eventContainer">
    <span class="logo"><span>StarEvents</span></span>
    <br/>
    <br/>
    <div v-if="!isHidden" class="btn-group">      
      <button id="createEventButton" v-on:click="isHidden = !isHidden"><u>Create event</u></button>
      <button @click="sortList('name')">Name &#8597;</button>
      <button @click="sortList('date')">Date &#8597;</button>
      <button @click="sortList('rating')">Rating &#8597;</button>
      <input type="text" v-model="search" placeholder="Search name" />
    </div>
    <div v-if="isHidden" id="createEvent">
      <createEvent @event-created="addEvent"></createEvent>
    </div>

    <table id="eventTable" class="eventTable">
      <tr v-for="(event, index) in filteredEvents" :key="index" :id="index">
        <td style="display:none;">{{ event.name }}</td>
        <td style="display:none;">{{ event.date }}</td>
      <eventView :name="event.name" :date="event.date" :image="event.image" :location="event.location" :description="event.description" :rating="event.rating"></eventView><button v-on:click="deleteEvent">Delete</button>
      </tr>
    </table>
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

.scrollable {
  height: 40%;
  overflow: scroll;
}
.btn-group {
  position:fixed;
  top: 50px;
  background-color: #04AA6D; 
  color: white; 
  padding: 10px 54px; 
  cursor: pointer;
  right: 0; 
  float: right; 
}

.btn-group button{
  position:relative;
  top: 0;
  background-color: #04AA6D; 
  border: 1px solid green; 
  color: white; 
  padding: 10px 60px; 
  cursor: pointer; 
  float: left; 
}

.btn-group input{
  position:relative;
  top: 0;
  background-color: #04AA6D; 
  border: 1px solid green; 
  color: white; 
  padding: 10px 50px; 
  cursor: pointer; 
  float: left; 
}

.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
</style>