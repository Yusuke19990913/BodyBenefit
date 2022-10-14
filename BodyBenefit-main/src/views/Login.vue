<template>
  <div>
    <div class="ui main container">
      <h2>ログイン</h2>
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
          <button class="ui huge fluid button" type="submit">
            ログイン
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
  name: 'Login',
  data() {
    return {
      user: {
        address: null,
        password: null
      }
    };
  },
  computed: {

  },
  methods: {
    submit() {
      /*
      if (!this.user.address) {
        this.err = "アドレスを入力してください";
        return;
      } else if (!this.user.password) {
        this.err = "パスワードを入力してください";
        return;
      }
      */
      console.log("login");
      const requestBody = {
        address: this.user.address,
        password: this.user.password
      };
      axios.post(baseUrl + "/user/login", requestBody)
        .then((response) => {
          // 成功したときの処理はここに記述する
          console.log(response.data);
          console.log("login OK");
          this.$router.push({name: "Home"});
        })
        .catch(() => {
          // レスポンスがエラーで返ってきたときの処理はここに記述する
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
  font-weight:bold;
}
</style>