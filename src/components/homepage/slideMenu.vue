<template>
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
      <!-- <mu-list-item  @click="open = false" button> -->
      <mu-list-item @click="$emit('closeSlideMenu')" button>
        <mu-button color="info" flat :ripple="false">
          <mu-icon value="arrow_back" left></mu-icon>关闭侧边栏
        </mu-button>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
export default {
  props: {
    open: Boolean
  },
  data() {
    return {
      a: 1,
      docked: false,
      // open: false,
      position: "left"
    };
  }
}
</script>
