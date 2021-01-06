<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="image in allImages" :src="image.link" :key="image.id" />
    </div>
    <h2 v-else>Log in to get started</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Gallery',
  methods: {
    ...mapActions(['fetchImages']),
  },
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn']),
  },
  mounted() {
    if (this.$store.getters.isLoggedIn) {
      this.fetchImages();
    }
  },
};
</script>

<style scoped>
.image-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
