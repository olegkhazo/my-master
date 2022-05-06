<template>
  <the-header></the-header>
  <div class="jobApplicationBlock">
    <div class="container">
      <form action="">
        <p class="progressBlock">Заявка<span> Шаг 1/3</span></p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p class="typeAuto">Тип транспорта</p>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-secondary" for="option1"
          ><img src="../../assets/images/car1.png" alt="" /> легковое
          авто</label
        >

        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option2"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="option2"
          ><img src="../../assets/images/truck1.png" alt="" /> коммерческое
          авто</label
        >
        <p class="autoParametres">Выберите параметры автомобиля</p>
        <base-green-select
          v-model="selectedSort"
          v-bind:title="selectTitle.marka"
          :options="markaOptions"
        />
        <br />
        <br />
        <base-green-select
          v-model="selectedSort"
          v-bind:title="selectTitle.model"
          :options="modelOptions"
        />
        <br />
        <br />
        <base-green-select
          v-model="selectedSort"
          v-bind:title="selectTitle.year"
          :options="yearOptions"
        />
        <br />
        <base-oval-button
          class="jobApplicationButton1"
          @click="$router.push('/order-second-step')"
          >ПРОДОЛЖИТЬ</base-oval-button
        >
      </form>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      selectedSort: "",
      selectTitle: {
        marka: "Выберите марку",
        model: "Выберите модель",
        year: "Выберите год",
      },
      markaOptions: [
        { value: "toyota", name: "toyota" },
        { value: "bmw", name: "bmw" },
        { value: "audi", name: "audi" },
        { value: "subaru", name: "subaru" },
      ],
      modelOptions: [
        { value: "toyota", name: "toyota" },
        { value: "bmw", name: "bmw" },
        { value: "audi", name: "audi" },
        { value: "subaru", name: "subaru" },
      ],
      yearOptions: [
        { value: 2022, name: 2022 },
        { value: 2021, name: 2021 },
        { value: 2020, name: 2020 },
        { value: 2019, name: 2019 },
      ],
    };
  },
};
</script>

<style  scoped>
.jobApplicationBlock {
  max-height: 1024px;
  background-color: #ececec;
  padding-top: 70px;
  padding-bottom: 70px;
}

.jobApplicationBlock form {
  width: 1151px;
  height: 884px;
  margin: 20px auto;
  background-color: white;
  padding: 46px 85px 0 91px;
}

.jobApplicationBlock form ul {
  padding-left: 0;
}

.jobApplicationBlock form ul li {
  display: inline-block;
}

.progressBlock {
  font-size: 38px;
  font-weight: normal;
  color: #000000;
}

.progressBlock span {
  color: rgba(0, 0, 0, 0.6);
}

.jobApplicationBlock form ul li:first-child {
  border-radius: 50%;
  background: #37a000;
  height: 22px;
  width: 22px;
  margin-left: 0;
}

.jobApplicationBlock form ul li {
  border-radius: 50%;
  border: 2px solid #37a000;
  background: white;
  height: 22px;
  width: 22px;
  margin-left: 20px;
}

.jobApplicationBlock form .typeAuto {
  font-size: 32px;
  font-weight: normal;
  margin-top: 70px;
}

label[for="option2"] {
  margin-left: 40px;
}

.btn-secondary {
  color: #37a000 !important;
  background-color: #ffffff !important;
  border-color: #37a000 !important;
}

.btn-check:active + .btn-secondary,
.btn-check:checked + .btn-secondary,
.btn-check:focus + .btn-secondary {
  background-color: #e5fbdd !important;
  box-shadow: none !important;
}

.jobApplicationBlock form .autoParametres {
  font-size: 32px;
  font-weight: normal;
  margin-top: 42px;
}

.jobApplicationBlock form img {
  margin-right: 10px;
}

.jobApplicationButton1 {
  margin: 125px auto;
}

@media (max-width: 1400px) {
  .jobApplicationBlock form {
    width: 1051px;
  }
}

@media (max-width: 1200px) {
  .jobApplicationBlock form {
    width: 851px;
  }
}

@media (max-width: 992px) {
  .jobApplicationBlock form {
    width: 616px;
    text-align: center;
  }
  .progressBlock {
    font-size: 32px;
  }
  .jobApplicationBlock form .typeAuto {
    font-size: 28px;
    margin-top: 60px;
  }
  .btn-secondary {
    width: 335px;
  }
  label[for="option2"] {
    margin-left: 0;
    margin-top: 10px;
  }
  .jobApplicationBlock form .autoParametres {
    font-size: 28px;
    margin-top: 32px;
  }
 
  .jobApplicationButton1 {
    margin-top: 85px;
    display: block;
    border: 2px solid #37a000;
    border-radius: 30px;
    color: rgba(0, 0, 0, 1);
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    width: 314px;
    height: 54px;
  }
}

@media (max-width: 768px) {
  .jobApplicationBlock form {
    width: 516px;
    text-align: center;
  }
}

@media (max-width: 552px) {
  .jobApplicationBlock form {
    width: 396px;
    text-align: center;
    padding: 46px 5px 0 10px;
  }
}

@media (max-width: 429px) {
  .jobApplicationBlock form {
    width: 296px;
    height: 720px;
  }
  .progressBlock {
    font-size: 23px;
  }
  .jobApplicationBlock form .typeAuto {
    font-size: 18px;
    margin-top: 40px;
  }
  .btn-secondary {
    width: 256px;
  }
  .jobApplicationBlock form .autoParametres {
    font-size: 18px;
    margin-top: 24px;
  }
  
  .jobApplicationButton1 {
    margin-top: 38px;
    font-size: 18px;
    font-weight: 600;
    width: 190px;
    height: 49px;
  }
}
</style>