<template>
 
 <head><meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=0.5" /></head>
 
   <div class="bodyBlock">
     <app-head></app-head >
     <content-rav></content-rav>
     <content-mob :style="sizeWidth<=800? 'block':'none'"></content-mob>
     <quiz-app></quiz-app>
     <number-app></number-app>
    <map-yandex></map-yandex>
        <!--   <popular-usl></popular-usl> -->
      <important-questions ></important-questions>
      
      <footer-vue></footer-vue>

   </div>
   
</template>

<script>
import AppHeadvue from './components/AppHead.vue'
import contentRavVue from './components/contentRav.vue'
import numberAppVue from './components/numberApp.vue'
import quizAppVue from './components/quizApp.vue'
import popularUslVue from './components/popularUsl.vue'
import questionsVue from './components/questions.vue'
import footerVue from './components/footer.vue'
import contentMobVue from './components/contentMob.vue'
import mapYandexVue from './components/mapYandex.vue'



export default {
  data(){
    return{
        sizeWidth: 0,
    }
  },

 
  
    computed:{
         widthSize(){
            this.sizeWidth = window.innerWidth;
        }
      
    },

components:{
  'app-head': AppHeadvue,
  'content-rav': contentRavVue,
  'quiz-app': quizAppVue,
  'number-app': numberAppVue,
  'popular-usl': popularUslVue,
  'important-questions': questionsVue,
  'footer-vue': footerVue,
  'content-mob': contentMobVue,
  'map-yandex': mapYandexVue
  
},
}
</script>

<style>

</style>