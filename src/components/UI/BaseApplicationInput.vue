<template>
  <input type="text" class="baseApplicationInput" />
</template>

<script>
export default {
  name: "base-application-input",
};
</script>

<style scoped>
.baseApplicationInput {
  outline: none;
  padding: 13px 14px 13px 14px;
  font-size: 16px;
  min-width: 271px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.baseApplicationInput:hover {
  border: 1px solid rgba(0, 0, 0, 0.6);
}

.baseApplicationInput:focus {
  border: 2px solid rgba(0, 0, 0, 0.6);
}

.baseApplicationInput::placeholder {
  font-size: 16px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.85);
}

@media (max-width: 378px) {
  .baseApplicationInput {
  }
}
</style>