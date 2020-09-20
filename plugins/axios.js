export default function ({ app, $axios, store }) {
  $axios.onRequest(config => {
    if (
      config.headers['Content-Type'] !== 'application/x-www-form-urlencoded' &&
      config.headers['Content-Type'] !== 'multipart/form-data' &&
      (config.method === 'post' || config.method === 'put' || config.method === 'delete')
    ) {
      config.headers['Content-Type'] = 'application/json'
      config.headers['Accept'] = 'application/json'
    }

    if ( store.state.auth.access_token ) {
      config.headers.common['Authorization'] =  `Bearer ${store.state.auth.access_token}`;
    }
  })
}
