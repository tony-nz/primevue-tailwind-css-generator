<template>
  <div>
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto"
      >
        <div class="flex items-center flex-shrink-0 px-4">
          <img src="./assets/logo.svg" class="logo" alt="topbar-logo" />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
          <nav class="flex-1 px-2 pb-4 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <main class="grid grid-cols-12 gap-8 p-8">
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">InputText</h1>
          <div class="grid grid-cols-3 gap-4">
            <InputText placeholder="Default" />
            <InputText disabled="true" placeholder="Disabled" />
            <InputText class="p-invalid" placeholder="Invalid" />
          </div>
          <h1 class="text-xl font-semi mb-4">Icons</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" placeholder="User" />
              </span>
            </div>
            <div>
              <span class="p-input-icon-right">
                <i class="pi pi-spin pi-spinner" />
                <InputText type="text" placeholder="Search" />
              </span>
            </div>
            <div>
              <span class="p-input-icon-left p-input-icon-right">
                <i class="pi pi-user" />
                <InputText type="text" placeholder="Search" />
                <i class="pi pi-spin pi-spinner" />
              </span>
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">Float Label</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <span class="p-float-label">
                <InputText id="inputtext" type="text" />
                <label for="inputtext">InputText</label>
              </span>
            </div>
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <span class="p-float-label">
                <Textarea id="textarea" rows="3" />
                <label for="textarea">Textarea</label>
              </span>
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">AutoComplete</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <AutoComplete
                v-model="selectedCountry"
                :suggestions="filteredCountries"
                @complete="searchCountry($event)"
                :dropdown="true"
                optionLabel="name"
                forceSelection
              >
                <template #item="slotProps">
                  <div class="country-item">
                    <div class="ml-2">{{ slotProps.item.name }}</div>
                  </div>
                </template>
              </AutoComplete>
            </div>
          </div>
        </Card>
        <Card class="col-span-6">Test</Card>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Card from "./components/Card.vue";
import CountryService from "./service/CountryService";

export default defineComponent({
  name: "App",
  components: {
    Card,
  },
  setup() {
    const countryService = ref(new CountryService());
    const countries = ref();
    const filteredCountries = ref();
    const selectedCountries = ref([]);
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
      filteredCountries,
      selectedCountries,
      searchCountry,
      selectedCountry,
    };
  },
});
</script>
