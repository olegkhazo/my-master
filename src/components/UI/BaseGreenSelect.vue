<template>
  <select class="greenSelect" v-model="modelValue" name="" id="" @change="changeOption">
    <option disabled value="">{{ title }}</option>
    <option 
    v-for="option in options" 
    :key="option.value" 
    :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "base-green-select",
  props: {
    modelValue: {
      type: String,
    },
    title: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.greenSelect {
  border: 2px solid #37a000;
  height: 48px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 22px;
  appearance: none;
  background: url("../../assets/images/selectArrov.png");
  background-repeat: no-repeat;
  background-position: 94% 50%;
  padding-left: 10px;
  padding-right: 60px;

}

@media (max-width: 429px) {
  .greenSelect {
    font-size: 16px;
  }
}

</style>