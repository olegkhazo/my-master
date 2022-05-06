<template>
  <div class="form-check form-check-inline checkBox2Step">
    <input class="base-check" type="checkbox" />
    <label class="form-base-check" for="inlineCheckbox1">Нужна эвакуация</label>
  </div>
</template>

<script>
export default {
  name: "base-check",
};
</script>

<style scoped>
.base-check {
  border-radius: 0.25em;
  width: 24px;
  height: 24px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.form-base-check {
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  margin-left: 13px;
  margin-top: -2px;
  position: absolute;
}

.base-check:checked {
  background-color: #37a000 !important;
}

</style>