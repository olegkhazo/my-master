<template>
  <div class="jobApplicationBlock3">
    <div class="container">
      <form action="">
        <span class="currentCar">Subaru Forester, 2016</span>
        <p class="progressBlock">Заявка<span> Шаг 3/3</span></p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p class="cityChoice">
          Выберите город в котором вы хотите получить услугу:
        </p>

        <select class="cityJob" name="city" id="">
          <option disabled selected>город</option>
          <option value="киев">киев</option>
          <option value="одесса">одесса</option>
          <option value="харьков">харьков</option>
          <option value="львов">львов</option>
        </select>
        <br />
        <p class="date">Желаемая дата ремонта</p>
        <label for="date"
          ><img src="../../assets/images/calendar.png" alt=""
        /></label>
        <input class="dateInput" id="date" type="date" placeholder="444" />
        <br />
        <p class="phoneNumber">
          Номер телефона для получения SMS уведомлений с предложениями
        </p>
        <p class="phoneNumber2">Бесплатная услуга для владельцев авто</p>
        <label for="tel"
          ><img src="../../assets/images/mobile-phone.png" alt=""
        /></label>
        <input id="tel" type="tel" />
        <p class="agremant3">
          Нажимая кнопку "Продолжить", вы подтверждаете свое согласие с
          <span>Пользовательским соглашением</span> и даёте
          <span>Согласие на обработку персональных данных.</span>
        </p>
        <div class="formButtons2">
          <base-green-button
            class="formButtons2Btn"
            @click="$router.push('/order-second-step')"
            >ВЕРНУТЬСЯ</base-green-button
          >
          <base-oval-button
            class="formButtons2BtnOwal"
            @click="$router.push('/order-final-step')"
            >ПРОДОЛЖИТЬ</base-oval-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseOvalButton from "@/components/UI/BaseOvalButton.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    BaseOvalButton,
  },
};
</script>

<style scoped>
.jobApplicationBlock3 {
  /* min-height: 1024px; */
  background-color: #ececec;
  padding-top: 70px;
  padding-bottom: 70px;
}

.jobApplicationBlock3 form {
  width: 1151px;
  margin: 20px auto;
  background-color: white;
  padding: 46px 85px 56px 91px;
}

.jobApplicationBlock3 .progressBlock {
  float: left;
  font-size: 38px;
  font-weight: normal;
  color: #000000;
}

.jobApplicationBlock3 .progressBlock span {
  color: rgba(0, 0, 0, 0.6);
}

.jobApplicationBlock3 .currentCar {
  float: right;
  font-size: 25px;
}

.formButtons2 {
  text-align: center;
  margin-top: 60px;
}

.formButtons2Btn,
.formButtons2BtnOwal {
  display: inline-block;
  border-radius: 30px;
  font-weight: 600;
}

.formButtons2Btn {
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 73px;
}

@media (max-width: 1200px) {
  .formButtons2Btn {
    margin-right: 15px;
  }

  .formButtons2Btn,
  .formButtons2BtnOwal {
    width: 314px;
  }
}

@media (max-width: 992px) {
  .formButtons2Btn {
    margin-right: 0px;
    margin-top: 60px;
  }

  .formButtons2BtnOwal {
    margin-top: 20px;
  }
}

@media (max-width: 429px) {
  .formButtons2Btn,
  .formButtons2BtnOwal {
    width: 190px;
  }
}

.cityChoice {
  margin: 100px 0 0 0;
  font-size: 32px;
  font-weight: normal;
}

.cityJob {
  border: 2px solid #37a000;
  width: 335px;
  height: 48px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 22px;
  appearance: none;
  background: url(../../assets/images/selectArrov.png);
  background-repeat: no-repeat;
  background-position: 94% 50%;
  margin: 26px 0 0 0;
}

.date {
  margin-top: 37px;
  font-size: 32px;
  font-weight: normal;
}

.dateInput {
  border: none;
  border-radius: 5px;
  border: 1px solid #37a000;
}

.dateInput:hover {
  cursor: pointer;
}

.phoneNumber {
  font-size: 26px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 47px;
}

.phoneNumber2 {
  margin-top: -18px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 23px;
}

input[type="tel"] {
  border: none;
  border-bottom: 1px solid #37a000;
}

.agremant3 {
  font-size: 14px;
  margin-top: 37px;
  margin-bottom: -20px;
}

.agremant3 span {
  color: #339101;
}

img[src="autoImg/thumb-up.png"] {
  margin: 89px auto 67px !important;
  display: block;
}

.jobApplicationBlock4 p:not(.progressBlock) {
  text-align: center;
}
</style>