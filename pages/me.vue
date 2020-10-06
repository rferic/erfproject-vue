<template>
  <div>
    <header-layout
      v-if="$auth.user"
      :title="$auth.user.name"
      :subtitle="$auth.user.email"
    />
  </div>
</template>

<script>
import HeaderLayout from '@/components/Layout/Header'

export default {
  name: 'me',
  middleware: ['auth'],
  components: { HeaderLayout }
}
</script>
