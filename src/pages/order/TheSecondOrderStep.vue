<template>
  <the-header></the-header>
  <div class="jobApplicationBlock2">
    <div class="container">
      <form action="">
        <p class="progressBlock">Заявка<span> Шаг 2/3</span></p>
        <span class="currentCar">Subaru Forester, 2016</span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p class="describeJob">Опишите работы по вашему автомобилю</p>
        <textarea
          name=""
          id=""
          cols="80"
          rows="5"
          placeholder="Покраска капота, покраска переднего бампера"
        ></textarea>
        <br />
        <label for="photo">Загрузите фото подтверждения</label>
        <br />
        <input class="fileUploader" type="file" id="photo" title=" " />
        <p class="moreInfoFirst">Дополнительная информация</p>
        <p class="moreInfoSecond">
          Укажите больше информации, это поможет точнее оценить ремонт авто
        </p>
        <input type="text" placeholder="номер авто" />
        <input type="text" placeholder="VIN - код автомобиля" />
        <br />
        <div class="form-check form-check-inline checkBox2Step">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="avacuation"
          />
          <label class="form-check-label" for="inlineCheckbox1"
            >Нужна эвакуация</label
          >
        </div>
        <div class="form-check form-check-inline checkBox2Step">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="details"
          />
          <label class="form-check-label" for="inlineCheckbox2"
            >Свои запчасти</label
          >
        </div>

        <div class="formButtons2">
            <base-green-button class="formButtons2Btn" @click="$router.push('/order-first-step')">ВЕРНУТЬСЯ</base-green-button>
            <base-oval-button class="formButtons2BtnOwal" @click="$router.push('/order-third-step')">ПРОДОЛЖИТЬ</base-oval-button>
        </div>
      </form>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseOvalButton from '@/components/UI/BaseOvalButton.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    BaseOvalButton,
  },
};
</script>

<style scoped>

.jobApplicationBlock2 {
  /* min-height: 1024px; */
  background-color: #ececec;
  padding-top: 70px;
  padding-bottom: 70px;
}

.jobApplicationBlock2 form {
  width: 1151px;
  margin: 20px auto;
  background-color: white;
  padding: 46px 85px 56px 91px;
}

.jobApplicationBlock2 .progressBlock {
  float: left;
  font-size: 38px;
  font-weight: normal;
  color: #000000;
}

.jobApplicationBlock2 .progressBlock span {
  color: rgba(0, 0, 0, 0.6);
}

.jobApplicationBlock2 .currentCar {
  float: right;
  font-size: 25px;
}

.describeJob {
  font-size: 32px;
  margin-top: 115px;
}

.jobApplicationBlock2 textarea {
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 10px 0 0 20px;
}

.jobApplicationBlock2 textarea::placeholder {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
}

.jobApplicationBlock2 label[for="photo"] {
  margin-top: 15px;
  font-size: 25px;
  cursor: pointer;
  color: rgba(0, 0, 0, 1);
}

input[type="file"] {
  margin-top: 10px;
  cursor: pointer;
}

.moreInfoFirst {
  margin-top: 20px;
  font-size: 25px;
  color: rgba(0, 0, 0, 1);
}

.moreInfoSecond {
  margin-top: -15px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
}

.jobApplicationBlock2 form input[placeholder="номер авто"],
.jobApplicationBlock2 form input[placeholder="VIN - код автомобиля"] {
  margin-top: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  height: 52px;
  padding-left: 25px;
}

.jobApplicationBlock2 form input[placeholder="номер авто"]::placeholder,
.jobApplicationBlock2
  form
  input[placeholder="VIN - код автомобиля"]::placeholder {
  color: rgba(0, 0, 0, 0.6);
  font-size: 25px;
}

.jobApplicationBlock2 form input[placeholder="номер авто"] {
  width: 271px;
}

.jobApplicationBlock2 form input[placeholder="VIN - код автомобиля"] {
  width: 337px;
}

.checkBox2Step {
  margin-top: 25px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.6);
}

