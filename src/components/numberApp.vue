<template>
  <div class="containterNumber" id="callMe">
      <ul>
          <li>Оставить заявку</li>
          <li>Мы вам перезвоним!</li>
      </ul>
      <form @submit.prevent="sendEmail">
      <input class="inputNumb" type="text" placeholder="Введите ваше имя*" name="name" v-model="name">
      <input class="inputNumb" id="phoneMessage" type="text" placeholder="8(XXX)-XXX-XX-XX*" maxlength="17" name="message" v-model="message">
      
      <ul>
        <li style="color:red; font-size: 20px;" v-show="emptyField">Одно или несколько полей пустые! Заполните все поля для отправки данных!</li>
      </ul>
      <button class="btn" type="submit" value="Send">Отправить</button>
      </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';


export default {
 
  data() {
    return {
      name:'',
      message: '',
      problem: '',
      emptyField: false,


    }
  },
  methods: {
    sendEmail(e) {
      try {

        if(this.name!==''&&this.message!==''){
        emailjs.sendForm('service_m1iia5n', 'template_32s9sab', e.target,
        'user_Uz4zxrRJpusHU6WVRqZsw', {
          name: this.name,
          message: this.message,
       
         
        })
         this.emptyField=false
         this.name = ''
         this.message = ''
       
         alert('Ваша заявка отправлена!')
            }
            else{
              this.emptyField=true
             
              
            }
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      
    },
  },
  computed:{
    
  },
    watch:{
       name(){
         if(this.name){
           this.emptyField=false
         }
      }, 
      message(){
          if(this.message){
           this.emptyField=false
         } 
        this.message=this.message.replace(/[^0-9]/g, '')
                    .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g, '$1 ($2)-$3-$4-$5') 
      },
  },
}
</script>

<style>

</style>