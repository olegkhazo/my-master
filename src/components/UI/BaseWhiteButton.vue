<template>
  <button class="baseWhiteButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-white-button",
};
</script>

<style scoped>
.baseWhiteButton {
  border-radius: 6px;
  font-size: 19px;
  background: #ffffff;
  color: #37a000;
  border: none;
  padding: 12px 18px;
}

@media (max-width: 991px) {
  .baseWhiteButton {
    font-size: 14px;
    padding: 10px 18px;
  }
}

@media (max-width: 378px) {
  .baseWhiteButton {
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>