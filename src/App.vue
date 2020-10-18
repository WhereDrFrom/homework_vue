<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/downloader">Downloader</router-link> -->
      <!-- <router-link :to ="Profile">showMessage</router-link> | -->
      <!--<router-link :to ="/user/+userId">User</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
 const file = {path: '/about',query : {news: ['今天有爆炸','明天没有','后天就nm离谱'], name : 'Yi Yanglu', message: ['break today','tomorrow nothing','and fuck']} }

export default {
  name: 'App',
  data() {
     return {
       userId: 'Yi Yanglu',
       Profile: file
     }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
