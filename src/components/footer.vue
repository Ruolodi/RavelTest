<template>
  <div class="footerVue">
      
        <div class="cardFooter">
           <ul>
          <li v-scroll-to="'#head'">Главная</li>
          <li v-scroll-to="'#photos'">Отзывы</li>
          
          
          
         
          </ul>
      </div>
        <div class="cardFooter">
            <h3>Звоните по телефонам:</h3>
           <button class="btn" v-scroll-to="'#callMe'">+7(831)410-53-10</button>
               <button class="btn" v-scroll-to="'#callMe'">+7(910)790-53-10</button>
      </div>
        <div class="cardFooter">
          <div class="logoContactsVk">
            <a href=""></a>
          </div>
          <div class="logoContactsInst">
            <a href=""></a>     
          </div>
          <div class="logoContactsTelegram">
            <a href=""></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    anchor1(){
    

      window.scrollTo({  top: 2300, behavior: 'smooth'});
    }
  }
}
</script>

<style>

</style>