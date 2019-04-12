<template>
  <div class="home">
<<<<<<< HEAD
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div> {{ food }} </div>
=======
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转</button>
    <button @click="handleClick('replace')">替换</button>
>>>>>>> 78251ab02406c6ed9290c342be3593af430c35ea
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  /* components: {
    HelloWorld
  }, */
<<<<<<< HEAD
  props: {
    food: {
      type: String,
      default: 'apple'
=======
  methods: {
    handleClick (type) {
      // this.$router.go(-1)
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'sherlock'
          }
          /* query: {
            name: 'lison'
          } */
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
>>>>>>> 78251ab02406c6ed9290c342be3593af430c35ea
    }
  }
}
</script>
