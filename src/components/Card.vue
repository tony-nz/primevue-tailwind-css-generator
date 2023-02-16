<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div
    :class="getClass"
    class="rounded-lg bg-white overflow-hidden mb-4 p-4 shadow w-full"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    class: String,
  },
  setup(props) {
    const getClass = computed(() => {
      return props.class;
    });
    return { getClass };
  },
});
</script>
