<template>
  <div>&nbsp;</div>
</template>

<script>
export default {
  name: 'profile',
  async created () {
    if ( this.$route.query.p && this.$route.query.t && !this.$auth.loggedIn ) {
      const provider = this.$route.query.p
      const token = this.$route.query.t

      await this.$router.replace({ query: null })

      await this.$auth.login({
        data: {
          type: 'social',
          provider,
          token,
        }
      })
        .catch(err => {
          this.$router.push('/login')
        })
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
