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
        <div class="mt-5 p-3">
          <nav class="">
            <div v-for="item in elements" :key="item.name" class="mb-4">
              <h2 class="font-medium mb-2">{{ item.name }}</h2>
              <div
                v-for="(child, index) in item.children"
                :key="index"
                class="flex mb-2"
              >
                <div class="w-full">
                  <span class="text-sm">{{ child.text }}</span>
                </div>
                <div
                  v-if="
                    child.type === 'colour-picker' && elementConfig[child.name]
                  "
                  class="p-1 bg-gray-200"
                >
                  <ColorPicker v-model="elementConfig[child.name]" />
                </div>
                <div v-else-if="child.type === 'text'" class="flex justify-end">
                  <input
                    type="text"
                    v-model="elementConfig[child.name]"
                    class="bg-gray-200 p-2 rounded text-black w-2/3 text-right text-sm"
                  />
                </div>
              </div>
            </div>
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

      <main class="mx-auto py-8 relative flex flex-col justify-center">
        <div
          class="columns-2 gap-4 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit max-w-7xl"
        >
          <InputExample />
          <SliderExample />
          <RadioExample />
          <ListboxExample />
          <ToggleExample />
          <ButtonsExample />
          <TableExample />
          <AccordionExample />
          <TabsExample />
          <Card class="col-span-6">
            <h1 class="text-xl font-semi mb-4">TabView</h1>
            <div class="grid">
              <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                <Panel header="Header">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Panel>
              </div>
            </div>
          </Card>
          <Card class="col-span-6">
            <h1 class="text-xl font-semi mb-4">Fieldset</h1>
            <div class="grid">
              <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                <Fieldset legend="Header" :toggleable="true">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Fieldset>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { elements } from "./config/ElementConfig";
import Card from "./components/Card.vue";
import {
  AccordionExample,
  ButtonsExample,
  InputExample,
  ListboxExample,
  RadioExample,
  SliderExample,
  TableExample,
  TabsExample,
  ToggleExample,
} from "./components/examples";

export default defineComponent({
  name: "App",
  components: {
    AccordionExample,
    ButtonsExample,
    InputExample,
    ListboxExample,
    RadioExample,
    SliderExample,
    TableExample,
    TabsExample,
    ToggleExample,
    Card,
  },
  setup() {
    const elementConfig: any = ref({});

    onMounted(() => {
      elements.forEach((element) => {
        if (element.children) {
          element.children.forEach((child: any) => {
            if (child.name && child.default) {
              console.log(child);
              elementConfig.value[child.name] = child.default;
            }
          });
        }
      });
    });

    const getColor = (elementName: string) => {
      return "#" + elementConfig.value[elementName];
    };
    const cssText = ref(""); // store the CSS text here
    const cssRules: any = ref([]); // the array of objects representing the CSS
    const parseCSS = async () => {
      // fetch the CSS file
      const response = await fetch("/tailwind.css");
      const text = await response.text();

      // save the CSS text to the ref
      cssText.value = text;

      // convert the CSS text into an array of objects
      const regex =
        /((?:\.[a-zA-Z0-9_-]+)|(?:[a-zA-Z0-9_-]+))(?:\s*,\s*((?:\.[a-zA-Z0-9_-]+)|(?:[a-zA-Z0-9_-]+)))*\s*{([^}]+)}/g;
      let match;
      while ((match = regex.exec(cssText.value))) {
        const selectors = match[1].split(",").map((s) => s.trim());
        const styles = match[3]
          .trim()
          .split(";")
          .filter(Boolean)
          .map((style) => {
            const [property, value] = style.split(":");
            return {
              property: property.trim(),
              value: value ? value.trim() : "",
            };
          });
        cssRules.value.push({ selectors, styles });
      }
    };

    return {
      elements,
      getColor,
      elementConfig,
      cssText,
      cssRules,
      parseCSS,
    };
  },
});
</script>
