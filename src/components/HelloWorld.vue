<template>
  <div class="hello">
    <h1 @click="toFather">{{ msg }}</h1>
    <p @click="move">本应用属于资讯集合类应用，上方top栏是今日推荐，左上角进入'闲读'栏目，内部有不同资讯网站的新鲜事</p>
    <p>技术使用vue + vuex + vue-router + muse-ui</p>
    <p>开放API来自干货集中营(gank.io/api)</p>
    <p @click="test">此应用仅供学习，版权归属各网站</p>
    <input type="text" v-focus>
    <!-- <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
/* var mixin = {
  methods: {
    test() {
      console.log('this is test fn')
    }
  }
} */

export default {
  directives: {
    focus: {
      // 指令的定义
      bind: function(){console.log('directives bind')},
      inserted: function(el) {
        el.focus();
      },
      update: function(){console.log('directives update')},
      componentUpdated: function(){console.log('componentUpdated')},
      unbind: function(){console.log('directives unbind')}
    }
  },
  // mixins: [mixin],
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    this.$eventHub.$on("thanksfn", this.move);
  },
  methods: {
    test() {
      console.log("default test fn");
    },
    toFather: function() {
      // console.log('toFather')
      this.$emit("emit2father", "params");
      // this.$root.eventHub.$emit('emit2bro', 'params')
    },
    move(ab) {
      console.log("发送");
      console.log(ab);
      console.log("我获取到参数");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
