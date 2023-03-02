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
        <Button label="Submit" />
        <Button label="Disabled" disabled="disabled" />
        <Button label="Link" class="p-button-link" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Icons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Severities</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" />
        <Button label="Secondary" class="p-button-secondary" />
        <Button label="Success" class="p-button-success" />
        <Button label="Info" class="p-button-info" />
        <Button label="Warning" class="p-button-warning" />
        <Button label="Help" class="p-button-help" />
        <Button label="Danger" class="p-button-danger" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Raised Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-raised" />
        <Button label="Secondary" class="p-button-raised p-button-secondary" />
        <Button label="Success" class="p-button-raised p-button-success" />
        <Button label="Info" class="p-button-raised p-button-info" />
        <Button label="Warning" class="p-button-raised p-button-warning" />
        <Button label="Help" class="p-button-raised p-button-help" />
        <Button label="Danger" class="p-button-raised p-button-danger" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-rounded" />
        <Button label="Secondary" class="p-button-rounded p-button-secondary" />
        <Button label="Success" class="p-button-rounded p-button-success" />
        <Button label="Info" class="p-button-rounded p-button-info" />
        <Button label="Warning" class="p-button-rounded p-button-warning" />
        <Button label="Help" class="p-button-rounded p-button-help" />
        <Button label="Danger" class="p-button-rounded p-button-danger" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Text Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-text" />
        <Button label="Secondary" class="p-button-secondary p-button-text" />
        <Button label="Success" class="p-button-success p-button-text" />
        <Button label="Info" class="p-button-info p-button-text" />
        <Button label="Warning" class="p-button-warning p-button-text" />
        <Button label="Help" class="p-button-help p-button-text" />
        <Button label="Danger" class="p-button-danger p-button-text" />
        <Button label="Plain" class="p-button-text p-button-plain" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Raised Text Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-raised p-button-text" />
        <Button
          label="Secondary"
          class="p-button-raised p-button-secondary p-button-text"
        />
        <Button
          label="Success"
          class="p-button-raised p-button-success p-button-text"
        />
        <Button
          label="Info"
          class="p-button-raised p-button-info p-button-text"
        />
        <Button
          label="Warning"
          class="p-button-raised p-button-warning p-button-text"
        />
        <Button
          label="Help"
          class="p-button-raised p-button-help p-button-text"
        />
        <Button
          label="Danger"
          class="p-button-raised p-button-danger p-button-text"
        />
        <Button
          label="Plain"
          class="p-button-raised p-button-text p-button-plain"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Outlined Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button label="Primary" class="p-button-outlined" />
        <Button
          label="Secondary"
          class="p-button-outlined p-button-secondary"
        />
        <Button label="Success" class="p-button-outlined p-button-success" />
        <Button label="Info" class="p-button-outlined p-button-info" />
        <Button label="Warning" class="p-button-outlined p-button-warning" />
        <Button label="Help" class="p-button-outlined p-button-help" />
        <Button label="Danger" class="p-button-outlined p-button-danger" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded Icon Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button
          icon="pi pi-bookmark"
          class="p-button-rounded p-button-secondary"
        />
        <Button icon="pi pi-search" class="p-button-rounded p-button-success" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning" />
        <Button icon="pi pi-heart" class="p-button-rounded p-button-help" />
        <Button icon="pi pi-times" class="p-button-rounded p-button-danger" />
        <Button icon="pi pi-check" class="p-button-rounded" />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded Text Icon Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button icon="pi pi-check" class="p-button-rounded p-button-text" />
        <Button
          icon="pi pi-bookmark"
          class="p-button-rounded p-button-secondary p-button-text"
        />
        <Button
          icon="pi pi-search"
          class="p-button-rounded p-button-success p-button-text"
        />
        <Button
          icon="pi pi-user"
          class="p-button-rounded p-button-info p-button-text"
        />
        <Button
          icon="pi pi-bell"
          class="p-button-rounded p-button-warning p-button-text"
        />
        <Button
          icon="pi pi-heart"
          class="p-button-rounded p-button-help p-button-text"
        />
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-text"
        />
        <Button
          icon="pi pi-filter"
          class="p-button-rounded p-button-text p-button-plain"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Rounded and Outlined Icon Buttons</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" />
        <Button
          icon="pi pi-bookmark"
          class="p-button-rounded p-button-secondary p-button-outlined"
        />
        <Button
          icon="pi pi-search"
          class="p-button-rounded p-button-success p-button-outlined"
        />
        <Button
          icon="pi pi-user"
          class="p-button-rounded p-button-info p-button-outlined"
        />
        <Button
          icon="pi pi-bell"
          class="p-button-rounded p-button-warning p-button-outlined"
        />
        <Button
          icon="pi pi-heart"
          class="p-button-rounded p-button-help p-button-outlined"
        />
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-outlined"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Badges</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <Button type="button" label="Emails" badge="8" />
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
        />
        <Button
          type="button"
          label="Search"
          icon="pi pi-search"
          iconPos="right"
          :loading="loadingButton[1]"
          @click="load(1)"
        />
        <Button
          type="button"
          icon="pi pi-search"
          :loading="loadingButton[2]"
          @click="load(2)"
        />
        <Button
          type="button"
          label="Search"
          :loading="loadingButton[3]"
          @click="load(3)"
        />
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Button Set</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <span class="p-buttonset">
          <Button label="Save" icon="pi pi-check" />
          <Button label="Delete" icon="pi pi-trash" />
          <Button label="Cancel" icon="pi pi-times" />
        </span>
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Sizes</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <div class="sizes">
          <Button label="Small" icon="pi pi-check" class="p-button-sm" />
          <Button label="Normal" icon="pi pi-check" class="p-button" />
          <Button label="Large" icon="pi pi-check" class="p-button-lg" />
        </div>
      </div>
    </div>

    <h1 class="text-xl font-semi mb-4">Template</h1>
    <div class="grid mb-4">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <div class="template">
          <Button class="google p-0" aria-label="Google">
            <i class="pi pi-google px-2"></i>
            <span class="px-3">Google</span>
          </Button>
          <Button class="youtube p-0" aria-label="Youtube">
            <i class="pi pi-youtube px-2"></i>
            <span class="px-3">Youtube</span>
          </Button>
          <Button class="vimeo p-0" aria-label="Vimeo">
            <i class="pi pi-vimeo px-2"></i>
            <span class="px-3">Vimeo</span>
          </Button>
          <Button class="facebook p-0" aria-label="Facebook">
            <i class="pi pi-facebook px-2"></i>
            <span class="px-3">Facebook</span>
          </Button>
          <Button class="twitter p-0" aria-label="Twitter">
            <i class="pi pi-twitter px-2"></i>
            <span class="px-3">Twitter</span>
          </Button>
          <Button class="slack p-0" aria-label="Slack">
            <i class="pi pi-slack px-2"></i>
            <span class="px-3">Slack</span>
          </Button>
          <Button class="amazon p-0" aria-label="Amazon">
            <i class="pi pi-amazon px-2"></i>
            <span class="px-3">Amazon</span>
          </Button>
          <Button class="discord p-0" aria-label="Discord">
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
