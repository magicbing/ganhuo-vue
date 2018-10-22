<template>
  <div id="app">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-container class="" slot="default">
        <mu-button small color="secondary"
         :to="{ name:'today', params: { category: item } }"
         v-for="item in this.$store.state.today.category" :key="item">{{item}}</mu-button>
      </mu-container>
      <!-- <mu-button flat small slot="right"><a href="#">to top</a></mu-button> -->
      <i class="mu-icon material-icons" slot="right"
       style="user-select: none;" @click="toTop()">arrow_upward</i>
    </mu-appbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->
    <router-view/>

    <!-- <mu-container class="button-wrapper">
      <mu-button color="primary" flat small v-on:click="test">
        test
      </mu-button>
    </mu-container> -->

    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <mu-list-item button @click="toTopic()"
         v-for="item in $store.state.categories.results" :key="item._id"
         :to="{ name:'topic', params: { category: item.name }, query: { en_name: item.en_name } }">
          <mu-list-item-title>{{ item.name }}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button
         :to="{ name:'home' }">
          <mu-list-item-title color="info">Home</mu-list-item-title>
        </mu-list-item>
        <mu-list-item  @click="open = false" button>
          <mu-button color="info" flat :ripple="false">
            <mu-icon value="arrow_back" left></mu-icon>关闭侧边栏
          </mu-button>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    msg: String
  },
  data() {
    return {
      a: 1,
      docked: false,
      open: false,
      position: "left"
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    // console.log('a is: ' + this.a)
    console.log(this.$store.state.today.category);
    this.$store.dispatch("getToday");
    this.$store.dispatch("getCategories");
  },
  mounted: function() {
    console.log('mounted app.vue')
  },
  methods: {
    toTopic() {
      console.log('toTopic')
      this.$store.state.subdata = []
      this.open = false;
    },
    test: function() {
      // console.log(this.$store.state.today);
      console.log(this.$route.query.category);
    },
    toTop() {
      console.log('toTop')
      if ( document.querySelector('.topic') ) {
        document.querySelector('.topic').scrollTop = 0
      }
    }
  }
};
</script>

<style scoped>
.container {
  overflow-x: scroll;
}
.container a {
  vertical-align: middle;
}
/* 下面是cli的css */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
div.mu-paper {
  background: linear-gradient(135deg, #e6ee9c, #81c784);
  /* background-color: #e6ee9c; */
}
</style>
