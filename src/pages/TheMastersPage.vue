<template>
  <the-header></the-header>
  <div class="container">
    <div class="simpleFilterBlock">
      <p class="filter-p">Отфильтровать:</p>
      <div class="filters">
        <base-green-select
          v-model="selectedSort"
          v-bind:title="selectTitle.city"
          :options="cityOptions"
        />
        <base-green-select
          v-model="selectedSort"
          v-bind:title="selectTitle.specialization"
          :options="specializationOptions"
        />
        <base-green-select
          v-model="selectedSort"
          v-bind:title="selectTitle.model"
          :options="modelOptions"
        />
      </div>
    </div>
    <the-single-master-card />
    <the-single-master-card />
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSingleMasterCard from "@/components/TheSingleMasterCard.vue";
import TheFilter from "@/components/UI/TheFilter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSingleMasterCard,
    TheFilter,
  },
  data() {
    return {
      selectedSort: "",
      selectTitle: {
        city: "город",
        specialization: "специализация",
        model: "марка",
      },
      cityOptions: [
        { value: "Киев", name: "Киев" },
        { value: "Львов", name: "Львов" },
        { value: "Запорожье", name: "Запорожье" },
        { value: "Днепр", name: "Днепр" },
      ],
      specializationOptions: [
        { value: "маляр", name: "маляр" },
        { value: "рихтовщик", name: "рихтовщик" },
        { value: "полировщик", name: "полировщик" },
        { value: "слесарь", name: "слесарь" },
      ],
      modelOptions: [
        { value: "audi", name: "audi" },
        { value: "BMW", name: "BMW" },
        { value: "mersedes", name: "mersedes" },
        { value: "lada", name: "lada" },
      ],
    };
  },
};
</script>

<style scoped>
.simpleFilterBlock {
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
}

p {
  font-size: 24px;
  font-weight: 600;
}
.cityJob {
    margin-left: 30px;
    font-size: 20px;
    padding: 5px 10px 5px 10px;
    border: 2px solid #37A000;
    box-sizing: border-box;
    border-radius: 5px;
}
.greenSelect {
    margin-left: 15px;
}
.filter-p {
   margin-top: 5px;
}
</style>