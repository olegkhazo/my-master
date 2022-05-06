<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-10 col-sm-8 col-7 logoBlock">
          <img src="../assets/images/menu.png" class="burger" alt="menu" />
          <p class="logo" @click="$router.push('/')"><span>Твой</span>Мастер</p>
        </div>
        <div class="col-6 col-lg-7">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <p class="nav-link active" @click="$router.push('/admin-panel')">
                Найти мастера
              </p>
            </li>
            <li class="nav-item">
              <a href="#howItWorkAnchor">
                <p class="nav-link">Как это работает</p>
              </a>
            </li>
            <li class="nav-item">
              <p class="nav-link" @click="$router.push('/for-masters')">Для мастеров</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-5 loginBlock">
          <base-login-button @click="$router.push('/registration')"
            >Войти</base-login-button
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #1d4354;
  height: 70px;
}

header .container {
  padding: 18px 0 18px 0;
}

.nav-item {
  margin: -6px 0 0 0;
  cursor: pointer;
}

header .container p {
  font-size: 18px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
}

.logoBlock li {
  display: inline-block;
}

.logoBlock img {
  display: none;
}

.logoBlock :nth-child(2) {
  margin-left: 10px;
}

header .container .logoBlock {
  float: left;
}

header .container .logo {
  cursor: pointer;
  font-weight: 500;
  font-size: 30px;
  margin-top: -8px;
}

header .container img {
  float: left;
  width: 25px;
  height: 25px;
}

header .container .logo span {
  color: #6fda44;
}

header .container .btn-success {
  width: 109px;
  height: 34px;
  background: #37a000;
  border-radius: 6px;
  font-size: 17px;
  padding-top: 3px;
}

header .row {
  width: inherit;
}

@media (max-width: 991px) {
  header {
    height: 43px;
  }
  header .container {
    padding: 4px 0 0 0;
  }
  header .container img {
    display: block;
    margin: 2px 0 0 5px;
  }
  header .container .col-6 {
    display: none;
  }
  header .container .btn-success {
    background: none;
    border: none;
    font-weight: 500;
    font-size: 16px;
    float: right;
  }
  header .container .logo {
    font-size: 25px;
    margin: -5px 0 0 35px;
  }
}

@media (max-width: 378px) {
  header .container .logo {
    font-size: 20px;
    margin: 0 0 0 35px;
  }
  header .container img {
    margin: 4px 0 0 5px;
  }
  header .container .btn-success {
    float: right;
  }
}
</style>