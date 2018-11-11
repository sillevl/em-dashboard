<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo center">Dashboard</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col s6 m4 l3" v-for="sensor in sensors" v-bind:key="sensor.name">
          <component v-bind:is="sensor.type"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Light from './components/Light.vue'

export default {
  name: 'app',
  components: {
    Light
  },
  data: function () {
    return {
      sensors: [
        {
          name: 'test',
          type: 'light',
          stateTopic: 'teletask/relay/46',
          commandTopic: 'teletask/relay/46/set'
        },
        {
          name: 'test1',
          type: 'light'
        },
        {
          name: 'test2',
          type: 'light'
        }
      ]
    }
  }
}
</script>

<style>
</style>
