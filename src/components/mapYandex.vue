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
    <div class="infoMap">Пн 10:00 - 20:00</div>
    <div class="infoMap">Вт 10:00 - 20:00</div>
    <div class="infoMap">Ср 10:00 - 20:00</div>
    <div class="infoMap">Чт 10:00 - 20:00</div>
    <div class="infoMap">Пт 10:00 - 20:00</div>
    <div class="infoMap">Сб 10:00 - 20:00</div>
    <div class="infoMap">Вс 10:00 - 20:00</div>
    <button class="btnMap">+7 (831) 410-53-10</button>
    <button class="btnMap">+7 (910) 790-53-10</button>
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
      imageHref: 'https://psv4.userapi.com/c534536/u38864817/docs/d10/56af33e32cd6/magic-logo-map.png?extra=GP4LYVuR_3u-yiHHurn9PcvDRHbIxKdmdTSZ5Jo4PdjD0hOWK_gWjYmpbav9rg9WEpi98DdYZ3xuQzXHHOi_dZCsJfF4GE621FT59vPPP7RFUZoiZ9vIXswGAB7Ycx5nPIDMDwt2HpjC9bpfpOw',
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