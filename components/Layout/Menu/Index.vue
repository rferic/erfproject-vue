<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item
        :to="{ path: '/' }"
        class="has-background-primary has-text-white"
        tag="router-link"
      >
        <span
          class="is-size-6"
          :class="`is-32x32`"
        >
          ERF<strong>Project</strong>
        </span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item
        v-if="$auth.loggedIn && $auth.user"
        tag="div"
      >
        <b-navbar-dropdown>
          <template slot="label">
            <avatar
              :value="avatarPrimary ? avatarPrimary : $auth.user.name.charAt(0)"
              :is-image="!!avatarPrimary"
              :title="$auth.user.name"
            />
            <span class="ml-2">{{ $auth.user.name }}</span>
          </template>
          <b-navbar-item
            :to="{ path: '/me' }"
            tag="router-link"
          >
            Profile
          </b-navbar-item>
          <b-navbar-item @click="$auth.logout()">
            Logout
          </b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Avatar from '@/components/Layout/Avatar'
import profile from '@/mixins/profile'

export default {
  name: 'Menu',
  components: {
    Avatar
  },
  mixins: [
    profile
  ]
}
</script>
