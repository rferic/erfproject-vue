<template>
  <div class="container">
    <h1 class="auth__title">ERFProject</h1>
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <div class="box auth__box">
          <h2 class="auth__title mb-3">Login</h2>
          <div class="field">
            <div class="control">
              <input
                v-model="email"
                id="email"
                class="forms__input"
                :class="{'is-invalid': errors.email }"
                placeholder="Email..."
                type="email"
              />
              <p class="help is-danger">
                <span v-if="errors.email">{{ errors.email[0] }}</span>
                &nbsp;
              </p>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                v-model="password"
                id="password"
                class="forms__input"
                :class="{'is-invalid': errors.password }"
                placeholder="Password..."
                type="password"
              />
              <p class="help is-danger">
                <span v-if="errors.password">{{ errors.password[0] }}</span>
                &nbsp;
              </p>
            </div>
          </div>
          <div class="field">
            <label class="checkbox" for="remember_me">
              <input v-model="remember_me" id="remember_me" type="checkbox">
              Remember me
            </label>
          </div>
          <hr/>
          <div class="field has-text-centered">
            <button class="btn btn-primary" @click="attemptLogin">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  layout: 'auth',
  data () {
    return {
      email: '',
      password: '',
      remember_me: false,
      errors: []
    }
  },
  computed: {
    ...mapGetters({
      logged: 'auth/logged'
    })
  },
  watch: {
    logged () {
      this.redirectIfIsLogged()
    }
  },
  created () {
    this.redirectIfIsLogged()
  },
  methods: {
    async attemptLogin () {
      const { status, errors } = await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
        remember_me: this.remember_me
      })

      if ( status === 202 ) {
        await this.$store.dispatch('auth/updateMe')
      } else {
        this.errors = errors
      }
    },
    redirectIfIsLogged () {
      if ( this.logged ) {
        this.$router.push({ name: 'index' })
      }
    }
  }
}
</script>
