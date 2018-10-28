<template>
  <li>
    {{id}} : {{ title }}
    <button v-on:click="$emit('remove1')">Remove</button>
    <button v-on:click="$emit('enlarge-text', 1)">fontsize+1em</button>
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
