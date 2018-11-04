<template>
  <div class="topic">
    {{ 'urlHash: ' + this.urlHash }}
    <!-- {{$store.state.subdata}} -->
    <mu-container class="button-wrapper">
      <mu-avatar v-for="item in this.$store.state.subcategories.results" :key="item._id"
      @click="changeSub(item.id)">
        <img v-if="item.icon" :src="item.icon">
        <img v-else title="" :alt="item.title">
      </mu-avatar>
    </mu-container>
    <mu-grid-list class="">
        <mu-grid-tile v-for="tile in $store.state.subdata" :key="tile._id"
         title-position="bottom" action-position="left"
         :rows="1" :cols="1">
          <img v-if="tile.cover" :src="tile.cover"/>
          <img v-else alt="暂无图片">
          
          <span slot="title">
            <a v-on:click="showContent(tile._id)">{{tile.title}}</a>
            <!-- <a :href="tile.url" target="_blank">{{tile.title}}</a> -->
          </span>

          <span slot="subTitle">time <b>{{tile.created_at}}</b></span>
        </mu-grid-tile>
      </mu-grid-list>

      <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary" :disabled="loadmore_btn"
         v-show="$store.state.subdata.length !== 0"
         @click="loadmore($store.state.id)">
          加载更多...{{$store.state.id}} + {{$store.state.pageTopic}}
        </mu-button>
      </mu-flex>

      <topic-content v-show="topicC.show" v-bind:cid="topicC.cid" v-on:closeTopicC="closeTopicC"></topic-content>
  </div>
</template>

<script>
import TopicContent from '@/components/topic/TopicContent.vue'

export default {
  name: "",
  components: {
    TopicContent
  },
  data() {
    return {
      topicC: {
        show: false,
        cid: "",
      },
      tempSubId: "",
      loadmore_btn: false,
      urlHash: window.location.hash
    };
  },
  created() {
    this.$store.dispatch("getSubcategories", this.$route.query.en_name)
      .then((res) => this.$store.dispatch("getSubdata", {id: res.results[0].id, page: 1}))
    // this.$store.dispatch("getSubdata", {id, page: 1});
  },
  mounted() {
    console.log(this.$store.state.subcategories.results);
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm + "route.js");
    });
    console.log(this.$route.params.category);
    // TODO: 进入topic页面加载第一个sub分类的内容
    this.$store.dispatch("getSubcategories", this.$route.query.en_name)
      .then((res) => this.$store.dispatch("getSubdata", {id: res.results[0].id, page: 1}));
    this.urlHash = window.location.hash
  },
  methods: {
    closeTopicC() {
      console.log('closeTopicC')
      this.topicC.show = false
    },
    showContent(cid) {
      console.log(cid)
      this.topicC.cid = cid
      this.topicC.show = true
    },
    changeSub(id) {
      this.loadmore_btn = false
      console.log(id);
      this.$store.dispatch("getSubdata", { id, page: 1 });
    },
    loadmore(id) {
      this.loadmore_btn = true;
      console.log(id);
      console.log(this.$store.state.pageTopic);
      this.$store.dispatch("getSubdata", {
        id,
        page: this.$store.state.pageTopic + 1
      }).then(()=> this.loadmore_btn = false)
      // this.loadmore_btn = false;
    }
  }
};
</script>
<style lang="less" scope>
.topic {
  width: 100vw;
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: scroll;
}
.button-wrapper {
  text-align: center;
  margin-bottom: 1em;
  .mu-avatar {
    margin: 5px;
  }
}
</style>