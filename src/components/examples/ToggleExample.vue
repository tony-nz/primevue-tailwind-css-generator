<template>
  <Card class="col-span-6">
    <h1 class="text-xl font-semi mb-4">ToggleButton</h1>
    <ToggleButton
      v-model="toggleButton"
      onIcon="pi pi-check"
      offIcon="pi pi-times"
      class="w-full mb-4"
      aria-label="Confirmation"
    />
    <h1 class="text-xl font-semi mb-4">SelectButton</h1>
    <SelectButton
      v-model="selectSingle"
      :options="selectMultipleOptions"
      optionLabel="name"
      aria-labelledby="multiple"
      class="w-full mb-4"
    />
    <h1 class="text-xl font-semi mb-4">SelectButton - Multiple</h1>
    <SelectButton
      v-model="selectMultiple"
      :options="selectMultipleOptions"
      optionLabel="name"
      multiple
      aria-labelledby="multiple"
      class="w-full mb-4"
    />
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "../Card.vue";

export default defineComponent({
  name: "ToggleExample",
  components: {
    Card,
  },
  setup() {
    const toggleButton = ref();
    const selectSingle = ref();
    const selectMultiple = ref();
    const selectMultipleOptions = ref([
      { name: "Option 1", value: 1 },
      { name: "Option 2", value: 2 },
      { name: "Option 3", value: 3 },
    ]);
    return {
      toggleButton,
      selectSingle,
      selectMultiple,
      selectMultipleOptions,
    };
  },
});
</script>

<style>
.p-buttonset .p-button {
  width: 33% !important;
}
</style>
