<script lang="ts" setup>
import { Collection } from '@directus/types';
import { ref } from 'vue';

const value = ref<string>();
const props = defineProps<{
  collections: Collection[];
}>();

const items = props.collections.map((collection: any) => {
  const icon = collection.meta?.icon;
  const value = collection.collection;
  const text = collection.collection;
  return { icon, value, text };
});
</script>

<template>
  <VFancySelect v-model="value" :items="items" :value="value" />
</template>
