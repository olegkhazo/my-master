<template>
  <div class="jobApplicationBlock4">
    <div class="container">
      <form action="">
        <p class="progressBlock">Заявка<span> Шаг 3/3</span></p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <img src="../../assets/images/thumb-up.png" alt="" />
        <p class="finishForm">
          Поздравляем, ваша заявка успешно содана! Вы начнете получать
          предложения от сервисов и мастеров совсем скоро
        </p>
        <p>
          Вы можете управлять своими заявками на ремонт из
          <span>личного кабинета</span>
        </p>
        <div class="formButtons2">
          <base-oval-button class="formButtons2BtwOwal" @click="$router.push('/')"
            >НА ГЛАВНУЮ</base-oval-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseOvalButton from "@/components/UI/BaseOvalButton.vue";
export default {
  components: { BaseOvalButton },
};
</script>

<style scoped>
.jobApplicationBlock4 {
  background-color: #ececec;
  padding-top: 70px;
  padding-bottom: 70px;
}

.jobApplicationBlock4 form {
  width: 1151px;
  margin: 20px auto;
  background-color: white;
  padding: 46px 85px 5px 91px;
}

form img {
  margin: 140px auto 67px;
  display: block;
}

.jobApplicationBlock4 .progressBlock {
  float: left;
  font-size: 38px;
  font-weight: normal;
  color: #000000;
}

.jobApplicationBlock4 .progressBlock span {
  color: rgba(0, 0, 0, 0.6);
}

.jobApplicationBlock4 p:not(.progressBlock) {
  text-align: center;
}

.finishForm {
  font-size: 35px;
  font-weight: normal;
  line-height: 1.2;
}

.finishForm + p {
  font-size: 20px;
  margin-top: 48px;
}

.finishForm + p span {
  color: #339101;
}

.formButtons2BtwOwal {
  margin: 125px auto;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
}
</style>