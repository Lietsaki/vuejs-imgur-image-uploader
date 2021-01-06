<template>
  <div class="dropper">
    <input type="file" @change="uploadImages($event.target.files)" multiple accept=".jpg, .gif, .png" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  methods: {
    ...mapActions(['uploadImages']),
  },
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  transition: 0.5s;
}

.dropper:hover {
  background-color: #eee;
  transition: 0.5s;
}

input {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
</style>