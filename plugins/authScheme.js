import LocalScheme from '@nuxtjs/auth/lib/schemes/local'

export default class CustomScheme extends LocalScheme {
  async login (data) {
    const result = await this.$auth.request(
      data,
      this.options.endpoints.login
    )

    if ( result ) {
      if (this.options.tokenRequired) {
        const token = this.options.tokenType
          ? this.options.tokenType + ' ' + result
          : result


        //this.$auth.setToken(this.name, token)
        //this._setToken(token)
        this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, token)
      }

      return this.fetchUser()
    }
  }
}
