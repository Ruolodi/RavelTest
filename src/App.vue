<template>
   <div class="bodyBlock">
     <app-head></app-head >
     <content-rav></content-rav>
     <content-mob :style="sizeWidth<=800? 'block':'none'"></content-mob>
     <quiz-app></quiz-app>
     <number-app></number-app>
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
  'content-mob': contentMobVue
  
},
}
</script>

<style>

</style>