import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  fetchImages: async ({ rootState, commit }) => {
    const res = await api.fetchImages(rootState.auth.token);
    commit('setImages', res.data.data);
  },
  uploadImages: async ({ rootState }, images) => {
    // 1) Get the access token
    const { token } = rootState.auth;

    // 2) Call our API module to perform the upload
    await api.uploadImages(images, token);

    // 3) Redirect our user to the Gallery
    return router.push('/');
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default { state, getters, actions, mutations };
