<script lang="ts" setup>
import { useStores } from '@directus/extensions-sdk';
import { Collection } from '@directus/types';
import { ref } from 'vue';
import FancySelect from '../components/fancy-select.vue';
import NavbarComponent from '../components/navigation.vue';

const selectedValue = ref<string>();
const downloadRef = ref<{
  content: string | null;
  name: string | null;
}>({
  content: null,
  name: null,
});

const { useCollectionsStore, useFieldsStore } = useStores();

const collections = useCollectionsStore().allCollections;

const selectCollection = (collection: string) => {
  if (!collection) {
    URL.revokeObjectURL(downloadRef.value.content as string);
    downloadRef.value = { content: null, name: null };
    return;
  }

  const currentCollection = useCollectionsStore().getCollection(collection);
  const currentFields = useFieldsStore().fields.filter((f: Collection) => f.collection === collection);

  const blob = new Blob([JSON.stringify({ collection: currentCollection, fields: currentFields }, null, 2)], {
    type: 'application/json;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);

  downloadRef.value = {
    content: url,
    name: collection,
  };
};
</script>

<template>
  <private-view title="Export Data Module">
    <template #navigation>
      <NavbarComponent />
    </template>
    <template #actions>
      <v-button :download="downloadRef.name + '.json'" :href="downloadRef.content" :disabled="!selectedValue" @click="downloadRef = { content: null, name: null }">Download</v-button>
    </template>
    <div class="wrapper">
      <FancySelect :collections="collections" v-model="selectedValue" @click="selectCollection(selectedValue)" />
    </div>
  </private-view>
</template>

<style scoped>
.wrapper {
  padding: var(--content-padding);
}
</style>
