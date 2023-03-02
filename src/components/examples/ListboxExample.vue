<template>
  <Card class="col-span-6">
    <h1 class="text-xl font-semi mb-4">Listbox</h1>
    <Listbox
      v-model="selectedCountries"
      :options="listBoxCountries"
      :multiple="true"
      :filter="true"
      optionLabel="name"
      listStyle="max-height:250px"
      style="width: 15rem"
      filterPlaceholder="Search"
      class="w-full mb-4"
    >
      <template #option="slotProps">
        <div class="country-item">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Listbox>
    <h1 class="text-xl font-semi mb-4">Dropdown</h1>
    <Dropdown
      v-model="selectedCity"
      :options="listBoxCountries"
      optionLabel="name"
      optionValue="code"
      placeholder="Select a City"
      class="w-full mb-4"
    />
    <h1 class="text-xl font-semi mb-4">MultiSelect</h1>
    <MultiSelect
      v-model="selectedCountries"
      :options="listBoxCountries"
      optionLabel="name"
      placeholder="Select Countries"
      :filter="true"
      class="multiselect-custom w-full"
    >
      <template #value="slotProps">
        <div
          class="country-item country-item-value"
          v-for="option of slotProps.value"
          :key="option.code"
        >
          <div>{{ option.name }}</div>
        </div>
        <template v-if="!slotProps.value || slotProps.value.length === 0">
          Select Countries
        </template>
      </template>
      <template #option="slotProps">
        <div class="country-item">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </MultiSelect>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "../Card.vue";

export default defineComponent({
  name: "ListboxExample",
  components: {
    Card,
  },
  setup() {
    const selectedCity = ref();
    const selectedCountries = ref([]);
    const listBoxCountries = ref([
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" },
    ]);
    return {
      listBoxCountries,
      selectedCity,
      selectedCountries,
    };
  },
});
</script>

<style>
.p-listbox {
  width: 100% !important;
}
</style>
