export const state = () => ({
  access_token: null,
  expires_at: null,
  me: null
})

export const getters = {
  logged: (state) => {
    return !!state.access_token && !!state.me
  }
}

export const mutations = {
  LOGIN ( state, { access_token, expires_at } ) {
    state.access_token = access_token
    state.expires_at = expires_at
  },
  LOGOUT ( state ) {
    state.access_token = null
    state.expires_at = null
    state.me = null
  },
  UPDATE_ME ( state, me ) {
    state.me = me
  }
}

export const actions = {
  async login ({ commit }, { email, password, remember_me }) {
    try {
      const response = await this.$axios.post('auth/login', { email, password, remember_me })
      const { status, data } = response

      if ( status === 202 ) {
        const { access_token, expires_at } = data.data
        commit('LOGIN', { access_token, expires_at })
        return { status, access_token, expires_at }
      }
    } catch ({ response }) {
      const { status, data } = response
      const { message, errors } = data
      return { status, message, errors }
    }
  },
  async logout ({ commit }) {
    try {
      const { status } = await this.$axios.get('auth/logout')
      commit('LOGOUT')
      return { status }
    } catch ({ response }) {
      const { status, data } = response
      const { message, errors } = data
      return { status, message, errors }
    }
  },
  async updateMe ({ commit }) {
    try {
      const { status, data } = await this.$axios.get('me')
      commit('UPDATE_ME', data.data)
      return { status, data }
    } catch ({ response }) {
      const { status, data } = response
      const { message, errors } = data
      return { status, message, errors }
    }
  }
}
