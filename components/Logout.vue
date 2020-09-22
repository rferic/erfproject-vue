<template>
  <button class="button is-primary is-small" @click="$auth.logout()">
    Logout
  </button>
</template>

<script>
export default {
  name: 'Logout'
}
</script>
