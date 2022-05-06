<template>
<the-header></the-header>
        <div class="firstMasterBlock">
        <div class="container">
            <div class="firstMasterBlockInfo">
                <h2>Присоединяйся к крупнейшей бирже автоуслуг</h2>
                <p>Получите доступ к более <span>300,000</span> клиентов.
                    Вы платите только микро комиссию от выполненных вами услуг.
                    “Твой Мастер” предоставляет дополнительный сервис для ваших клиентов. Узнайте больше про возможности
                    сервиса.</p>
                <ul>
                    <li>
                        <base-green-button @click="$router.push('/registration')">Создать аккаунт</base-green-button>
                    </li>
                    <li>
                        <base-white-button class="orderCall">Заказать звонок</base-white-button>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="advantages">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 advantegesItems">
                    <img src="../assets/images/phoneCall.png" alt="">
                    <h3>Больший поток клиентов</h3>
                    <p>Просто зарегестрируйтесь и начните общение с новыми клиентами</p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 advantegesItems">
                    <img src="../assets/images/money.png" alt="">
                    <h3>$230 средний чек</h3>
                    <p>Это ваш самый выгодный способ привлечения клиентов</p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 advantegesItems">
                    <img src="../assets/images/userLove.png" alt="">
                    <h3>Преданность клиентов</h3>
                    <p>85% клиентов на бирже продолжают сотрудничество с мастером окозавшим услугу высокого качества</p>
                </div>
            </div>
        </div>
    </div>


    <div class="callToAction">
        <div class="container">
            <base-green-button @click="$router.push('/registration')">Создать аккаунт</base-green-button>
        </div>
    </div>


    <div class="howItWorkBlock">
        <div class="container">
            <h3>Как работает “ТвойМастер”?</h3>
            <div class="container px-4">
                <div class="row g-5">
                    <div class="col-xl-3 col-lg-6 col-md-6 firstHowItWorkBlock">
                        <div class="p-4 border bg-light firstHowItWorkBlock">
                            <h4>Размещение</h4>
                            <p>Клиенты размещают требуемые работы для своих автомобилей </p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="p-4 border bg-light">
                            <h4>Заявка</h4>
                            <p>Дождитесь предложения или подайте заявку на интересующую вас работу</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="p-4 border bg-light">
                            <h4>Запись</h4>
                            <p>Уточните детали работы и запишите клиента на свободную дату.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="p-4 border bg-light">
                            <h4>Отзыв</h4>
                            <p>Получите отличный отзыв и повысьте доверие к своему профилю еще больше</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="ourPrevelagesBlock">
        <div class="container">
            <h3>Как мы можем быть полезны вашему бизнесу?</h3>
            <p class="prevelagesDescription">Мы хотим не только помочь найти вам клиентов, но нам важно выстроить для
                вас новый постоянный источник поступления работы.</p>
            <div class="container px-4">
                <div class="row g-5">
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="p-4">
                            <h4>Новые клиенты</h4>
                            <img src="../assets/images/scredriver.png" alt="">
                            <p>Подавайтесь на любое количество заявок от сотен клиентов в вашем городе</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="p-4">
                            <h4>Станьте узнаваемыми</h4>
                            <img src="../assets/images/loc.png" alt="">
                            <p>Ваш профиль это отличный способ претставить свои услуги в интернете</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="p-4">
                            <h4>Управляйте графиком</h4>
                            <img src="../assets/images/clock.png" alt="">
                            <p>Записывайте ваших клиентов на те даты, которые вам удобны, прямо в чате приложения</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="p-4">
                            <h4>Сарафанное радио</h4>
                            <img src="../assets/images/reletions.png" alt="">
                            <p>Довольные клиенты будут рекомендовать вас своим друзьям и вас будет очень просто найти
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="partnerRevievsBlock">
        <div class="container">
            <h3>Что говорят наши партнёры</h3>
            <img src="../assets/images/revue.jpg" alt="">
            <p>“ТвойМастер” даёт около 45% всех заказов для нашего СТО. Мы просто отлично делаем нашу работу, а наши
                клиенты находят нас сами через площадку.
                Это удобно потому, что мы можем моментально дать консультацию в чате “ТвойМастер”</p>
            <p>Сергей Иванович, владелец СТО “Гайкокрут”</p>
            <a href="" >Посмотреть все отзывы</a>
            <br>
            <base-green-button @click="$router.push('/registration')" class="setJob">Присоединиться</base-green-button>
        </div>
    </div>


    <div class="takeYourValue">
        <div class="container">
            <h2>
                Станьте партнёром уже сегодня
            </h2>
            <base-green-button @click="$router.push('/registration')">Создать аккаунт</base-green-button>
        </div>
    </div>
