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
          <h1 class="text-xl font-semi mb-4">Calendar</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Calendar inputId="icon" v-model="date3" :showIcon="true" />
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">InputNumber</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <InputNumber
                inputId="stacked"
                v-model="value17"
                showButtons
                mode="decimal"
              />
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">Chips</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Chips v-model="chips" />
            </div>
          </div>
        </Card>
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">RadioButton</h1>
          <div class="grid grid-cols-3 gap-4">
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
          <h1 class="text-xl font-semi mb-4">Checkbox</h1>
          <div class="grid grid-cols-3 gap-4">
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
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">Listbox</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Listbox
                v-model="selectedCountries"
                :options="listBoxCountries"
                :multiple="true"
                :filter="true"
                optionLabel="name"
                listStyle="max-height:250px"
                style="width: 15rem"
                filterPlaceholder="Search"
              >
                <template #option="slotProps">
                  <div class="country-item">
                    <div>{{ slotProps.option.name }}</div>
                  </div>
                </template>
              </Listbox>
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">Dropdown</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Dropdown
                v-model="selectedCity1"
                :options="listBoxCountries"
                optionLabel="name"
                optionValue="code"
                placeholder="Select a City"
              />
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">MultiSelect</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <MultiSelect
                v-model="selectedCountries"
                :options="listBoxCountries"
                optionLabel="name"
                placeholder="Select Countries"
                :filter="true"
                class="multiselect-custom"
              >
                <template #value="slotProps">
                  <div
                    class="country-item country-item-value"
                    v-for="option of slotProps.value"
                    :key="option.code"
                  >
                    <div>{{ option.name }}</div>
                  </div>
                  <template
                    v-if="!slotProps.value || slotProps.value.length === 0"
                  >
                    Select Countries
                  </template>
                </template>
                <template #option="slotProps">
                  <div class="country-item">
                    <div>{{ slotProps.option.name }}</div>
                  </div>
                </template>
              </MultiSelect>
            </div>
          </div>
        </Card>
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">Slider</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <InputText v-model.number="slider" />
              <Slider v-model="slider" />
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">Rating</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Rating v-model="rating" />
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">InputSwitch</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <InputSwitch v-model="inputSwitch" />
            </div>
          </div>
        </Card>
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">ToggleButton</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <ToggleButton
                v-model="toggleButton"
                onIcon="pi pi-check"
                offIcon="pi pi-times"
                class="w-full sm:w-10rem"
                aria-label="Confirmation"
              />
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">SelectButton</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <SelectButton
                v-model="selectSingle"
                :options="selectMultipleOptions"
                optionLabel="name"
                aria-labelledby="multiple"
              />
            </div>
          </div>
          <h1 class="text-xl font-semi mb-4">SelectButton - Multiple</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <SelectButton
                v-model="selectMultiple"
                :options="selectMultipleOptions"
                optionLabel="name"
                multiple
                aria-labelledby="multiple"
              />
            </div>
          </div>
        </Card>
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">Buttons</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <ToggleButton
                v-model="toggleButton"
                onIcon="pi pi-check"
                offIcon="pi pi-times"
                class="w-full sm:w-10rem"
                aria-label="Confirmation"
              />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Basic</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button label="Submit" />
              <Button label="Disabled" disabled="disabled" />
              <Button label="Link" class="p-button-link" />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Icons</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button icon="pi pi-check" />
              <Button label="Submit" icon="pi pi-check" />
              <Button label="Submit" icon="pi pi-check" iconPos="right" />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Severities</h1>
          <div class="grid">
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
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button label="Primary" class="p-button-raised" />
              <Button
                label="Secondary"
                class="p-button-raised p-button-secondary"
              />
              <Button
                label="Success"
                class="p-button-raised p-button-success"
              />
              <Button label="Info" class="p-button-raised p-button-info" />
              <Button
                label="Warning"
                class="p-button-raised p-button-warning"
              />
              <Button label="Help" class="p-button-raised p-button-help" />
              <Button label="Danger" class="p-button-raised p-button-danger" />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Rounded Buttons</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button label="Primary" class="p-button-rounded" />
              <Button
                label="Secondary"
                class="p-button-rounded p-button-secondary"
              />
              <Button
                label="Success"
                class="p-button-rounded p-button-success"
              />
              <Button label="Info" class="p-button-rounded p-button-info" />
              <Button
                label="Warning"
                class="p-button-rounded p-button-warning"
              />
              <Button label="Help" class="p-button-rounded p-button-help" />
              <Button label="Danger" class="p-button-rounded p-button-danger" />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Text Buttons</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button label="Primary" class="p-button-text" />
              <Button
                label="Secondary"
                class="p-button-secondary p-button-text"
              />
              <Button label="Success" class="p-button-success p-button-text" />
              <Button label="Info" class="p-button-info p-button-text" />
              <Button label="Warning" class="p-button-warning p-button-text" />
              <Button label="Help" class="p-button-help p-button-text" />
              <Button label="Danger" class="p-button-danger p-button-text" />
              <Button label="Plain" class="p-button-text p-button-plain" />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Raised Text Buttons</h1>
          <div class="grid">
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
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button label="Primary" class="p-button-outlined" />
              <Button
                label="Secondary"
                class="p-button-outlined p-button-secondary"
              />
              <Button
                label="Success"
                class="p-button-outlined p-button-success"
              />
              <Button label="Info" class="p-button-outlined p-button-info" />
              <Button
                label="Warning"
                class="p-button-outlined p-button-warning"
              />
              <Button label="Help" class="p-button-outlined p-button-help" />
              <Button
                label="Danger"
                class="p-button-outlined p-button-danger"
              />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Rounded Icon Buttons</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button
                icon="pi pi-bookmark"
                class="p-button-rounded p-button-secondary"
              />
              <Button
                icon="pi pi-search"
                class="p-button-rounded p-button-success"
              />
              <Button
                icon="pi pi-user"
                class="p-button-rounded p-button-info"
              />
              <Button
                icon="pi pi-bell"
                class="p-button-rounded p-button-warning"
              />
              <Button
                icon="pi pi-heart"
                class="p-button-rounded p-button-help"
              />
              <Button
                icon="pi pi-times"
                class="p-button-rounded p-button-danger"
              />
              <Button icon="pi pi-check" class="p-button-rounded" />
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Rounded Text Icon Buttons</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button
                icon="pi pi-check"
                class="p-button-rounded p-button-text"
              />
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

          <h1 class="text-xl font-semi mb-4">
            Rounded and Outlined Icon Buttons
          </h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Button
                icon="pi pi-check"
                class="p-button-rounded p-button-outlined"
              />
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
          <div class="grid">
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
          <div class="grid">
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
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <span class="p-buttonset">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
              </span>
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Sizes</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <div class="sizes">
                <Button label="Small" icon="pi pi-check" class="p-button-sm" />
                <Button label="Normal" icon="pi pi-check" class="p-button" />
                <Button label="Large" icon="pi pi-check" class="p-button-lg" />
              </div>
            </div>
          </div>

          <h1 class="text-xl font-semi mb-4">Template</h1>
          <div class="grid">
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
        <Card class="col-span-12">
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <DataTable
                :value="customers"
                :paginator="true"
                :rows="10"
                v-model:filters="filters1"
                v-model:selection="selectedCustomer1"
                selectionMode="single"
                dataKey="id"
                stateStorage="session"
                stateKey="dt-state-demo-session"
                responsiveLayout="scroll"
              >
                <template #header>
                  <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText
                      v-model="filters1['global'].value"
                      placeholder="Global Search"
                    />
                  </span>
                </template>
                <Column
                  field="name"
                  header="Name"
                  :sortable="true"
                  style="width: 25%"
                >
                  <template #filter>
                    <InputText
                      type="text"
                      v-model="filters1['name']"
                      class="p-column-filter"
                      placeholder="Search by name"
                    />
                  </template>
                </Column>
                <Column
                  header="Country"
                  :sortable="true"
                  sortField="country.name"
                  filterField="country.name"
                  filterMatchMode="contains"
                  style="width: 25%"
                >
                  <template #body="slotProps">
                    <img
                      src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                      width="20"
                    />
                    <span class="image-text">{{
                      slotProps.data.country.name
                    }}</span>
                  </template>
                  <template #filter>
                    <InputText
                      type="text"
                      v-model="filters1['country.name']"
                      class="p-column-filter"
                      placeholder="Search by country"
                    />
                  </template>
                </Column>
                <Column
                  header="Representative"
                  :sortable="true"
                  sortField="representative.name"
                  filterField="representative.name"
                  filterMatchMode="in"
                  style="width: 25%"
                >
                  <template #body="slotProps">
                    <img
                      :alt="slotProps.data.representative.name"
                      src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                      width="20"
                      style="vertical-align: middle"
                    />
                    <span class="image-text">{{
                      slotProps.data.representative.name
                    }}</span>
                  </template>
                  <template #filter>
                    <MultiSelect
                      v-model="filters1['representative.name']"
                      :options="representatives"
                      optionLabel="name"
                      optionValue="name"
                      placeholder="All"
                      class="p-column-filter"
                    >
                      <template #option="slotProps">
                        <div class="p-multiselect-representative-option">
                          <img
                            :alt="slotProps.option.name"
                            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                            width="20"
                            style="vertical-align: middle"
                          />
                          <span class="image-text">{{
                            slotProps.option.name
                          }}</span>
                        </div>
                      </template>
                    </MultiSelect>
                  </template>
                </Column>
                <Column
                  field="status"
                  header="Status"
                  :sortable="true"
                  filterMatchMode="equals"
                  style="width: 25%"
                >
                  <template #body="slotProps">
                    <span
                      :class="'customer-badge status-' + slotProps.data.status"
                      >{{ slotProps.data.status }}</span
                    >
                  </template>
                  <template #filter>
                    <Dropdown
                      v-model="filters1['status']"
                      :options="statuses"
                      placeholder="Select a Status"
                      class="p-column-filter"
                      :showClear="true"
                    >
                      <template #option="slotProps">
                        <span
                          :class="'customer-badge status-' + slotProps.option"
                          >{{ slotProps.option }}</span
                        >
                      </template>
                    </Dropdown>
                  </template>
                </Column>
                <template #empty> No customers found. </template>
              </DataTable>
            </div>
          </div>
        </Card>
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">AccordionPanel</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Accordion :activeIndex="0">
                <AccordionTab header="Header I">
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
                </AccordionTab>
                <AccordionTab header="Header II">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci
                    velit, sed quia non numquam eius modi.
                  </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus.
                  </p>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </Card>
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">TabView</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <TabView ref="tabview1">
                <TabPanel header="Header I">
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
                </TabPanel>
                <TabPanel header="Header II">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci
                    velit, sed quia non numquam eius modi.
                  </p>
                </TabPanel>
                <TabPanel header="Header III">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus.
                  </p>
                </TabPanel>
              </TabView>
            </div>
          </div>
        </Card>
        <Card class="col-span-6">
          <h1 class="text-xl font-semi mb-4">TabView</h1>
          <div class="grid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <Panel header="Header">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Fieldset>
            </div>
          </div>
        </Card>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { FilterMatchMode } from "primevue/api";
