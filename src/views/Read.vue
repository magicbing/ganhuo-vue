<template>
  <mu-grid-list class="topic" style="margin: 0">
    <!-- {{ 'urlHash: ' + urlHash }} -->
  <!-- {{$store.state.today.results.iOS[0]}} -->
    <mu-sub-header>推荐read + {{$route.params.category}}</mu-sub-header>
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <mu-grid-tile :cols="2" :rows="2"
       v-for="tile in $store.state.read.readdata" :key="tile._id"
      >
        <img v-if="tile.images" :src="tile.images[0]">
        <img v-else title="暂无图片">
        <span slot="title"><a :href="tile.url" target="_blank">{{tile.desc}}</a></span>
        <span slot="subTitle">time <b>{{tile.publishedAt}}</b></span>
      </mu-grid-tile>
    </mu-load-more>
  </mu-grid-list>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: "",
  props: {},
  created() {
    this.$store.dispatch("getReaddata", {
      id: this.$route.params.category,
      page: 1
    });
  },
  beforeRouteUpdate(to, from, next) {
    if ( document.querySelector('.topic') ) {
        document.querySelector('.topic').scrollTop = 0
    }
    next(vm => {
      console.log(vm + "route.js");
    });
    console.log("beforeRouteUpdate... readvue");
    this.$store.dispatch("getReaddata", {
      id: this.$route.params.category,
      page: 1
    });
  },
  data() {
    return {
      refreshing: false,
      loading: false,
      results: {}
    };
  },
  methods: {
    // ...mapMutations(['getReaddata']),
    refresh () {
      this.refreshing = true;
      // this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        console.log('fn refresh..')
      }, 700)
    },
    load () {
      console.log('load more 1')
      this.loading = true;
      this.$store.dispatch("getReaddata", {
        id: this.$route.params.category,
        page: this.$store.state.read.pageRead + 1
      }).then( () => this.loading = false )
      // setTimeout(() => {
      //   this.loading = false;
      //   console.log('load more')
      //   // this.num += 10;
      // }, 700)
    }
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
  }
};
</script>

<style scope>
.topic {
  width: 100vw;
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: auto;
}
.mu-load-more {
  width: 100vw;
}
div.mu-grid-tile-titlebar {
  background-color: rgba(0,0,0,.7);
}
.mu-grid-tile>img {
  width: 100%;
}
</style>