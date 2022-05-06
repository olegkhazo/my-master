<template>
  <button class="baseOvalButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-oval-button",
};
</script>

<style scoped>
.baseOvalButton {
  display: block;
  padding: 12px 25px;
  background: #ffffff;
  border: 2px solid #37a000;
  border-radius: 30px;
  font-weight: 600;
  font-size: 20px;
}

@media (max-width: 991px) {
  .baseOvalButton {
    font-size: 14px;
    padding: 10px 18px;
  }
}

@media (max-width: 378px) {
  .baseOvalButton {
    font-size: 12px;
    padding: 8px 16px;
  }
}

</style>