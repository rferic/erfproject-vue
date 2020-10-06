<template>
  <div class="default__main">
    <menu-layout />
    <nuxt />
  </div>
</template>

<script>
  import MenuLayout from '@/components/Layout/Menu/Index'

  export default {
    name: 'DefaultLayout',
    components: { MenuLayout }
  }
</script>
