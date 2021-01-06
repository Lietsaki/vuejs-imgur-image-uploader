import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '83aa4cf1f0cfcb7';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  },
  async uploadImages(images, token) {
    const promises = Array.from(images).map(img => {
      const formData = new FormData();
      formData.append('image', img);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
    });

    await Promise.all(promises);
  }
};
