import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({
      auth: state.auth
    })
  }).plugin(store);
}
