<template>
<div>
  <strong>
    this is slottest.vue
  </strong>
  <slot :data="slots"></slot>

  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>
<script>
export default {
  data() {
    return {
      slots: ['s1','s2','s3']
    }
  }
}
</script>
