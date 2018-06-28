<template>
  <div id="app">
    <Entrance />
    <Showcase v-for="field in sharedState.seedData" v-show="field.active" :key="field.id" :field="field"/>
  </div>
</template>

<script>
import Showcase from './components/Showcase.vue'
import Entrance from './components/Entrance.vue'
import { store } from './store.js';

export default {
  name: 'app',
  data () {
    return {
      sharedState: store.state
    }
  },
  props: ['this.sharedState'],
  components:{
    Showcase,
    Entrance
  }
}
</script>

<style>
</style>
