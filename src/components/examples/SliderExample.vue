<template>
  <Card class="col-span-6">
    <h1 class="text-xl font-semi mb-4">Slider</h1>
    <InputText v-model.number="slider" class="w-full" />
    <Slider v-model="slider" class="mb-4" />
    <h1 class="text-xl font-semi mb-4">Rating</h1>
    <Rating v-model="rating" class="mb-4" />
    <h1 class="text-xl font-semi mb-4">InputSwitch</h1>
    <InputSwitch v-model="inputSwitch" />
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "../Card.vue";

export default defineComponent({
  name: "SliderExample",
  components: {
    Card,
  },
  setup() {
    const inputSwitch = ref();
    const slider = ref();
    const rating = ref();
    return {
      inputSwitch,
      slider,
      rating,
    };
  },
});
</script>
