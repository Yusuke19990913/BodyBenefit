<template>
  <div class="ui secondary pointing grey inverted massive menu" style="margin-bottom: 0px">
    <a class=item @click="switchPage('Home')" v-bind:class="{active: current=='Home'}">
      <img src="../assets/logo.png">
    </a>
    <div class="ui grey inverted right menu">
      <a class=item @click="switchPage('Login')" v-bind:class="{active: current=='Login'}">ログイン</a>
      <a class=item @click="switchPage('Signup')" v-bind:class="{active: current=='Signup'}">新規登録</a>
      <a class=item @click="switchPage('Profile')" v-bind:class="{active: current=='Profile'}">プロフィール</a>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Menu',
    computed: {
      // 計算した結果を変数として利用したいときはここに記述する
      current() {
        return this.$route.name;
      }
    },
    methods: {
      // Vue.jsで使う関数はここで記述する
      switchPage(pageName) {
        if (this.$route.name === pageName) {
          return;
        }
        this.$router.push({ name: pageName });
      },
    },
  }
</script>
<style scoped>
</style>
