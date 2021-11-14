<template>
  <div  class="containerMap">
         <yandex-map 
         style="height: 500px;
                width: 500px; 
                
                border: 1px solid black"
    :coords="coords"
    :zoom="18" 
   
  >
    <ymap-marker 
      :coords="coords" 
      marker-id="123" 
      hint-content="Magic-Service" 
    />
  </yandex-map>
  <div class="mapText">12321321321321321</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
                coords: [56.314223, 43.989416],
        }
    }
}
</script>

<style>

</style>