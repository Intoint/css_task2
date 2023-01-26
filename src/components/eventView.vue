<script>
export default {
  props: ['name','date','description','image','location']
}
</script>

<template>
    <div class="eventContainer">
    <img :src="$props.image"/>
    <div class="divEventInfo">
      <div style="display: flex; flex-direction: column">
        <div class="eventName">{{name}}</div>
        <div class="sideData">
          <div>{{ date }}</div>
          <div style="display: flex; flex-direction: row; align-items: center; gap: 10%">
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<style scoped>
  img {
    max-height: 40%;
    max-width: 15%;
    border-radius: 20px;
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