<template>
  <div>
    <header-layout
      title="ERFProject"
      :subtitle="`Welcome ${$auth.user ? $auth.user.name : ''}`"
    />
  </div>
</template>

<script>
import HeaderLayout from '@/components/Layout/Header'

export default {
  middleware: ['auth'],
  components: { HeaderLayout }
}
</script>
