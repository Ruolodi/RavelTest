<template>
  <div class="container" id="head">
    <div class="lineContainer">
      <div class="buttonURL" v-scroll-to="'#questions'"><a>Вопросы</a></div>
      <div class="buttonURL" v-scroll-to="'#photos'"><a>Отзывы</a></div>
      <div class="buttonURL" v-scroll-to="'#callMe'"><a>Контакты</a></div>
    </div>

    <div class="card">
      <ul class="list">
        <li>Ремонт Apple Нижний Новгород</li>
        <li>Приведем в работоспособность при вас за 20 мин</li>
        <li>Ремонт за 15-30 минут от 999 рублей!</li>
        <li>100% Оригинальные комплектующие</li>
        <li>Гарантия качества или вернем деньги!</li>
      </ul>
      <div class="buttonsHead">
        <button class="btn" v-scroll-to="'#callMe'">+7 (831) 410-53-10</button>
        <button class="btn" v-scroll-to="'#callMe'">+7 (910) 790-53-10</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
