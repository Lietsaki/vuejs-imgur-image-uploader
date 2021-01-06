<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item"> Image Storage </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link class="item" to="/">Gallery</router-link>
        <router-link class="item" to="/upload">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <a class="ui item" @click="login" href="#" v-else> Log in </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>