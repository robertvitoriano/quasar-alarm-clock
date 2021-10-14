<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Controle seu Tempo
        </q-item-label>

        <SideBarLink
          v-for="link in sideBarLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import SideBarLink from 'components/SideBarLink.vue'

const sideBarLinks = [
  {
    title: 'Alarme',
    caption: 'Escolha a hora de despertar',
    icon: 'alarm',
    link: '/alarm'
  },
  {
    title: 'Relógio',
    caption: 'Ajuste seu tempo',
    icon: 'schedule',
    // link: 'https://quasar.dev'
  },

];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SideBarLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      sideBarLinks,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
