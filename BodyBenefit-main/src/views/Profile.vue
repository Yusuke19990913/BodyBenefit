<template>
  <div class="ui main container">
    
    <div class="ui segment">
      <h2 class="ui dividing header">
        Profile
      </h2>
      <img class="ui centered medium image" src="../assets/profile.png">
      <form class="ui large form" @submit.prevent="submit">
        <div class="field">
          <label>ユーザ名</label>
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" placeholder="ユーザ名" v-model="username">
          </div>
        </div>

        <div class="inline fields">
          <label for="gendar">性別</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" id="0" value="male" v-model="gendar">
              <label for="0">男性</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" id="1" value="female" v-model="gendar">
              <label for="1">女性</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" id="2" value="other" v-model="gendar">
              <label for="2">その他</label>
            </div>
          </div>
        </div>

        <div class="field">
          <label>体重</label>
          <input type="number" placeholder="kg" v-model="weight">
        </div>
        <div class="ui divider"></div>
        <div class="field">
          <label>理想の体重</label>
          <input type="number" placeholder="kg" v-model="idealWeight">
        </div>
        <div class="field">
          <label>目標期日</label>
          <input type="date" v-model="date">
        </div>

        <div class="grouped fields">
          <label>部位</label>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" v-model="arm">
              <label>二の腕</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" v-model="abs">
              <label>腹筋</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" v-model="calf">
              <label>ふくらはぎ</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" v-model="ass">
              <label>お尻</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" v-model="spine">
              <label>背筋</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" v-model="thigh">
              <label>太もも</label>
            </div>
          </div>
        </div>

        <button class="ui button huge color1 fluid" type="submit">
          登録
        </button>
      </form>

      <div class="field" v-if="apiErr">
        <div class="ui icon error message">
          <i class="attention circle icon"></i>
          <div class="content">
            <div class="header">登録に失敗しました</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // 必要なものはここでインポートする
  // @は/srcの同じ意味です
  // import something from '@/components/something.vue';
  import axios from "axios";
  import { baseUrl } from "../assets/config";

  export default {
    name: 'Profile',
    components: {
      // 読み込んだコンポーネント名をここに記述する
    },
    data() {
      // Vue.jsで使う変数はここに記述する
      return {
        apiErr: false,
        username: null,
        password: null,
        gendar: null,
        weight: null,
        idealWeight: null,
        date: null,
        arm: false,
        abs: false,
        calf: false,
        ass: false,
        spine: false,
        thigh: false
      };
    },
    computed: {
      // 計算した結果を変数として利用したいときはここに記述する
    },
    methods: {
      // Vue.jsで使う関数はここで記述する
      submit() {
        const requestBody = {
          username: this.username,
          gendar: this.gendar,
          token: window.localStorage.getItem('token'),
          //token: "test-token",
          weight: this.weight,
          idealWeight: this.idealWeight,
          date: this.date,
          arm: this.arm,
          abs: this.abs,
          calf: this.calf,
          ass: this.ass,
          spine: this.spine,
          thigh: this.thigh
        }
        axios.put(baseUrl + "/user/profile", requestBody)
          .then((response) => {
            window.localStorage.setItem('weight', this.weight);
            window.localStorage.setItem('idealWeight', this.idealWeight);
            this.apiErr = false;
            console.log(response);
            this.$router.push({ name: 'Home' });
          })
          .catch((e) => {
            this.apiErr = true;
            throw new Error(e);
          });
      }
    },
    created() {
      const requestBody = {
        //token: "test-token"
        token: window.localStorage.getItem("token"),
      }
      axios.post(baseUrl + "/user/profile", requestBody)
        .then((response) => {
          // window.localStorage.setItem('weight', this.weight);
          // window.localStorage.setItem('idealWeight', this.idealWeight);
          console.log(response.data.gendar);
          this.username = response.data.username;
          this.gendar = response.data.gendar;
          this.weight = response.data.weight;
          this.idealWeight = response.data.idealWeight;
          this.date = response.data.date;
          this.arm = response.data.arm;
          this.abs = response.data.abs;
          this.ass = response.data.ass;
          this.spine = response.data.spine;
          this.thigh = response.data.thigh;
        })
        .catch((e) => {
          throw new Error(e);
        });
    },
  }
</script>
<style scoped>
  /* このコンポーネントだけに適用するCSSは */
</style>
