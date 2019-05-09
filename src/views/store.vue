<template>
  <div>
    <a-input v-model="inputValue" @input="emitValue"></a-input>
    {{ inputValue }} -> last letter is -> {{ inputValueLastLetter }}
    <a-show :content="inputValue"></a-show>
    <p>appName: {{ appName }}</p>
    <p>appNameWidthVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}</p>
    <p>userName the first Letter is : {{ firstLetter }}</p>
    <button @click="changeAppNamess">修改appName</button>
    <p>appVersion {{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
    <button @click="callAction">调用action</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '@/components/AInput'
import AShow from '@/components/AShow'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
    /* ...mapState([
      'appName',
      'userName',
      'appVersion'
    ]), */
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
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
    /* appName: {
      set: function (newVal) {
        this.appName = newVal + 'new'
      },
      get: function () {
        return this.appName + 'newHH'
      }
    }, */
    inputValueLastLetter () {
      let len = this.inputValue.length
      console.log('len', len)
      return this.inputValue.substring(len - 1, len)
    }
  },

  methods: {
    ...mapMutations([
      'changeAppName',
      'set_user_name'
    ]),
    emitValue (val) {
      console.log(val)
    },
    changeAppNamess () {
      // this.appName = 'new Name'
      // this.$store.commit('changeAppName', 'sherlock holmes')
      /* this.$store.commit({
        type: 'changeAppName',
        appName: 'sherlock holmes'
      }) */
      // this.changeAppName('sherlock holmes')
      this.changeAppName({
        appName: 'sherlock holmes'
      })
      this.$store.commit('set_app_version')
    },
    changeUserName () {
      this.set_user_name('雪飘人间')
    },
    ...mapActions([
      'updateAppName'
    ]),
    callAction () {
      this.updateAppName()
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    }
  }
}
</script>
