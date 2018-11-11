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
      name: 'light',
      state: false
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
