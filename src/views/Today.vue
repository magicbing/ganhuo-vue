<template>
  <mu-grid-list class="topic" style="margin: 0">
    <!-- {{ 'urlHash: ' + urlHash }} -->
  <!-- {{$store.state.today.results.iOS[0]}} -->
  <!-- {{results[$route.params.category][0]['_id']}} -->
    <!-- <mu-sub-header>每日推荐</mu-sub-header> -->
    <mu-grid-tile v-for="tile in $store.state.today.results[$route.params.category]" :key="tile._id">
      <img v-if="tile.images" :src="tile.images[0]">
      <img v-else title="" :alt="tile.desc">
      <span slot="title"><a :href="tile.url" target="_blank">{{tile.desc}}</a></span>
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
.topic {
  width: 100vw;
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>