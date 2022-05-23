<template>
  <div class="baseWorkCardBlock">
    <div class="baseWorkCardImg">
      <img
        src="https://eurabota.com/uploads/photo_1483349982.jpg"
        alt="auto-repair"
        width="432"
        height="375"
      />
    </div>
    <div class="baseWorkCardDescription">
      <h3 class="baseWorkCardName">Ivav Ivanov</h3>
      <p><span>Специализация:</span> рихтовщик, автомаляр</p>
      <p>
        <span>О себе:</span> Нормально рихтую. Опыт работы в этой сфере 20 лет.
      </p>
      <p class="baseWorkCardBrands">Opel, VW, SEAT</p>
      <p><span>График работы:</span> Пн-Пт с 9.00 до 18.00</p>
      <base-green-button class="btn-simpleButton">ПРЕДЛОЖИТЬ РАБОТУ</base-green-button>
    </div>
    <div class="geoLocation">
      <div class="geoIcon">
        <img src="@/assets/images/location.png" alt="location">
      </div>
      <p class="geo">Boston</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.baseWorkCardBlock {
  display: flex;
  width: 1181px;
  left: 113px;
  margin: 40px auto; /* 0 auto */
  background: #f9f9f9;
  box-shadow: -2px 2px 4px 4px rgba(0, 0, 0, 0.05);
}
.baseWorkCardImg {
  width: 432px;
  /* height: 375px; */
  left: 113px;
  background-color: aqua;
}
.baseWorkCardDescription {
  padding: 20px 40px;
}

.baseWorkCardName {
  font-weight: 600;
  font-size: 30px;
  color: #37a000;
}

.baseWorkCardDescription p span {
  font-weight: 600;
  font-size: 22px;
  color: #000000;
}

.baseWorkCardDescription p {
  font-weight: 600;
  font-size: 22px;
  color: #707070;
}

.baseWorkCardDescription .baseWorkCardBrands {
  font-weight: 600;
  font-size: 22px;
  color: #1400ff;
}
.geoLocation {
  display: flex;
  margin: 15px 22px;
  font-weight: 600;
  font-size: 26px;
  color: #000000;
}

.geo {
  margin-left: 5px;
}
</style>