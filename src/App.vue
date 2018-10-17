<template>
  <div id="app">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-container class="" slot="default">
        <mu-button small color="secondary"
         :to="{ path:'today', query: { category: item } }"
         v-for="item in this.$store.state.today.category" :key="item">{{item}}</mu-button>
      </mu-container>
      <!-- <mu-menu slot="right">
        <mu-button flat>MENU</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 1</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 2</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu> -->
    </mu-appbar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <mu-container class="button-wrapper">
      <mu-button color="primary" v-on:click="test">test</mu-button>
    </mu-container>
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
      a: 1
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    // console.log('a is: ' + this.a)
    // console.log( 2 )
    this.$store.dispatch("getToday");
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

<style scoped>
.container {
  overflow: scroll;
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