<the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';


export default {
    components: {
        TheHeader,
        TheFooter,
    }
}
</script>

<style scoped>
.firstMasterBlock {
    height: 699px;
    background-image: url(../assets/images/masterPage.png);
    background-size: cover;
    padding-top: 128px;
}

.firstMasterBlockInfo {
    width: 880px;
}

.firstMasterBlockInfo h2 {
    color: #FFFFFF;
    font-size: 50px;
    font-weight: bold;
}

.firstMasterBlockInfo p {
    font-size: 24px;
    margin-top: 17px;
    margin-bottom: 40px;
    font-weight: 400;
    color: #FFFFFF;
}

.firstMasterBlockInfo span {
    font-weight: bold;
    color: #3DE6B3;
}

.firstMasterBlockInfo ul {
    padding: 0;
}

.firstMasterBlockInfo ul li {
    display: inline-block;
}

.firstMasterBlock .setJob {
    background-color: #37A000;
    border-radius: 6px;
    font-size: 24px;
    color: #FFFFFF;
    border: none;
    padding: 12px 53px 13px 52px;
}

.firstMasterBlock .howItWork {
    border-radius: 6px;
    font-size: 24px;
    background: #FFFFFF;
    color: #37A000;
    border: none;
    padding: 12px 53px 13px 52px;
    margin-left: 55px;
}

@media (max-width: 1035px) {
    .firstMasterBlockInfo h2 {
        font-size: 45px;
    }
    .firstMasterBlockInfo p {
        font-size: 20px;
    }
    .firstMasterBlock .setJob {
        font-size: 22px;
        padding: 12px 25px 13px 25px;
    }
    .firstMasterBlock .howItWork {
        font-size: 22px;
        padding: 12px 25px 13px 25px;
        margin-left: 20px;
    }
    .firstMasterBlockInfo {
        width: 100%;
    }
}

@media (max-width: 568px) {
    .firstMasterBlock {
        height: 310px;
        padding-top: 45px;
    }
    .firstMasterBlock {
        text-align: center;
    }
    .firstMasterBlockInfo {
        width: 100% !important;
    }
    .firstMasterBlockInfo h2 {
        font-size: 20px;
    }
    .firstMasterBlockInfo p {
        font-size: 12px;
    }
    .firstMasterBlock .setJob {
        font-size: 12px;
        padding: 7px 17px 7px 17px;
    }
    .firstMasterBlock .howItWork {
        font-size: 12px;
        padding: 7px 17px 7px 17px;
        margin-left: 15px;
    }
    .firstMasterBlockInfo {
        width: 625px;
    }
}

@media (max-width: 357px) {
    .firstMasterBlock {
        height: 340px;
        padding-top: 35px;
    }
    .firstMasterBlock .setJob {
        font-size: 12px;
        padding: 7px 10px 7px 10px;
    }
    .firstMasterBlock .howItWork {
        font-size: 12px;
        padding: 7px 10px 7px 10px;
        margin-left: 5px;
    }
}


/* advantages */

.advantages {
    height: 386px;
    padding-top: 55px;
}

.advantegesItems {
    text-align: center;
}

.advantegesItems img {
    width: 80px;
    height: 80px;
    margin-bottom: 23px;
}

.advantages h3 {
    font-weight: 600;
    font-size: 24px;
    padding-top: 13px;
}

.advantages p {
    font-weight: 300;
    font-size: 20px;
}

@media (max-width: 1200px) {
    .advantages {
        height: 415px;
    }
}

@media (max-width: 1035px) {
    .advantages {
        height: 386px;
    }
    .advantages h3 {
        font-size: 16px;
        padding-bottom: 22px;
    }
    .advantages p {
        font-size: 15px;
    }
}

@media (max-width: 762px) {
    .advantages {
        height: 870px;
    }
    .advantages {
        padding-top: 25px;
    }
    .advantegesItems img {
        margin-top: 45px;
        margin-bottom: 10px;
    }
    .advantages h3 {
        padding-bottom: 13px;
    }
}


/* callToAction */

.callToAction {
    padding: 80px 0 80px 0;
    background-color: #F9F9F9;
    text-align: center;
}

.callToAction .setJob {
    background-color: #37A000;
    margin-top: 30px;
    border-radius: 6px;
    font-size: 24px;
    color: #FFFFFF;
    border: none;
    padding: 12px 53px 13px 52px;
}

