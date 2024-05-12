import { defineModule } from '@directus/extensions-sdk';
import { User } from '@directus/types';
import ModuleComponent from './module.vue';
import ExportComponent from './routes/export.vue';
import ImportComponent from './routes/import.vue';

export default defineModule({
  id: 'data',
  name: 'Import/Export',
  icon: 'box',
  routes: [
    {
      path: '',
      component: ModuleComponent,
    },
    {
      path: 'import',
      component: ImportComponent,
    },
    {
      path: 'export',
      component: ExportComponent,
    },
  ],
  hidden: false,
  preRegisterCheck(user: User) {
    const adminAccess = user.role?.admin_access;

    if (adminAccess) return adminAccess;
    return false;
  },
});
