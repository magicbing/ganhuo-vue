<template>
  <div id="topic-c-backg" v-on:click="$emit('closeTopicC')">
    <div id="topic-c-content" v-html="getSubdataConent(cid)">
    <!-- <div id="topic-c-content" v-html="this.$store.getters.getSubdataConent(cid)"> -->
      <!-- {{ cidcontent }} -->
      <!-- {{this.$store.getters.getSubdataConent(cid)}} -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    cid: String
  },
  computed: {
    ...mapGetters(['getSubdataConent'])
  }
};
</script>

<style lang="less" scoped>
#topic-c-backg {
  background-color: rgb(80, 80, 80, 0.8);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
#topic-c-content {
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  width: 80vw;
  overflow-x: hidden;
  overflow-y: scroll;
  /deep/ img {
    max-height: 80vw;
    max-width: 80vw;
  }
  // /deep/ p{
  //   color: green;
  // }
}
</style>
