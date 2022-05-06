<template>
  <the-header></the-header>
  <div class="registrationBlock">
    <div class="container">
      <form action="" name="userReg">
        <h1>Регистрация</h1>
        <input type="tel" name="phoneNumber" placeholder="Телефон" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <label for="client"
          ><input
            class="form-check-input"
            type="radio"
            name="status"
            id="client"
            value="client"
            checked
          /><span>Клиент</span></label
        >
        <label for="master"
          ><input
            class="form-check-input"
            type="radio"
            name="status"
            id="master"
            value="master"
          /><span>Индивидуальный мастер</span></label
        >
        <br />
        <label for="station"
          ><input
            class="form-check-input"
            type="radio"
            name="status"
            id="station"
            value="station"
          /><span>Автосервис</span></label
        >
        <br />
        <input
          type="text"
          name="companyName"
          placeholder="Имя/Название компании"
        />
        <br />
        <select name="city" id="">
          <option disabled selected>Город</option>
          <option value="kiev">Киев</option>
          <option value="lvov">Львов</option>
          <option value="kharkov">Харьков</option>
          <option value="odessa">Одесса</option>
        </select>
        <br />
        <input type="password" name="" id="" placeholder="Пароль" />
        <br />
        <input type="password" name="" id="" placeholder="Повторите пароль" />
        <br />
        <base-green-button>Зарегестрироваться</base-green-button>
        <br /> <br />
        <p class="haveAnAccount">Уже есть аккаунт?</p>
        <hr />
        <p class="formPolicy">
          Нажимая кнопку "Продолжить", вы подтверждаете свое согласие с
          <a href="">Пользовательским соглашением</a> и даёте
          <a href="">Согласие на обработку персональных данных.</a>
        </p>
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
};
</script>

<style scoped>
.registrationBlock {
  max-height: 1024px;
}

.registrationBlock form {
  text-align: center;
  width: 476px;
  padding: 30px 20px;
  margin: 114px auto;
  box-shadow: 0px 0px 51px rgba(0, 8, 188, 0.08);
}

.registrationBlock form input:not(input[type="radio"]),
select {
  width: 315px;
  height: 47px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding-left: 14px;
}

.registrationBlock form input:not(input[type="radio"]):hover {
  border-color: #339101;
}

.registrationBlock form input:not(input[type="radio"]):focus {
  border-color: #339101 !important;
}

.registrationBlock form input::placeholder {
  font-size: 16px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.85);
}

select {
  cursor: pointer;
}

.registrationBlock form h1 {
  font-size: 27px;
  font-weight: 600;
  padding-top: 27px;
  padding-bottom: 25px;
}

.registrationBlock form input[name="email"] {
  margin-top: 21px;
  margin-bottom: 5px;
}

.form-check-input {
  margin-right: 5px;
  cursor: pointer;
}

.form-check-input:checked {
  background-color: #37a000 !important;
  border-color: #6fda44 !important;
}

.form-check-input:focus {
  box-shadow: none !important;
}

.registrationBlock form label {
  float: left;
  margin-left: 85px;
  margin-top: 10px;
  cursor: pointer;
}

.registrationBlock form input[name="companyName"] {
  margin-top: 21px;
  margin-bottom: 21px;
}

.registrationBlock form input[placeholder="Пароль"] {
  margin-top: 21px;
  margin-bottom: 21px;
}

.registrationBlock form input[placeholder="Повторите пароль"] {
  margin-bottom: 37px;
}

.registrationBlock form input[value="Зарегестрироваться"] {
  background-color: #339101;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 21px;
  border: none !important;
}

.haveAnAccount {
  text-decoration: none;
  color: #339101;
  font-size: 18px;
  font-weight: 500;
}

form hr {
  margin: 24px auto;
}

.formPolicy {
  font-size: 12px;
  font-weight: 300;
}

.formPolicy a {
  text-decoration: none;
  color: #339101;
}

@media (max-width: 544px) {
  .registrationBlock form {
    width: 295px;
  }
  .registrationBlock form input:not(input[type="radio"]),
  select,
  hr {
    width: 267px;
  }
  .registrationBlock form label {
    margin-left: 0px;
  }
  .registrationBlock form h1 {
    font-size: 25px;
  }
  .formPolicy {
    font-size: 10px;
  }
}
</style>