<template>
    <div className="notificationsBody">
        <div className="notificationsIcon">
          <img src="../assets/images/wrench.png" alt="wrench">
        </div>
        <div className="notificationsDescription">
          <p>Мастер Василий начал работу по вашему контракту</p>
          <p><span>02.04.2022</span></p>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.notificationsBody {
    display: flex;
    justify-content: space-around;
    margin-bottom: 65px;
}

.notificationsIcon {
    display: flex;
    align-items: center;
}

.notificationsIcon img {
  margin-top: -10px;
}

.notificationsBlock p {
    font-weight: 500;
    font-size: 30px;
}

.notificationsBlock p span {
    font-weight: 500;
    font-size: 30px;
    color: #707070;
}
</style>