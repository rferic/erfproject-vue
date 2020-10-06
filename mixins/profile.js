export default {
  computed: {
    avatarPrimary () {
      if ( this.$auth.loggedIn && this.$auth.user ) {
        for ( const socialAccount of this.$auth.user.social_accounts ) {
          if ( socialAccount.provider === 'github' ) {
            return socialAccount.data.avatar_url
          }
        }
      }

      return null
    }
  }
}
