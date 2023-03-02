<template>
  <Card class="mt-4" style="column-span: all">
    <h1 class="text-xl font-semi mb-4">Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <ToggleButton
          v-model="toggleButton"
          onIcon="pi pi-check"
          offIcon="pi pi-times"
          class="sm:w-10rem"
          aria-label="Confirmation"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Basic</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Submit" class="mr-2" />
        <Button label="Disabled" disabled="disabled" class="mr-2" />
        <Button label="Link" class="p-button-link mr-2" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Icons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button icon="pi pi-check" class="mr-2" />
        <Button label="Submit" icon="pi pi-check" class="mr-2" />
        <Button
          label="Submit"
          icon="pi pi-check"
          class="mr-2"
          iconPos="right"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Severities</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="mr-2" />
        <Button label="Secondary" class="p-button-secondary mr-2" />
        <Button label="Success" class="p-button-success mr-2" />
        <Button label="Info" class="p-button-info mr-2" />
        <Button label="Warning" class="p-button-warning mr-2" />
        <Button label="Help" class="p-button-help mr-2" />
        <Button label="Danger" class="p-button-danger mr-2" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Raised Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-raised mr-2" />
        <Button
          label="Secondary"
          class="p-button-raised p-button-secondary mr-2"
        />
        <Button label="Success" class="p-button-raised p-button-success mr-2" />
        <Button label="Info" class="p-button-raised p-button-info mr-2" />
        <Button label="Warning" class="p-button-raised p-button-warning mr-2" />
        <Button label="Help" class="p-button-raised p-button-help mr-2" />
        <Button label="Danger" class="p-button-raised p-button-danger mr-2" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-rounded mr-2" />
        <Button
          label="Secondary"
          class="p-button-rounded p-button-secondary mr-2"
        />
        <Button
          label="Success"
          class="p-button-rounded p-button-success mr-2"
        />
        <Button label="Info" class="p-button-rounded p-button-info mr-2" />
        <Button
          label="Warning"
          class="p-button-rounded p-button-warning mr-2"
        />
        <Button label="Help" class="p-button-rounded p-button-help mr-2" />
        <Button label="Danger" class="p-button-rounded p-button-danger mr-2" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Text Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-text mr-2" />
        <Button
          label="Secondary"
          class="p-button-secondary p-button-text mr-2"
        />
        <Button label="Success" class="p-button-success p-button-text mr-2" />
        <Button label="Info" class="p-button-info p-button-text mr-2" />
        <Button label="Warning" class="p-button-warning p-button-text mr-2" />
        <Button label="Help" class="p-button-help p-button-text mr-2" />
        <Button label="Danger" class="p-button-danger p-button-text mr-2" />
        <Button label="Plain" class="p-button-text p-button-plain mr-2" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Raised Text Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-raised p-button-text" />
        <Button
          label="Secondary"
          class="p-button-raised p-button-secondary p-button-text mr-2"
        />
        <Button
          label="Success"
          class="p-button-raised p-button-success p-button-text mr-2"
        />
        <Button
          label="Info"
          class="p-button-raised p-button-info p-button-text mr-2"
        />
        <Button
          label="Warning"
          class="p-button-raised p-button-warning p-button-text mr-2"
        />
        <Button
          label="Help"
          class="p-button-raised p-button-help p-button-text mr-2"
        />
        <Button
          label="Danger"
          class="p-button-raised p-button-danger p-button-text mr-2"
        />
        <Button
          label="Plain"
          class="p-button-raised p-button-text p-button-plain mr-2"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Outlined Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-outlined mr-2" />
        <Button
          label="Secondary"
          class="p-button-outlined p-button-secondary mr-2"
        />
        <Button
          label="Success"
          class="p-button-outlined p-button-success mr-2"
        />
        <Button label="Info" class="p-button-outlined p-button-info mr-2" />
        <Button
          label="Warning"
          class="p-button-outlined p-button-warning mr-2"
        />
        <Button label="Help" class="p-button-outlined p-button-help mr-2" />
        <Button label="Danger" class="p-button-outlined p-button-danger mr-2" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded Icon Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button
          icon="pi pi-bookmark"
          class="p-button-rounded p-button-secondary mr-2"
        />
        <Button
          icon="pi pi-search"
          class="p-button-rounded p-button-success mr-2"
        />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info mr-2" />
        <Button
          icon="pi pi-bell"
          class="p-button-rounded p-button-warning mr-2"
        />
        <Button
          icon="pi pi-heart"
          class="p-button-rounded p-button-help mr-2"
        />
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger mr-2"
        />
        <Button icon="pi pi-check" class="p-button-rounded mr-2" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded Text Icon Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button
          icon="pi pi-check"
          class="p-button-rounded p-button-text mr-2"
        />
        <Button
          icon="pi pi-bookmark"
          class="p-button-rounded p-button-secondary p-button-text mr-2"
        />
        <Button
          icon="pi pi-search"
          class="p-button-rounded p-button-success p-button-text mr-2"
        />
        <Button
          icon="pi pi-user"
          class="p-button-rounded p-button-info p-button-text mr-2"
        />
        <Button
          icon="pi pi-bell"
          class="p-button-rounded p-button-warning p-button-text mr-2"
        />
        <Button
          icon="pi pi-heart"
          class="p-button-rounded p-button-help p-button-text mr-2"
        />
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-text mr-2"
        />
        <Button
          icon="pi pi-filter"
          class="p-button-rounded p-button-text p-button-plain mr-2"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded and Outlined Icon Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button
          icon="pi pi-check"
          class="p-button-rounded p-button-outlined mr-2"
        />
        <Button
          icon="pi pi-bookmark"
          class="p-button-rounded p-button-secondary p-button-outlined mr-2"
        />
        <Button
          icon="pi pi-search"
          class="p-button-rounded p-button-success p-button-outlined mr-2"
        />
        <Button
          icon="pi pi-user"
          class="p-button-rounded p-button-info p-button-outlined mr-2"
        />
        <Button
          icon="pi pi-bell"
          class="p-button-rounded p-button-warning p-button-outlined mr-2"
        />
        <Button
          icon="pi pi-heart"
          class="p-button-rounded p-button-help p-button-outlined mr-2"
        />
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-outlined mr-2"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Badges</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button type="button" label="Emails" badge="8" class="mr-2" />
        <Button
          type="button"
          label="Messages"
          icon="pi pi-users"
          class="p-button-warning"
          badge="8"
          badgeClass="p-badge-danger"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Loading</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button
          type="button"
          label="Search"
          icon="pi pi-search"
          :loading="loadingButton[0]"
          @click="load(0)"
          class="mr-2"
        />
        <Button
          type="button"
          label="Search"
          icon="pi pi-search"
          iconPos="right"
          :loading="loadingButton[1]"
          @click="load(1)"
          class="mr-2"
        />
        <Button
          type="button"
          icon="pi pi-search"
          :loading="loadingButton[2]"
          @click="load(2)"
          class="mr-2"
        />
        <Button
          type="button"
          label="Search"
          :loading="loadingButton[3]"
          @click="load(3)"
          class="mr-2"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Button Set</h1>
    <div class="grid mb-4 w-1/3">
      <div class="col-span-3 mb-2">
        <span class="p-buttonset">
          <Button label="Save" icon="pi pi-check mr-2" />
          <Button label="Delete" icon="pi pi-trash mr-2" />
          <Button label="Cancel" icon="pi pi-times mr-2" />
        </span>
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Sizes</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <div class="sizes">
          <Button label="Small" icon="pi pi-check" class="p-button-sm mr-2" />
          <Button label="Normal" icon="pi pi-check" class="p-button mr-2" />
          <Button label="Large" icon="pi pi-check" class="p-button-lg mr-2" />
        </div>
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Template</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <div class="template">
          <Button class="google p-0 mr-2" aria-label="Google">
            <i class="pi pi-google px-2"></i>
            <span class="px-3">Google</span>
          </Button>
          <Button class="youtube p-0 mr-2" aria-label="Youtube">
            <i class="pi pi-youtube px-2"></i>
            <span class="px-3">Youtube</span>
          </Button>
          <Button class="vimeo p-0 mr-2" aria-label="Vimeo">
            <i class="pi pi-vimeo px-2"></i>
            <span class="px-3">Vimeo</span>
          </Button>
          <Button class="facebook p-0 mr-2" aria-label="Facebook">
            <i class="pi pi-facebook px-2"></i>
            <span class="px-3">Facebook</span>
          </Button>
          <Button class="twitter p-0 mr-2" aria-label="Twitter">
            <i class="pi pi-twitter px-2"></i>
            <span class="px-3">Twitter</span>
          </Button>
          <Button class="slack p-0 mr-2" aria-label="Slack">
            <i class="pi pi-slack px-2"></i>
            <span class="px-3">Slack</span>
          </Button>
          <Button class="amazon p-0 mr-2" aria-label="Amazon">
            <i class="pi pi-amazon px-2"></i>
            <span class="px-3">Amazon</span>
          </Button>
          <Button class="discord p-0 mr-2" aria-label="Discord">
            <i class="pi pi-discord px-2"></i>
            <span class="px-3">Discord</span>
          </Button>
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "../Card.vue";

export default defineComponent({
  name: "ButtonsExample",
  components: {
    Card,
  },
  setup() {
    const toggleButton = ref(false);
    const loadingButton = ref([false, false, false]);
    const load = (index: any) => {
      loadingButton.value[index] = true;
      setTimeout(() => (loadingButton.value[index] = false), 1000);
    };
    return {
      load,
      loadingButton,
      toggleButton,
    };
  },
});
</script>
