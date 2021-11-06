<template>
  <div class="containerUsl">
      <div class="cardUsl">
          <ul>
              <li>Популярная услуга:</li>
              <li>Ремонт при вас за 20 мин!</li>
              <li>Производим ремонт под вашим контролем, чтобы вы были уверены в нашем сервисе!</li>
              <li><h1 class="marquee"><span>Заказывайте услугу по телефонам указанным ниже:</span></h1></li>
               <button class="btn" v-scroll-to="'#callMe'">+7(831)410-53-10</button>
               <button class="btn" v-scroll-to="'#callMe'">+7(910)790-53-10</button>
               <ul>
                   <li>ИЛИ</li>
                   <li>Мы вам перезвоним!</li>
               </ul>
               <input class="inputNumbUsl" type="text" placeholder="Имя">
      <input class="inputNumbUsl" type="text" placeholder="Телефон*">
      <button class="btn" >Заказать услугу</button>
          </ul>
         
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>