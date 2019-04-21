<template>
  <div>
    <a-input v-model="inputValue" @input="emitValue"></a-input>
    {{ inputValue }} -> last letter is -> {{ inputValueLastLetter }}
    <a-show :content="inputValue"></a-show>
    <p>appName: {{ appName }}</p>
    <p>appNameWidthVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}</p>
    <p>userName the first Letter is : {{ firstLetter }}</p>
  </div>
</template>

<script>
import AInput from '@/components/AInput'
import AShow from '@/components/AShow'
import { mapState, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    ...mapState([
      'appName',
      'userName'
    ]),
    /* ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }), */
    /* ...mapState({
      // appName: state => state.appName,
      userName: state => state.userName
    }) */
    /* ...mapState('user', {
      // appName: state => state.appName,
      userName: state => state.userName
    }), */
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    /* ...mapGetters('user', [
      'firstLetter'
    ]), */
    /* firstLetter () {
      return this.userName.substr(0, 1)
    }, */
    /* appName () {
      return this.$store.state.appName
    }, */
    /* appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    }, */
    /* appName () {
      return this.$store.state.appName
    },
    userName () {
      return this.$store.state.user.userName
    } */
    inputValueLastLetter () {
      let len = this.inputValue.length
      console.log('len', len)
      return this.inputValue.substring(len - 1, len)
    }
  },

  methods: {
    emitValue (val) {
      console.log(val)
    }
  }
}
</script>
