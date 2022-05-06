<template>
  <button class="baseLoginButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-login-button",
};
</script>

<style scoped>
.baseLoginButton {
  background-color: #37a000;
  border-radius: 6px;
  font-size: 17px;
  color: #ffffff;
  border: none;
  padding: 3px 20px;
}

@media (max-width: 991px) {
  .baseLoginButton {
    font-size: 14px;
    padding: 10px 18px;
  }
}

@media (max-width: 378px) {
  .baseLoginButton {
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>