@media (max-width: 400px) {
    .callToAction .setJob {
        padding: 12px 23px 13px 23px;
        font-size: 20px;
    }
}


/* howItWorkBlock */

.howItWorkBlock {
    min-height: 437px;
    padding-top: 50px;
}

.howItWorkBlock h3 {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 39px;
}

.howItWorkBlock .bg-light {
    width: 254px !important;
    height: 245px;
    background: #F2F2F2;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
}

.howItWorkBlock .bg-light h4 {
    font-weight: 600;
    font-size: 30px;
}

.howItWorkBlock .bg-light p {
    font-weight: normal;
    font-size: 20px;
}

.firstHowItWorkBlock .bg-light {
    background-color: #0EAFE6 !important;
}

.firstHowItWorkBlock h4,
.firstHowItWorkBlock p {
    color: #FFFFFF;
}

@media (max-width: 1199px) {
    .howItWorkBlock {
        min-height: 747px;
    }
    .howItWorkBlock .bg-light {
        width: auto !important;
    }
}

@media (max-width: 768px) {
    .howItWorkBlock .bg-light {
        height: 190px;
    }
    .howItWorkBlock h3 {
        font-size: 30px;
    }
    .howItWorkBlock .bg-light h4 {
        font-size: 25px;
    }
    .howItWorkBlock {
        min-height: 1100px;
    }
}

@media (max-width: 478px) {
    .howItWorkBlock h3 {
        margin-left: 30px;
        font-size: 28px;
    }
    .howItWorkBlock .bg-light p {
        font-size: 16px;
    }
    .howItWorkBlock {
        min-height: 1120px;
    }
}


/* ourPrevelagesBlock */

.ourPrevelagesBlock {
    min-height: 622px;
    padding-top: 48px;
}

.ourPrevelagesBlock h3 {
    font-weight: 500;
    font-size: 30px;
}

.prevelagesDescription {
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 47px;
    width: 70%;
}

.ourPrevelagesBlock .p-4 {
    text-align: center;
}

.ourPrevelagesBlock .p-4 img {
    margin-top: 10px;
    width: 160px;
    height: 133px;
}

.ourPrevelagesBlock .p-4 h4 {
    font-weight: 600;
    font-size: 18px;
}

.ourPrevelagesBlock .p-4 p {
    font-weight: 300;
    font-size: 20px;
}

@media (max-width: 1200px) {
    .ourPrevelagesBlock {
        min-height: 880px;
    }
    .prevelagesDescription {
        font-size: 16px;
    }
    .ourPrevelagesBlock .p-4 img {
        margin-top: 10px;
        margin-bottom: 26px;
        width: 140px;
        height: 117px;
    }
    .ourPrevelagesBlock .p-4 h4 {
        font-size: 16px;
    }
    .ourPrevelagesBlock .p-4 p {
        font-weight: 300;
        font-size: 16px;
    }
}

@media (max-width: 991px) {
    .ourPrevelagesBlock {
        min-height: 990px;
    }
}

@media (max-width: 767px) {
    .ourPrevelagesBlock {
        min-height: 1630px;
    }
}

@media (max-width: 520px) {
    .ourPrevelagesBlock {
        min-height: 1650px;
    }
    .prevelagesDescription {
        margin-left: 20px;
    }
    .ourPrevelagesBlock h3 {
        margin-left: 20px;
        font-size: 20px;
        font-weight: bold;
    }
}

@media (max-width: 435px) {
    .ourPrevelagesBlock {
        min-height: 1740px;
    }
}


/* partnerRevievsBlock */

.partnerRevievsBlock {
    min-height: 744px;
    text-align: center;
    background-color: #F9F9F9;
    padding-top: 45px;
}

.partnerRevievsBlock .container {
    text-align: center;
}

.partnerRevievsBlock .container h3 {
    font-weight: 500;
    font-size: 40px;
}

.partnerRevievsBlock .container :nth-child(3) {
    font-weight: normal;
    font-size: 28px;
}

.partnerRevievsBlock .container img {
    border-radius: 50%;
    width: 90px;
    height: 98.18px;
    margin: 38px 0 41px 0;
}

