export default function ({ route, store, env, $axios, $auth, redirect }) {
  if ( route.query.p && route.query.t ) {
    $auth.login({
      data: {
        type: 'social',
        provider: route.query.p,
        token: route.query.t
      }
    })
      .catch(err => {
        console.log(err.response.data.errors)
        //errors = err.response.data.errors
      })
  }
}
