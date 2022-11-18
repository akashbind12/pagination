<template>
  <v-app>
    <TablePagination></TablePagination>
  </v-app>
</template>

<script>
import TablePagination from './components/TablePagination';

export default {
  name: 'App',
  components: {
    TablePagination,
  },

  data: () => ({
    //
  }),
};
</script>
