<template>
  <div class="tel">
    tel: 16564645646
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

<style lang="scss" scoped>
.tel {
  border: 1px solid red;
}
</style>
