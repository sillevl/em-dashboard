<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text center-align">
      <span class="card-title">{{name}}</span>
      <div>
        <i class="material-icons" v-bind:class="lightClass" @click.prevent="toggle">lightbulb</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: false
    }
  },
  props: {
    name: {
      default: 'Light',
      type: String
    },
    stateTopic: {
      type: String
    },
    commandTopic: {
      type: String
    }
  },
  methods: {
    toggle: function () {
      this.state = !this.state
    }
  },
  computed: {
    lightClass: function () {
      return this.state ? 'yellow-text accent-4' : 'grey-text'
    },
    stateString: function () {
      return this.state ? 'on' : 'off'
    }
  },
  watch: {
    state: function (newValue, oldValue) {
      console.log(newValue)
      this.$mqtt.publish(this.commandTopic, this.stateString)
    }
  },
  mounted () {
    if (this.stateTopic) {
      this.$mqtt.subscribe(this.stateTopic)
    }
  },
  mqtt: {
    '#': function mqttResponse (data, topic) {
      if (topic === this.stateTopic) {
        const value = new TextDecoder('utf-8').decode(data)
        console.log(topic, value)
        this.state = (value.toString().toLowerCase() === 'on')
      }
    }
  }
}
</script>

<style scoped>
  .card i {
    font-size: 8vw;
    cursor: pointer;
  }
</style>
