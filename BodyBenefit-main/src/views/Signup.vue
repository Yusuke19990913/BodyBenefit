<template>
  <div>
    <div class="ui main container">
      <div class="ui grid">
        <div class="three wide column"></div>
        <div class="three wide column"></div>
        <div class="three wide column"></div>
      </div>
      
      <h2>新規登録</h2>
      <div class="ui segment">
        <form class="ui large form" @submit.prevent="submit">
          <p>メールアドレス</p>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="メールアドレス" v-model="user.address">
            </div>
          </div>
          <p>パスワード</p>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="パスワード" v-model="user.password">
            </div>
          </div>
          <p>パスワード確認</p>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="パスワード確認">
            </div>
          </div>
          <button class="ui huge fluid button" type="submit">
            新規登録
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { baseUrl } from '@/assets/config.js';
  import axios from "axios";

  export default {
    name: 'Signup',
    data() {
      return {
        user: {
          address: null,
          password: null
        },
        err: null
      };
    },
    computed: {

    },
    methods: {
      submit() {
        /*
        if (!this.user.address) {
          console.log("undefined address");
          this.err = "アドレスを入力してください";
          return;
        } else if (!this.user.password) {
          console.log("undefined password");
          this.err = "パスワードを入力してください";
          return;
        }
        */
        console.log("signup");
        const requestBody = {
          address: this.user.address,
          password: this.user.password
        };
        axios.post(baseUrl + "/user/signup", requestBody)
          .then((response) => {
            // 成功したときの処理はここに記述する
            console.log(response.data);
            window.localStorage.setItem('token', response.data.token);
            this.$router.push({ name: "Profile" });
          })
          .catch(() => {
            // レスポンスがエラーで返ってきたときの処理はここに記述する
            console.log("err");
          });
      },
      created() {
        axios.post(baseUrl + "/user/signup")
          .then((response) => {
            console.log("created");
            this.user.address = response.data.address;
            this.user.password = response.data.password;
          })
          .catch(() => {
            this.err = "予期せぬエラーが発生しました";
          });
      },
    },
  }
</script>
<style scoped>
  h2 {
    text-align: center;
  }

  .form p {
    font-weight: bold;
  }
</style>
