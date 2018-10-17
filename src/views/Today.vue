<template>
  <mu-grid-list class="gridlist-demo">
    <mu-sub-header>每日推荐</mu-sub-header>
    <mu-grid-tile v-for="tile in results[category]" :key="tile._id">
      <img v-if="tile.images" :src="tile.images[0]">
      <span slot="title">{{tile.desc}}</span>
      <span slot="subTitle">time <b>{{tile.publishedAt}}</b></span>
      <mu-button slot="action" icon>
        <mu-icon value="star_border"></mu-icon>
      </mu-button>
    </mu-grid-tile>
  </mu-grid-list>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      category: this.$route.query.category,
      results: this.$store.state.today.results
    };
  },
  created: function() {
    console.log(this.$store.state.today.category);
  },
  methods: {
    test: function() {
      // console.log(this.$store.state.today);
      console.log(this.$route.query.category);
    }
  }
};
</script>

<style scope>
.gridlist-demo{
  width: auto;
  /* height: 450px; */
  overflow-x: hidden;
  overflow-y: auto;
}
</style>