import Card from "./components/Card.vue";
import CountryService from "./service/CountryService";
import CustomerService from "./service/CustomerService";

export default defineComponent({
  name: "App",
  components: {
    Card,
  },
  setup() {
    const chips = ref();
    const slider = ref();
    const rating = ref();
    const inputSwitch = ref();
    const countryService = ref(new CountryService());
    const countries = ref();
    const filteredCountries = ref();
    const selectedCountries = ref([]);
    const selectedCountry = ref();
    const toggleButton = ref();
    const selectSingle = ref();
    const selectMultiple = ref();
    const selectMultipleOptions = ref([
      { name: "Option 1", value: 1 },
      { name: "Option 2", value: 2 },
      { name: "Option 3", value: 3 },
    ]);
    const loadingButton = ref([false, false, false]);
    const load = (index: any) => {
      loadingButton.value[index] = true;
      setTimeout(() => (loadingButton.value[index] = false), 1000);
    };
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
    const customers = ref();
    const customerService = ref(new CustomerService());
    const selectedCustomer1 = ref();
    const selectedCustomer2 = ref();
    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const filters2 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const loading = ref(true);
    const representatives = ref([
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "XuXue Feng", image: "xuxuefeng.png" },
    ]);
    const statuses = ref([
      "unqualified",
      "qualified",
      "new",
      "negotiation",
      "renewal",
      "proposal",
    ]);
    onMounted(() => {
      countryService.value
        .getCountries()
        .then((data) => (countries.value = data));
      customerService.value
        .getCustomer()
        .then((data) => (customers.value = data));
    });

    return {
      chips,
      filteredCountries,
      listBoxCountries,
      selectedCountries,
      searchCountry,
      selectedCountry,
      slider,
      rating,
      inputSwitch,
      selectSingle,
      selectMultiple,
      selectMultipleOptions,
      toggleButton,
      loadingButton,
      load,
      customers,
      customerService,
      selectedCustomer1,
      selectedCustomer2,
      filters1,
      filters2,
      loading,
      representatives,
      statuses,
    };
  },
});
</script>
