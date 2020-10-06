<template>
  <span>
    <figure
      v-if="isImage"
      class="image"
      :class="`is-${size}x${size}`"
    >
      <img
        :src="value"
        :title="title"
        class="is-rounded"
      />
    </figure>
    <strong
      v-else
      class="tag is-rounded is-size-7"
      :class="`is-${size}x${size}`"
    >
      {{ value.charAt(0).toUpperCase() }}
    </strong>
  </span>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    value: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 32
    },
    isImage: {
      type: Boolean,
      required: false,
      default: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
