<template>
      <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <h3><span>Твой</span>Мастер</h3>
          <a href="tel:+380631349272"><img src="../assets/images/phone-call.png" alt="">+38063 134 92 72</a>
          <ul class="footerFirst">
            <li>О нас</li>
            <li>Помощь</li>
            <li>Блог</li>
            <li>Пресса</li>
            <li>Связаться с нами</li>
          </ul>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 col-12">
          <p>Мы в социальных сетях</p>
          <ul class="footerImgBlock">
            <li><img src="../assets/images/linkedin.png" alt=""></li>
            <li><img src="../assets/images/facebook.png" alt=""></li>
            <li><img src="../assets/images/instagram.png" alt=""></li>
            <li><img src="../assets/images/twitter.png" alt=""></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
          <p>Вы мастер или СТО?</p>
          <base-oval-button @click="$router.push('/for-masters')">Узнать больше</base-oval-button>
        </div>
      </div>

      <div class="row lastFooterInfo g-3">
        <div class="col-lg-5 col-sm-12 col-12">© 2021 twoimaster.com.ua</div>
        <div class="col-lg-3 col-sm-12 col-12">Правовая информация</div>
        <div class="col-lg-4 col-sm-12 col-12">Политика использования файлов  cookie</div>
      </div>

    </div>
  </footer>
</template>

<script>
import BaseOvalButton from './UI/BaseOvalButton.vue'
export default {
  components: { BaseOvalButton },
    
}
</script>

<style scoped>
footer {
  min-height: 736px;
  background-color: #f5faff;
}

footer .container :first-child div {
  margin-top: 90px;
}

footer h3 {
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 38px;
}

footer h3 span {
  color: #6FDA44;
}

footer a[href="tel:+380631349272"] {
  color: #37A000;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
}

footer a img {
  margin-right: 8px;
  height: 22px;
  width: 22px;
}

footer ul {
  margin-top: 25px;
  padding-left: 0;
}

footer ul li {
  font-size: 20px;
  margin-top: 10px;
}

footer p {
  font-size: 25px;
  font-weight: 600;
}

footer .row :nth-child(2) ul li {
  display: inline-block;
  width: 60px;
  height: 60px;
  margin-right: 20px;
}

footer .row :nth-child(2) ul li img {
  width: 64px;
  height: 64px;
}

footer .lastFooterInfo {
  margin-top: 192px;
}

footer .lastFooterInfo div {
  font-size: 13px;
}

@media (max-width: 1225px) {
  footer {
    height: 476px;
  }
  footer h3 {
    font-size: 26px;
  }
  footer .lastFooterInfo {
    margin-top: 20px;
  }
  footer ul {
    margin-top: 15px;
    padding-left: 0;
  }
  footer h3 {
    margin-bottom: 15px;
  }
  footer a[href="tel:+380631349272"] {
    font-size: 20px;
  }
  footer p {
    font-size: 18px;
  }
  footer .howItWorksBtn {
    width: 187px;
    float: left;
    margin-top: 5px;
  }
  footer ul li {
    font-size: 18px;
    margin-top: 8px;
  }
  footer .row :nth-child(2) ul li {
    margin-right: -10px;
  }
  footer .row :nth-child(2) ul li img {
    width: 34px;
    height: 34px;
  }
}

@media (max-width: 768px) {
  footer {
    height: 850px;
  }
  footer h3 {
    font-size: 24px;
  }
  footer ul li {
    font-size: 16px;
  }
  footer .container :first-child div {
    margin-top: 40px;
  }
  footer .lastFooterInfo {
    margin-top: 45px;
  }
}
</style>