.form-check-input:checked {
  background-color: #37a000 !important;
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

@media (max-width: 1400px) {
  .jobApplicationBlock2 form {
    width: 1051px;
  }
}

@media (max-width: 1200px) {
  .jobApplicationBlock2 form {
    width: 851px;
  }

  .jobApplicationBlock2 textarea {
    width: 617px;
  }

  .formButtons2Btn {
    margin-right: 15px;
  }

  .jobApplicationBlock2 form input[placeholder="номер авто"] {
    width: 220px;
    margin-right: 20px;
  }

  .formButtons2Btn, 
  .formButtons2BtnOwal {
    width: 314px;
  }
}

@media (max-width: 992px) {
  .jobApplicationBlock2 form {
    width: 616px;
    height: 1225px;
    text-align: center;
  }

  .jobApplicationBlock2 .currentCar {
    float: none;
    display: inline-block;
    font-size: 18px;
  }

  .jobApplicationBlock2 .progressBlock {
    float: none;
    font-size: 38px;
    font-weight: normal;
    color: #000000;
  }

  .jobApplicationBlock2 .describeJob {
    font-size: 28px;
    margin-top: 60px;
  }

  .jobApplicationBlock2 textarea {
    width: 335px;
  }

  .jobApplicationBlock2 form input[placeholder="номер авто"] {
    width: 335px;
    margin-right: 0;
  }

  .jobApplicationBlock2 form input[placeholder="VIN - код автомобиля"] {
    width: 335px;
    margin-top: 17px;
  }

  .jobApplicationBlock2
    form
    input[placeholder="VIN - код автомобиля"]::placeholder,
  .jobApplicationBlock2 form input[placeholder="номер авто"]::placeholder {
    font-size: 20px;
  }

  .moreInfoFirst {
    margin-top: 35px;
    font-size: 28px;
  }

  .jobApplicationBlock2 label[for="photo"] {
    margin-top: 25px;
  }

  .jobApplicationBlock2 .checkBox2Step {
    float: left;
  }

  .jobApplicationBlock2 .form-check {
    padding-left: 3.5em;
  }

  .checkBox2Step {
    margin-top: 5px;
  }

  .checkBox2Step input[id="inlineCheckbox1"] {
    margin-top: 30px;
  }

  .checkBox2Step input[id="inlineCheckbox1"] + label {
    margin-top: 24px;
  }

  .formButtons2Btn {
    margin-right: 0px;
    margin-top: 60px;
  }

  .formButtons2BtnOwal {
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .jobApplicationBlock2 form {
    width: 516px;
    height: 1290px;
  }
}

@media (max-width: 553px) {
  .jobApplicationBlock2 form {
    width: 396px;
    height: 1280px;
    padding: 46px 5px 0 10px;
  }

  .jobApplicationBlock2 .progressBlock {
    font-size: 32px;
  }

  .jobApplicationBlock2 .describeJob {
    font-size: 28px;
    margin-top: 60px;
  }

  input[type="file"] {
    width: 277px;
  }
}

@media (max-width: 429px) {
  .jobApplicationBlock2 form {
    width: 296px;
    height: 1140px;
  }

  .jobApplicationBlock2 .progressBlock {
    font-size: 23px;
  }

  .jobApplicationBlock2 .describeJob {
    font-size: 18px;
    margin-top: 60px;
  }

  .jobApplicationBlock2 textarea,
  .jobApplicationBlock2 form input[placeholder="номер авто"],
  .jobApplicationBlock2 form input[placeholder="VIN - код автомобиля"] {
    width: 256px;
  }

  .jobApplicationBlock2 label[for="photo"] {
    font-size: 18px;
  }

  input[type="file"] {
    width: 219px;
  }

  .moreInfoFirst {
    font-size: 18px;
  }

  .moreInfoSecond {
    margin-top: -10px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  }

  .jobApplicationBlock2
    form
    input[placeholder="VIN - код автомобиля"]::placeholder,
  .jobApplicationBlock2 form input[placeholder="номер авто"]::placeholder {
    font-size: 16px;
  }

  .checkBox2Step {
    font-size: 18px;
  }

  .formButtons2Btn, 
  .formButtons2BtnOwal {
    width: 190px;
  }
}
</style>