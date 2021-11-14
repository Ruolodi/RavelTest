<template>
  <div class="containerQuestions" id="questions">
    <ul>
      <li>Часто задаваемые вопросы:</li>
      <li>Здесь есть все ответы</li>
    </ul>
    <div class="questCard" @click="quest1=!quest1, plus1==='▼'? plus1='▲' : plus1='▼'" >

      Какова гарантия  что устройство будет функционировать после выполненных работ?  {{plus1}}
      <transition name="fadeQuestions"><h4 v-show="quest1">Сервис предлагает только качественные услуги и наши специалисты имеют большой опыт  в данной сфере, а также зарекомендовали себя в данной сфере как одни из лучших.</h4></transition>
    </div>
    <hr>
    <div class="questCard" @click="quest2=!quest2, plus2==='▼'? plus2='▲' : plus2='▼'" >
      Что будет с моими конфиденциальными данными? {{plus2}}
     <transition name="fadeQuestions"><h4 v-show="quest2">Ваши данные никак не будут затронуты, так как работы будут производиться исключительно механически. Также вы можете проверить устройство "не отходя от кассы"</h4></transition>
    </div>
    <div class="questCard" @click="quest3=!quest3, plus3==='▼'? plus3='▲' : plus3='▼'" >
      Какова стоимость ремонта мобильного телефона? {{plus3}}
      <transition name="fadeQuestions"><h4 v-show="quest3">Стоимость ремонта определяется мастером на основе диагностики. Диагностика проводится в течение дня и после этого по телефону согласовывается стоимость ремонта с Клиентом. Если Клиент согласен на ремонт, то диагностику он не оплачивает, а платит только за ремонт.</h4></transition>
    </div>
    <div class="questCard" @click="quest4=!quest4, plus4==='▼'? plus4='▲' : plus4='▼'" >
      Что нужно для сдачи устройства в ремонт? {{plus4}}
      <transition name="fadeQuestions"><h4 v-show="quest4">Вам нужно оставить заявку на нашем сайте, либо позвонить по нашему номеру телефона. Также можно прийти в наш сервисный центр по адресу: Нижний Новгород ул. Новая, 51.</h4></transition>
    </div>
    <div class="questCard" @click="quest5=!quest5, plus5==='▼'? plus5='▲' : plus5='▼'" >
      Каков реалистичный срок ремонта телефона? {{plus5}}
      <transition name="fadeQuestions"><h4 v-show="quest5">Сервисные центры ориентирован на ремонт телефонов в первый день. Это означает, что больше половины телефонов ремонтируются в течение 1-го дня с момента обращения клиента. Более длинные сроки ремонта могут быть связаны с высокой загруженностью или отсутствием необходимых запчастей.</h4></transition>
    </div>
     

  </div>

</template>
<script>

export default {
     
   
 
  data() {
    return {
   
     quest1: false,
     quest2: false,
     quest3: false,
     quest4: false,
     quest5: false,
     plus1:'▼',
     plus2:'▼',
     plus3:'▼',
     plus4:'▼',
     plus5:'▼',
    
    }
  },
  methods:{
   
       
    
  }



  
}
</script>

<style>

</style>
