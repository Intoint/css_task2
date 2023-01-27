<script>
  import eventDetail from '@/components/eventDetail.vue'
  import OpenWindow from '@/components/OpenWindow.vue';
  export default {
    name: "eventView",
    components: {
      eventDetail,
      OpenWindow
    },
    data() {
      return {
        open: false
      }
    },
    props: ['name','date','description','image','location']
}
</script>

<template>
  <div class="eventContainer">
    <img :src="$props.image"/>
    <div class="divEventInfo">
      <div style="display: flex; flex-direction: column">
        <div>
          <label for="details">Details</label>
          <input type="checkbox" id="details" v-model="open"/>
        </div>

        <div class="sideData">
          <div class="eventName">{{name}}</div>
            <div>{{ date }}</div>
        </div>
      </div>
      <OpenWindow v-model="open">
        <eventDetail  :name="name" :date="date" :image="image" :location="location" :description="description"></eventDetail>
      </OpenWindow>
    </div>
  </div>
</template>

<style scoped>
  img {
    max-height: 10%;
    max-width: 15%;
    border-radius: 20px;
    object-fit: scale-down;  
  }
  
  .eventName {
    color: #CD853F;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .eventContainer {
    display: flex;
    overflow-y: auto;
    flex-direction: row;
    background: #BEC0C7;
    min-height: 84px;
    max-height: 130px;
    min-width: 300px;
    padding: 10px;
    border-radius: 25px;
    gap: 10px;
    margin-top: 70px;
  }

  .eventContainer:hover {
    box-shadow: 0 0 30px rgba(29, 176, 179, 1);
  }

</style>