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
          <component
            v-bind:is="sensor.type"
            v-bind:name="sensor.name"
            v-bind:stateTopic="sensor.stateTopic"
            v-bind:commandTopic="sensor.commandTopic"
          >
          </component>
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
          type: 'light',
          stateTopic: 'teletask/relay/47',
          commandTopic: 'teletask/relay/47/set'
        },
        {
          name: 'test2',
          type: 'light',
          stateTopic: 'teletask/relay/48',
          commandTopic: 'teletask/relay/8/set'
        }
      ]
    }
  }
}
</script>

<style>
</style>
