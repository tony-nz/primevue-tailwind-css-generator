<template>
  <Card class="col-span-6">
    <h1 class="text-xl font-semi mb-4">InputText</h1>
    <div class="grid grid-cols-3 gap-4 mb-4">
      <InputText placeholder="Default" />
      <InputText disabled="true" placeholder="Disabled" />
      <InputText class="p-invalid" placeholder="Invalid" />
    </div>
    <h1 class="text-xl font-semi mb-4">Icons</h1>
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div>
        <span class="p-input-icon-left w-full">
          <i class="pi pi-search" />
          <InputText type="text" placeholder="User" class="w-full" />
        </span>
      </div>
      <div>
        <span class="p-input-icon-right w-full">
          <i class="pi pi-spin pi-spinner" />
          <InputText type="text" placeholder="Search" class="w-full" />
        </span>
      </div>
      <div>
        <span class="p-input-icon-left p-input-icon-right w-full">
          <i class="pi pi-user" />
          <InputText type="text" placeholder="Search" class="w-full" />
          <i class="pi pi-spin pi-spinner" />
        </span>
      </div>
    </div>
    <h1 class="text-xl font-semi mb-4">Float Label</h1>
    <div class="grid">
      <div class="col-12 mb-4 lg:col-4">
        <span class="p-float-label w-full">
          <InputText id="inputtext" type="text" class="w-full" />
          <label for="inputtext">Username</label>
        </span>
      </div>
      <div class="col-12 mb-4">
        <span class="p-float-label w-full">
          <Textarea id="textarea" rows="3" class="w-full" />
          <label for="textarea">Your Message</label>
        </span>
      </div>
    </div>
    <h1 class="text-xl font-semi mb-4">AutoComplete</h1>
    <AutoComplete
      v-model="selectedCountry"
      :suggestions="filteredCountries"
      @complete="searchCountry($event)"
      :dropdown="true"
      optionLabel="name"
      forceSelection
      class="w-full mb-4"
    >
      <template #item="slotProps">
        <div class="country-item">
          <div class="ml-2">{{ slotProps.item.name }}</div>
        </div>
      </template>
    </AutoComplete>
    <h1 class="text-xl font-semi mb-4">Calendar</h1>
    <Calendar
      inputId="icon"
      v-model="date"
      :showIcon="true"
      class="w-full mb-4"
    />
    <h1 class="text-xl font-semi mb-4">InputNumber</h1>
    <InputNumber
      inputId="stacked"
      v-model="inputNumber"
      showButtons
      mode="decimal"
      class="w-full mb-4"
    />
    <h1 class="text-xl font-semi mb-4">Chips</h1>
    <Chips v-model="chips" class="w-full mb-4" />
  </Card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Card from "../Card.vue";
import CountryService from "../../service/CountryService";

export default defineComponent({
  name: "InputExample",
  components: {
    Card,
  },
  setup() {
    const chips = ref();
    const countries = ref();
    const countryService = ref(new CountryService());
    const date = ref();
    const filteredCountries = ref();
    const inputNumber = ref();
    const selectedCountry = ref();

    const searchCountry = (event: any) => {
      setTimeout(() => {
        if (!event.query.trim().length) {
          filteredCountries.value = [...countries.value];
        } else {
          filteredCountries.value = countries.value.filter((country: any) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    };

    onMounted(() => {
      countryService.value
        .getCountries()
        .then((data) => (countries.value = data));
    });
    return {
      chips,
      countries,
      date,
      filteredCountries,
      inputNumber,
      searchCountry,
      selectedCountry,
    };
  },
});
</script>

<style>
.p-chips .p-chips-multiple-container {
  width: 100%;
}
</style>
