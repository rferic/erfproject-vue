export default {
  methods: {
    async socialLoginRequest ( provider ) {
      const { data } = await this.$axios.$post(`/auth/social-login/${provider}/vue`)
      window.location.href = data
    }
  }
}
