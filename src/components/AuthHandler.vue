<template>
  <div>
    <p>Logging in, please wait...</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  mounted() {
    this.finalizeLogin(window.location.hash);
  },
};
</script>