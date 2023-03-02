<template>
  <Card class="col-span-6">
    <h1 class="text-xl font-semi mb-2">RadioButton</h1>
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="field-radiobutton">
        <RadioButton inputId="option1" name="option" value="Option 1" />
        <label for="option1">Option 1</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton inputId="option2" name="option" value="Option 2" />
        <label for="option2">Option 2</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton inputId="option3" name="option" value="option3" />
        <label for="option3">Option 3</label>
      </div>
    </div>
    <h1 class="text-xl font-semi mb-2">Checkbox</h1>
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="field-radiobutton">
        <Checkbox inputId="option01" name="option" value="Option 01" />
        <label for="option01">Option 1</label>
      </div>
      <div class="field-radiobutton">
        <Checkbox inputId="option02" name="option" value="Option 02" />
        <label for="option02">Option 2</label>
      </div>
      <div class="field-radiobutton">
        <Checkbox inputId="option03" name="option" value="Option 03" />
        <label for="option03">Option 3</label>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../Card.vue";

export default defineComponent({
  name: "RadioExample",
  components: {
    Card,
  },
  setup() {
    return {
      //
    };
  },
});
</script>
