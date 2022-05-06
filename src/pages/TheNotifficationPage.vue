<template>
  <div className="container">
    <div className="notificationsBlock">
      <h3>Уведомления</h3>
      <the-single-notiffication></the-single-notiffication>
      <the-single-notiffication></the-single-notiffication>
      <the-single-notiffication></the-single-notiffication>
    </div>
  </div>
</template>

<script>
import TheSingleNotiffication from '@/components/TheSingleNotiffication.vue';
export default {
  components: {TheSingleNotiffication}
};
</script>

<style scoped>
.notificationsBlock {
    margin-top: 100px;
}

.notificationsBlock h3 {
    font-weight: 500;
    margin-bottom: 100px;
    font-size: 40px;
    color: #000000;
}


</style>