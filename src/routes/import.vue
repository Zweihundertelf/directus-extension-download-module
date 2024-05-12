<script lang="ts" setup>
import { useStores } from '@directus/extensions-sdk';
import { Field } from '@directus/types';
import { ref } from 'vue';
import NavbarComponent from '../components/navigation.vue';

const { useCollectionsStore } = useStores();

const uploadRef = ref<File | null>(null);

const handleUpload = () => {
  const uploadFile = uploadRef.value;

  if (!uploadFile) return;

  const reader = new FileReader();
  reader.readAsText(uploadFile, 'UTF-8');

  reader.onload = async (event: any) => {
    const dataModel = JSON.parse(event.target?.result);
    const { collection, fields } = dataModel;

    useCollectionsStore().upsertCollection(collection.collection, {
      ...collection,
      fields: fields.map((field: Field) => field),
    });
  };
  uploadRef.value = null;
};
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
    <template #actions>
      <v-button :disabled="!uploadRef" @click="handleUpload">Upload</v-button>
    </template>

    <div class="wrapper">
      <input
        type="file"
        @change="
          {
            uploadRef = $event.target.files[0];
          }
        "
      />
    </div>
  </private-view>
</template>

<style scoped>
.wrapper {
  padding: var(--content-padding);
}
</style>
