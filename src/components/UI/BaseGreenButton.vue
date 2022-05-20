<template>
  <button class="baseGreenButton" type="submit"> 
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-green-button",
};
</script>

<style scoped>
.baseGreenButton {
  background-color: #37a000;
  border-radius: 6px;
  font-size: 19px;
  color: #ffffff;
  border: none;
  padding: 12px 18px;
}


@media (max-width: 991px) {
  .baseGreenButton {
    font-size: 14px;
    padding: 10px 18px;
  }
}

@media (max-width: 378px) {
  .baseGreenButton {
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>