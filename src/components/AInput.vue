<template>
  <div>
    <input type="text" @input="handleInput" :value="value"/>
  </div>
</template>

<script>
export default {
  name: 'AInput',
  porps: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    }
  }
}
</script>
