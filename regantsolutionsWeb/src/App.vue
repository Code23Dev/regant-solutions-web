<template>
  <div id="app">
    <div id="nav">
      <router-link to="/log-in" v-if="!finished || !isLogin"/>
      <div v-if="isLogin && finished">
        <div>home page</div>
      </div>

    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      finished: false,
      isLogin: true
    }
  }
}
</script>

<style>

</style>
