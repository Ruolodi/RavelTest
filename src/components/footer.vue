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
         <a target="_blank" href="https://vk.com/magicserviceru"> <div class="logoContactsVk"></div></a>
         <a target="_blank" href="https://instagram.com/magicservice.ru?utm_medium=copy_link"> <div class="logoContactsInst"></div> </a>  
         <a target="_blank" href="https://tlgg.ru/magicserviceru" > <div class="logoContactsTelegram"> </div></a>
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