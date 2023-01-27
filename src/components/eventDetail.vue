<script>
  export default {
    name: 'eventDetail',
  props: ['name','date','description','image','location'],
    mounted() {
      console.log('Mounted')
    }
}
</script>

<template>
  <div class="eventContainer">
    <div class="divEventInfo">
        <div class="sideData field" style="display: flex; flex-direction: column">
            <table>
              <img :src="$props.image"/>
              <tr>  <td>Name</td>           <td>{{ name }}</td>         </tr>
              <tr>  <td>Date</td>           <td>{{ date }}</td>         </tr>
              <tr>  <td>Description</td>    <td>{{ description }}</td>  </tr>
              <tr>  <td>Location</td>       <td>{{ location }}</td>     </tr>
            </table>
        </div>
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
  
  .field {
    color: #CD853F;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .eventContainer {
    display: flex;
    overflow-y: auto;
    flex-direction: row;
    background: white;
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
