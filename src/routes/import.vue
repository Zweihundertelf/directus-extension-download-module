<script lang="ts" setup>
import NavbarComponent from '../components/navigation.vue';
</script>

<template>
  <private-view title="Import Data Model">
    <template #title-outer:prepend>
      <v-button rounded disabled icon>
        <v-icon name="database" />
      </v-button>
    </template>
    <template #navigation>
      <NavbarComponent />
    </template>

    <div class="wrapper">
      <h1>Import Data Model</h1>
    </div>
  </private-view>
</template>

<style scoped>
.wrapper {
  padding: var(--content-padding);
}
</style>
