<template>
  <div class="containerQuiz">
    
    <div :class="Model>=5? 'none':'switcher'">
      
      <div :class="Model===0? 'deviceActive':'device'" @click="Model=0">
        iPhone
      </div>
      <div :class="Model===1? 'deviceActive':'device'"  @click="Model=1">
        iPad
      </div>
      <div :class="Model===2? 'deviceActive':'device'" @click="Model=2">
        Mac
      </div>
      <div :class="Model===3? 'deviceActive':'device'" @click="Model=3">
        Watch
      </div>
      <div :class="Model===4? 'deviceActive':'device'" @click="Model=4">
        Другая техника
      </div>
    </div>
    <div :class="Model>=5? 'switcher':'none'">
      <div class="device"  @click="Model=0, finalPrice=0">
        Вернуться в начало
      </div>
     
    </div>
    
      <div class="cardModels" v-show="Model === 0">
        <div class="model" @click="Model=5, finalPrice+=iPhone[id].price" v-for="(itemsIphone,id) in iPhone" :key="id">{{itemsIphone.body}}</div>
       
      </div>
    
   
      <div class="cardModels" v-show="Model===1">
        <div class="model"  @click="Model=5" v-for="(itemsIpad,id) in iPad" :key="id">{{itemsIpad.body}}</div>
      
      </div>

      <div class="cardModels" v-show="Model===2">
        <div class="model"  @click="Model=5" v-for="(itemsMac,id) in Mac" :key="id">{{itemsMac.body}}</div>
      
      </div>
      <div class="cardModels" v-show="Model===3">
        <div class="model"  @click="Model=6" v-for="(itemsWatch,id) in Watch" :key="id">{{itemsWatch.body}}</div>
       
      </div>
      <div class="cardModels" v-show="Model===5">
        <div class="model" @click="Model=7, finalPrice+=problems[id].price" v-for="(itemsProblems,id) in problems" :key="id">{{itemsProblems.body}}</div>
        
        
      </div>
      <div class="cardModels" v-show="Model===6">
        <div class="model" @click="Model=7" v-for="(itemsProblems,id) in problemsWatch" :key="id">{{itemsProblems.body}}</div>
      
     </div>
      <div class="cardModels" v-show="Model===7">
        
       <div class="model">Примерная цена ремонта: {{finalPrice}} рублей</div>
       <div class="model" v-scroll-to="'#callMe'">Заказать звонок оператора</div>
     </div>
      
    </div>
   

  
</template>

<script>
export default {

data(){
  return{
    Model: 0,
    finalPrice: 0,
    iPhone:[{body:'iPhone 4', price: 1000},{body:'iPhone 4s', price: '0'},{body:'iPhone 5', price: 1500},{body:'iPhone 5C', price: '0'},{body:'iPhone 5S', price: '0'},{body:'iPhone 6', price: '0'},{body:'iPhone 6 Plus', price: '0'},
    {body:'iPhone 6S Plus', price: '0'},{body:'iPhone SE', price: '0'},{body:'iPhone 7', price: '0'},{body:'iPhone 7 Plus', price: '0'},{body:'iPhone 8', price: '0'},{body:'iPhone 8 Plus', price: '0'},
    {body:'iPhone SE 2', price: '0'},{body:'iPhone X', price: '0'},{body:'iPhone Xr', price: '0'},{body:'iPhone Xs', price: '0'},{body:'iPhone Xs Max', price: '0'},{body:'iPhone 11', price: '0'},
    {body:'iPhone 11 Pro', price: '0'},{body:'iPhone 11 Pro Max', price: '0'},{body:'iPhone 12 Mini', price: '0'},{body:'iPhone 12', price: '0'},{body:'iPhone 12 Pro', price: '0'},
    {body:'iPhone 12 Pro Max', price: '0'}],
    
    iPad:[{body:'iPad Pro 12.9', price: '0'},{body:'iPad Pro 11', price: '0'},{body:'iPad Pro 10.5', price: '0'},{body:'iPad Pro 9.7', price: '0'},{body:'iPad Air 4', price: '0'},
    {body:'iPad Air 3', price: '0'},{body:'iPad Air 2', price: '0'},{body:'iPad Air', price: '0'},{body:'iPad 8', price: '0'},{body:'iPad 7', price: '0'},
    {body:'iPad 6', price: '0'},{body:'iPad 5', price: '0'},{body:'iPad 4', price: '0'},{body:'iPad 3', price: '0'},{body:'iPad 2', price: '0'},{body:'iPad Mini 5', price: '0'},
    {body:'iPad Mini 4', price: '0'},{body:'iPad Mini 3', price: '0'},
    {body:'iPad Mini 2', price: '0'},{body:'iPad Mini', price: '0'},],
    
    Mac:[{body:'iMac 27', price: '0'}, {body:'iMac 21.5/24', price: '0'},{body:'Pro Retina', price: '0'},{body:'Pro', price: '0'},{body:'Mac 12', price: '0'},
    {body:'Air 13', price: '0'},{body:'Air 11', price: '0'},{body:'Mac Mini', price: '0'}],
    
    Watch:[{body:'Apple Watch 1', price: '0'},{body:'Apple Watch 2', price: '0'},{body:'Apple Watch 3/4', price: '0'},{body:'Apple Watch 5', price: '0'},{body:'Apple Watch SE', price: '0'},
    {body:'Apple Watch 6', price: '0'}],

    OtherModels:[],
    problems:[{body:'Быстро разряжается', price: 300},{body:'Разбито стекло / Экран', price: '0'},{body:'Не заряжается', price: '0'},{body:'Плохо слышно Тихий динамик', price: '0'},{body:'Не работает кнопка / Кнопки', price: '0'},{body:'Не работает камера', price: '0'},{body:'Упал в воду / Попала вода', price: '0'},
    {body:'Другая неисправность', price: '0'}],
    
     problemsWatch:[{body:'Быстро разряжается', price: 300},{body:'Разбито стекло / Экран', price: '0'},{body:'Не заряжается', price: '0'},{body:'Не работает кнопка / Кнопки', price: '0'},{body:'Упал в воду / Попала вода', price: '0'},
    {body:'Другая неисправность', price: '0'}],
  }
},
methods: {
  priceIphone(id){
    
  }

}


}
</script>

<style>

</style>