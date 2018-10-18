<template>
  <mu-grid-list class="gridlist-demo">
  <!-- {{$store.state.today.results.iOS[0]}} -->
  <!-- {{results[$route.params.category][0]['_id']}} -->
    <mu-sub-header>每日推荐</mu-sub-header>
    <mu-grid-tile v-for="tile in $store.state.today.results[$route.params.category]" :key="tile._id">
      <img v-if="tile.images" :src="tile.images[0]">
      <img v-else title="" :alt="tile.desc">
      <span slot="title">{{tile.desc}}</span>
      <span slot="subTitle">time <b>{{tile.publishedAt}}</b></span>
      <!-- <mu-button slot="action" icon>
        <mu-icon value="star_border"></mu-icon>
      </mu-button> -->
    </mu-grid-tile>
  </mu-grid-list>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      // category: this.$route.query.category,
      // category: this.$route.params.category,
      results: {}
    };
  },
  computed: {
    count() {
      return this.$store.state.today.results;
    }
  },
  watch: {
    count: {
      handler: function(val) {
        this.results = val; //收货人名字
      },
      deep: true
    }
  },
  methods: {}
};
</script>

<style scope>
.gridlist-demo {
  width: 100vw;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>