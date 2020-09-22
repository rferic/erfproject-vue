<template>
  <div class="container">
    <div>
      <h1 class="title">
        ERFProject
      </h1>
      <h2>Welcome {{ $auth.user.name }}</h2>
      <logout />
    </div>
  </div>
</template>

<script>
  import Logout from '@/components/Logout'

  export default {
    components: { Logout },
    middleware: ['auth']
  }
</script>
