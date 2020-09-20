<template>
  <button class="button is-primary is-small" @click="logout">
    Logout
  </button>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    async logout () {
      this.$store.dispatch('auth/logout').then(() => {
        window.location.href = '/'
      })
    }
  }
}
</script>
