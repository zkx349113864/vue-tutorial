<template>
  <div class="email">
    email: asdf@123.com
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    // debugger
    // console.log('bus对象', this.$bus)
    /* this.$on('on-click', mes => {
      console.log(mes)
    }) */
  }

}
</script>

<style lang="scss" scoped>
.email {
  border: 1px solid green;
}
</style>
