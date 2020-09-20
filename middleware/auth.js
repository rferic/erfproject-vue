export default async function ({ store, redirect }) {
  if ( !store.getters['auth/logged'] ) {
    return redirect('/login')
  }
}
