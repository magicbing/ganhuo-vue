<template>
  <mu-container class="" slot="default">
    <mu-button
     small color="secondary"
     :to="{ name:'read', params: { category: item } }"
     v-for="item in this.$store.state.read.category" :key="item"
    >
      {{item}}
    </mu-button>
  </mu-container>
</template>

<script>
export default {
  props: {}
}
</script>

<style scoped>
.container {
  overflow-x: scroll;
}
.container a {
  vertical-align: middle;
}
a.mu-inverse {
  color: #019688;
}
a.router-link-exact-active {
  color: #9c27b0;
}
div.mu-item-title {
  color: #212121;
}
/* div.mu-paper {
  background: linear-gradient(135deg, #e6ee9c, #81c784);
} */
</style>

