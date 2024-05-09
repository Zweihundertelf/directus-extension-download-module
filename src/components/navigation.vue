<template>
  <v-list nav>
    <v-list-item to="/data">
      <v-list-item-icon>
        <v-icon />
      </v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Import / Export Module" />
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list-item to="/data/import">
      <v-list-item-icon>
        <v-icon />
      </v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Import Data" />
      </v-list-item-content>
    </v-list-item>

    <v-list-item to="/data/export">
      <v-list-item-icon>
        <v-icon />
      </v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Export Data" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
