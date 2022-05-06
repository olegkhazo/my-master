<template>
  <input type="text" class="baseRegistrationInput" />
</template>

<script>
export default {
  name: "base-registration-input",
};
</script>

<style scoped>
.baseRegistrationInput {
  outline: none;
  padding-left: 15px;
  font-size: 16px;
  width: 300px;
  height: 47px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
}

.baseRegistrationInput:hover {
  border: 1px solid #339101;
}

.baseRegistrationInput:focus {
  border: 2px solid #339101;
}

.baseRegistrationInput::placeholder {
  font-size: 16px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.85);
}

@media (max-width: 378px) {
  .baseRegistrationInput {
    padding-left: 10px;
    font-size: 16px;
    width: 220px;
    height: 37px;
  }
}
</style>