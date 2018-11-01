<template>
  <div class="home">
    <HelloWorld msg="head" v-on:emit2father="getemit"/>
    <h1 @click="thanks">thanks</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import func from "./vue-temp/vue-editor-bridge";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    getemit: function(par) {
      console.log(par);
    },
    thanks() {
      this.$eventHub.$emit('thanksfn', 'paramsthanks')
    }
  }
};
</script>
