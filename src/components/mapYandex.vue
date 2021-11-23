<template>
  <div  class="containerMap">
         <yandex-map 
         style="height: 500px;
                width: 50vmax; 
                margin: 0 0 30px 0;
                border: 1px solid black;"
    :coords="coords"
    :zoom="18" 
   
  >
    <ymap-marker 
      :coords="coords" 
      marker-id="1" 
      hint-content="Magic-Service" 
      :icon="markerIcon"
    />
  </yandex-map>
  <div class="mapText">
    <div class="infoMap">Наш адрес: Новая улица, 51</div>
    <br/>
    <br/>
    <div class="infoMap">Режим работы: </div>
    <br/>
    <div class="infoMap">ежедневно</div>
    <br/>
    <div class="infoMap">с 10:00 до 20:00</div>
    <br/>
    <br/>
      <div class="infoMap">Без обеда и выходных!</div>
    <button class="btnMap" v-scroll-to="'#callMe'">+7 (831) 410-53-10</button>
    <button class="btnMap" v-scroll-to="'#callMe'">+7 (910) 790-53-10</button>
  </div>
       
  </div>
</template>

<script>
export default {
    data(){
        return{
                coords: [56.314223, 43.989416],
      markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://i.ibb.co/gdqdh1s/magic-logo-map.png',
      imageSize: [43, 43],
      imageOffset: [0, 0],
      content: 'Magic Service',
      contentOffset: [-27, -20],
      contentLayout: '<div style="border-radius: 10px;background: black; width: 100px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    }
        }
    }
}
</script>

<style>

</style>