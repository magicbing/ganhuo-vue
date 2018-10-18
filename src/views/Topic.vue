<template>
  <div class="topic">
    {{$store.state.categories.results[0]['_id']}}
    {{$route.params.category}} + 
    {{$route.query.en_name}}
    <h1>This is topic vue</h1>
    {{$store.state.subcategories.results[0]['title']}}
    <mu-container class="button-wrapper">
    <mu-avatar v-for="item in this.$store.state.subcategories.results" :key="item._id">
      <img v-if="item.icon" :src="item.icon">
      <img v-else title="" :alt="item.title">
    </mu-avatar>
      <!-- <mu-button flat -->
      <!-- </mu-button> -->
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
    this.$store.dispatch("getSubcategories", this.$route.query.en_name);
  }
};
</script>
<style lang="less" scope>
.topic {
  width: 100vw;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.button-wrapper {
  text-align: center;
  .mu-avatar {
    margin: 5px;
  }
}
</style>