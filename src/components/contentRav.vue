<template>
  <div class="containerContent" id="photos">
      <ul>
          <li>От нас уходят только с улыбкой :)</li>
          <li>Нажмите на фото, чтобы увеличить</li>
      </ul>
      
  <div class="flexPhoto">
          <div class="photo1"  v-for="(item,id) in arr" :key="item.id" @click="show(item.id)">
             
            <img :src="arr[id].photo"  alt="" width="275" height="460">
          </div>
          
         
  </div>
      
  </div>
  <transition name="fade">
  <div class="cardSlider" v-if="showSlider" >
 
    <div class="cardSlider" @click="show()" >
        </div>
       
          <div class="slider">
              
              <button class="prev" @click="prev" ></button>
              <a  @click="showSlider=!showSlider" target="_blank"> <img class="imgSlider" :src="arr[numberSlide].photo" alt="" ></a>
              
              <button class="next" @click="next" ></button>
              
          </div>

  </div>
  </transition>
</template>

<script>

export default {

    data(){
        return{
          
            numberSlide: 1,
            showSlider: false,
            arr: [{photo:'https://sun9-40.userapi.com/impg/n1iVqm0eg0ObtS_QNBHXjsYxkpx1y2J87HviiQ/fphpB0q7pDE.jpg?size=500x831&quality=96&sign=82e487809b1d309b2d29ecf93b1391c0&type=album',id:1},
            {photo:'https://sun9-73.userapi.com/impg/m_FKynE0mwyQaOVrSbG1nyt6MVCGMBMHreL45g/9pMMF4NT2vM.jpg?size=500x831&quality=96&sign=51a7f01d1287878375b7ea172839ced5&type=album', id:2},
            {photo:'https://sun9-10.userapi.com/impg/AEMGjNXP2AUDI92s-3rfCmiBqjvGloiUiJUq-A/gBCbYcqm2nE.jpg?size=500x831&quality=96&sign=92b105ae28d7268d37e2761a01cc65ba&type=album', id:3},
            {photo:'https://sun9-38.userapi.com/impg/yAXFv_S3a_t1UI3aDOVbDBMqY4cvApvknMH8Ug/CwVyJ84WTvY.jpg?size=500x831&quality=96&sign=de2ebb90f7bad7afbf936cbe5f1a6027&type=album', id:4},
            {photo:'https://sun9-36.userapi.com/impg/5aREkl0UUXak4gZLhcSZkDn4IF9_CmkYzwRoqg/Hy3req67jKY.jpg?size=500x831&quality=96&sign=0d5f8b74b48c88c51ac9d627d0591e11&type=album', id:5},
            {photo:'https://sun9-53.userapi.com/impg/JS9aSw_Fax0lSgNTW_QcbutFrFxUk3T6jm2Tiw/5chBmJI_UKo.jpg?size=500x831&quality=96&sign=ea51a4ca317ac14d4f01e3f84c85cbae&type=album', id:6},
            {photo:'https://sun9-37.userapi.com/impg/9Yv6ts2K4NSi9RXZ_91MOXmFJu4bGESIASF8MQ/iwZFwC43MNw.jpg?size=500x831&quality=96&sign=9ad95296d4f724ffe5b42fab5f2fd75e&type=album', id:7},
            {photo:'https://sun9-44.userapi.com/impg/6XHAGvo1cQKl8OecvscDCjLqoU4FjD9N2yKtLw/jZHFz2hzSwQ.jpg?size=500x831&quality=96&sign=b17c7efd33404e55c60f5fd3e09d520a&type=album', id:8}],
            
        }
    },
    methods:{
       
        show(id){
            this.showSlider=!this.showSlider
            this.numberSlide=id-1
            
            if(this.showSlider===true){
               window.onscroll = function () { window.scrollTo(1200, 1200); };
               
            }
                else{
                    window.onscroll=function(){};
                }
           
        },
        next(){
            if(this.numberSlide>6){
                this.numberSlide=0
            }
            else{
          this.numberSlide++
        }
        },
        prev(){
            if(this.numberSlide<1){
                this.numberSlide=7
            }
            else{
          this.numberSlide--
        }
        },
    },
  

}
</script>

<style>

</style>