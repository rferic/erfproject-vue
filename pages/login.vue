<template>
  <div class="container">
    <h1 class="auth__title">ERFProject</h1>
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <div class="box auth__box">
          <h2 class="auth__title mb-3">Login</h2>
          <collapse-transition>
            <div v-show="!loginType || loginType === 'default'">
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
              <div class="field has-text-centered">
                <button class="btn btn-block btn-primary" @click="attemptLogin">
                  <span>Login</span>
                  <sync-loader :loading="loginType === 'default'" :color="whiteColor" size="8px"></sync-loader>
                </button>
              </div>
            </div>
          </collapse-transition>
          <collapse-transition>
            <div v-show="!loginType || loginType === 'github'" class="field has-text-centered">
              <hr>
              <button
                class="btn btn-github"
                :disabled="loginType"
                @click="loginWithGithub"
              >
                <fa :icon="['fab','github']" />
                <span>Github</span>
                <sync-loader :loading="loginType === 'github'" :color="whiteColor" size="8px"></sync-loader>
              </button>
            </div>
          </collapse-transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import socialAuthMixin from '@/mixins/socialAuth'

export default {
  name: 'login',
  layout: 'auth',
  components: { CollapseTransition, SyncLoader },
  mixins: [ socialAuthMixin ],
  data () {
    return {
      loginType: null,
      email: '',
      password: '',
      remember_me: false,
      errors: [],
      whiteColor: '#ffffff'
    }
  },
  created () {
    if ( this.$auth.loggedIn ) {
      this.$auth.logout()
    }
  },
  methods: {
    async attemptLogin () {
      this.loginType = 'default'
      this.$auth.login({
        data: {
          type: 'default',
          email: this.email,
          password: this.password,
          remember_me: this.remember_me
        }
      })
        .catch(err => {
          this.errors = err.response.data.errors
          this.loginType = null
        })
    },
    async loginWithGithub () {
      this.loginType = 'github'
      try {
        await this.socialLoginRequest('github')
      } catch ( err ) {
        this.loginType = null
      }
    }
  }
}
</script>
