<template>
  <li>
    {{id}} : {{ title }}
    <button v-on:click="$emit('remove1')">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String
  }
}
</script>
