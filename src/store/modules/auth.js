import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => api.login(),
  finalizeLogin: ({ commit }, hash) => {
    // qs.parse = Get an object from a query string || qs.stringify = create a query string from an object
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/'); // Send the user back to the homepage
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');

    // If we were in the home page, simply reload, otherwise redirect us there.
    if (location.href === 'http://localhost:8081/') {
      location.reload();
    } else {
      router.push('/');
    }
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default { state, getters, actions, mutations };
