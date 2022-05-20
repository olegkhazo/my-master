<template>
  <the-header></the-header>
  <div class="registrationBlock">
    <div class="container">
      <form 
      action="" 
      name="userReg"
      @submit.prevent="submitHandler"
      >
        <h1>Войти</h1>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          v-model="email"
          :class="{invalid: v$.email.$dirty && v$.email.$invalid }"
        />
        <small v-if="v$.email.$dirty && !v$.email.required.$response">Введите имейл</small>
        <small v-else-if="v$.email.$dirty && v$.email.$error">Введите корректный имейл</small>
        <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Пароль" 
        v-model="password"
        :class="{invalid: v$.password.$dirty && v$.password.$invalid }"

        />
        <small v-if="v$.password.$dirty && !v$.password.required.$response">Введите пароль</small>
        <small v-else-if="v$.password.$dirty && v$.password.$error">Введите корректный пароль. Не меньше {{ v$.password.minLength.$params.min }} символов</small>
        <br />
        <base-green-button>Войти</base-green-button>
        <br /> <br />
        <router-link to="/registration" class="haveAnAccount">Нет аккаунта? Зарегестрируйтесь.</router-link>
        <hr />
      </form>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import {useVuelidate} from '@vuelidate/core';
import { email, required, minLength } from '@vuelidate/validators';

export default {
  name: 'login',
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      email: '',
      password: '',
      passwordLength: 8
    }
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(this.passwordLength) }
    }
  },
  methods: {
    submitHandler() {
      if(this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      this.$router.push('/admin-panel');
    }
  }
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


.registrationBlock form input[value="Войти"] {
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