.partnerRevievsBlock .container :nth-child(4) {
    font-weight: 600;
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.partnerRevievsBlock .container a {
    font-weight: normal;
    font-size: 14px;
    color: #000000;
}

.setJob {
    margin-top: 47px;
}

@media (max-width: 991px) {
    .partnerRevievsBlock {
        min-height: 831px;
    }
}

@media (max-width: 771px) {
    .partnerRevievsBlock {
        min-height: 690px;
    }
    .partnerRevievsBlock .container :nth-child(3) {
        font-size: 20px;
    }
    .partnerRevievsBlock .container :nth-child(4) {
        font-size: 14px;
    }
    .partnerRevievsBlock .container .setJob {
        font-size: 22px;
        padding: 8px 23px 8px 23px;
    }
}

@media (max-width: 767px) {
    .partnerRevievsBlock {
        min-height: 790px;
    }
}

@media (max-width: 500px) {
    .partnerRevievsBlock {
        min-height: 675px;
    }
    .partnerRevievsBlock .container h3 {
        font-size: 20px;
    }
    .partnerRevievsBlock .container :nth-child(3) {
        font-size: 16px;
    }
}

@media (max-width: 392px) {
    .partnerRevievsBlock {
        min-height: 710px;
    }
}

@media (max-width: 344px) {
    .partnerRevievsBlock {
        min-height: 760px;
    }
}


/* registrationBlock */

.registrationBlock {
    max-height: 1024px;
}

.registrationBlock form {
    text-align: center;
    width: 476px;
    height: 530px;
    margin: 114px auto;
    box-shadow: 0px 0px 51px rgba(0, 8, 188, 0.08);
}

.registrationBlock form input:not(input[type="radio"]),
select,
hr {
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
    background-color: #37A000 !important;
    border-color: #6FDA44 !important;
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

.registrationBlock form input[value="Зарегестрироваться"]+br+a {
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
        margin-left: 25px;
    }
    .registrationBlock form h1 {
        font-size: 25px;
    }
    .formPolicy {
        font-size: 10px;
    }
}

.formButtons2 {
    text-align: center;
    margin-top: 60px;
}

.formButtons2 input {
    display: inline-block;
    width: 314px;
    height: 54px;
    border: 2px solid;
    border-radius: 30px;
    font-weight: 600;
}

.formButtons2 input:first-child {
    margin-right: 73px;
    background: #339101;
    border: none;
    color: white;
}

.formButtons2 input:last-child {
    border-color: #339101;
    color: #000000;
    background-color: white;
}

.cityChoice {
    margin: 70px 0 0 0;
    font-size: 32px;
    font-weight: normal;
}

.cityJob {
    border: 2px solid #37A000;
    width: 335px;
    height: 48px;
    border-radius: 5px;
    color: rgba(0, 0, 0, 1);
    font-size: 22px;
    appearance: none;
    background: url(../assets/images/selectArrov.png);
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
    border: 1px solid #37A000;
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
    border-bottom: 1px solid #37A000;
}

.agremant3 {
    font-size: 14px;
    margin-top: 37px;
    margin-bottom: -20px;
}

.agremant3 span {
    color: #339101;
}

img[src="../assets/images/thumb-up.png"] {
    margin: 89px auto 67px !important;
    display: block;
}

.jobApplicationBlock4 p:not(.progressBlock) {
    text-align: center;
}

.finishForm {
    font-size: 35px;
    font-weight: normal;
    line-height: 1.2;
}

.finishForm+p {
    font-size: 20px;
    margin-top: 48px;
}

.finishForm+p span {
    color: #339101;
}

.jobApplicationBlock4 .formButtons2 input {
    margin: 125px auto;
    display: block;
    border: 2px solid #37A000;
    border-radius: 30px;
    color: rgba(0, 0, 0, 1);
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    width: 314px;
    height: 54px;
}

/* TakeYourValue */

.takeYourValue {
  height: 573px;
  text-align: center;
  height: 446px;
  background-image: url(../assets/images/bmw.png);
  background-size: cover;
  padding-top: 170px;
}

.takeYourValue h2 {
  font-size: 60px;
  color: #FFFFFF;
  margin-bottom: 43px;
}

.takeYourValue .takeYourValueBtn {
  width: 252px;
  height: 48px;
  background: #37A000;
  border-radius: 6px;
  font-size: 19px;
}

@media (max-width: 1190px) {
  .takeYourValue {
    padding-top: 110px;
  }
}

@media (max-width: 980px) {
  .takeYourValue {
    padding-top: 110px;
  }
  .takeYourValue h2 {
    font-size: 50px;
    color: #FFFFFF;
    margin-bottom: 43px;
  }
}

@media (max-width: 560px) {
  .takeYourValue {
    padding-top: 55px;
    height: 215px;
  }
  .takeYourValue h2 {
    font-size: 25px;
    margin-bottom: 23px;
  }
}

.orderCall {
    margin-left: 40px;
}
</style>