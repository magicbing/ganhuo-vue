<template>
  <div class="topic">
    <!-- {{$store.state.categories.results[0]['_id']}} -->
    {{$route.params.category}} + 
    {{$route.query.en_name}}
    <h1>This is topic vue</h1>
    <!-- {{$store.state.subdata}} -->
    <mu-container class="button-wrapper">
      <mu-avatar v-for="item in this.$store.state.subcategories.results" :key="item._id"
      @click="changeSub(item.id)">
        <img v-if="item.icon" :src="item.icon">
        <img v-else title="" :alt="item.title">
      </mu-avatar>
      <!-- <mu-button flat -->
      <!-- </mu-button> gridlist-demo -->
      
    </mu-container>
    <mu-grid-list class="">
        <mu-grid-tile v-for="tile in $store.state.subdata" :key="tile._id"
         title-position="bottom" action-position="left"
         :rows="1" :cols="1">
          <img v-if="tile.cover" :src="tile.cover"/>
          <img v-else alt="暂无图片">
          
          <span slot="title"><a :href="tile.url" target="_blank">{{tile.title}}</a></span>
          <span slot="subTitle">time <b>{{tile.created_at}}</b></span>
          
        </mu-grid-tile>
      </mu-grid-list>
      <!-- {{$store.state.subdata.length}} -->
      <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary" v-show="$store.state.subdata.length !== 0"
         @click="loadmore($store.state.id)">
          {{$store.state.id}}加载更多...{{$store.state.page}}
        </mu-button>
      </mu-flex>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      tempSubId: ''
    }
  },
  created() {
    this.$store.dispatch("getSubcategories", this.$route.query.en_name);
    // this.$store.dispatch("getSubdata", {id, page: 1});
  },
  mounted() {
    console.log(this.$store.state.subcategories.results)
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
    this.$store.dispatch("getSubcategories", this.$route.query.en_name)
    // this.data.tempSubId = this.$store.state.subcategories.results[0].id
    // this.changeSub(this.data.tempSubId)
      // .then(() => this.$store.dispatch("getSubdata", {id: this.$store.state.subcategories.results[0].id, page: 1}))
    
    // console.log(this.$store.state.subcategories.results[0].id + ' 62')
  },
  methods: {
    changeSub(id) {
      console.log(id);
      this.$store.dispatch("getSubdata", {id, page: 1});
    },
    loadmore(id) {
      console.log(id)
      console.log(this.$store.state.page)
      this.$store.dispatch("getSubdata", {id, page: this.$store.state.page + 1});
    }
  }
};
</script>
<style lang="less" scope>
.topic {
  width: 100vw;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
.button-wrapper {
  text-align: center;
  .mu-avatar {
    margin: 5px;
  }
}
</style>