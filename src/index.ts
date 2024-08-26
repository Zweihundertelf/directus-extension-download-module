import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
  id: 'data',
  name: 'Import/Export',
  icon: 'box',
  routes: [
    {
      path: '',
      component: ModuleComponent,
    },
  ],
});
