<template>
  <body>
      <div>
  <div class="mydata">
      <p>現在の体重: <span class="mydata-span">60kg</span></p>
      <p>理想体重: <span class="mydata-span">56 kg</span></p>
  </div>
  <div class="Todo">
    <h1>Todoリスト</h1>
    <div class="Todo-wrap" v-for="(todo, key) in todos" :key="key">
        <ul>
            <div class="Todo-item">
                <li><button class="todoButton" v-on:click="deleteTodo"></button>{{ todo.title}}<span class="times">{{ todo.times }}回</span></li>
                <p>{{ todo.main }}</p>
            </div>
        </ul>
        </div>
    </div>
    </div>
    </body>
</template>

<script>
    import { baseUrl } from '@/assets/config.js';
    import axios from "axios";
    //import { weight } from "./Profile"
    // 必要なものはここでインポートする
    // @は/srcと同じ意味です
    // import something from '@/components/something.vue';

export default {
  name: 'Home',
  components: {
   // 読み込んだコンポーネント名をここに記述する
  },
  data() {
    // Vue.jsで使う変数はここに記述する
    return {
    //   post: {
    //     text: null,
    //     category: null,
    //     err: null
    //   },
    //   search: {
    //     username: null,
    //     category: null,
    //     start: null,
    //     end: null,
    //     err: null,
    //   },
    //   query: {
    //     start: null,
    //     end: null
    //   },
    //   articles: [],
    //   iam: null
        // todo : [
        // { title : "太もも痩せにチャレンジ", mark : true, port: "太もも",times:30, main: "ワイドスクワットはお尻をしっかりと沈めることが重要。足をハの字に開き、膝を外側に向けるよう意識しつつ行なうのがポイントです。15回×3セットを目安に行いましょう。"},
        // { title : "お尻痩せにチャレンジ", mark : true, port: "尻",times:30, main: "お尻を鍛えて上向きヒップ＆キュッと小尻に！まずはお尻の構造＆筋肉の作り、自分のタイプを知るところからスタート。初心者さんでも大丈夫！簡単にできるメニューばかり。毎日続けて理想の桃尻をゲット！お尻を鍛えて後ろ姿美人に♪"},
        // { title : "二の腕痩せにチャレンジ", mark : true, port: "二の腕",times:20, main: "タプタプの二の腕を引き締めたいのに、腕の上外側である上腕二頭筋を鍛えるトレーニングメニューを行っていても、望む効果はなかなか期待できません。腕の下内側である上腕三頭筋を鍛える必要があります。"},
        // { title : "背中痩せにチャレンジ", mark : true, port: "背中",times:15, main: "エアプルダウンは、背中から腰、腕へと広がる大きな筋肉である広背筋を重点的に鍛えられるトレーニングです。"},
        // { title : "太もも痩せにチャレンジ", mark : true, port: "太もも",times:30, main: "アンクルホップは、アキレス腱を活かしてジャンプを繰り返す、ヒラメ筋に効果的な筋トレです。ヒラメ筋を鍛えることにより、瞬発力をアップすることもできます。"},
        // { title : "太もも痩せにチャレンジ", mark : true, port: "太もも",times:30, main: "アンクルホップは、アキレス腱を活かしてジャンプを繰り返す、ヒラメ筋に効果的な筋トレです。ヒラメ筋を鍛えることにより、瞬発力をアップすることもできます。"},
        // { title : "太もも痩せにチャレンジ", mark : true, port: "太もも",times:30, main: "アンクルホップは、アキレス腱を活かしてジャンプを繰り返す、ヒラメ筋に効果的な筋トレです。ヒラメ筋を鍛えることにより、瞬発力をアップすることもできます。"},
        // { title : "太もも痩せにチャレンジ", mark : true, port: "太もも",times:30, main: "アンクルホップは、アキレス腱を活かしてジャンプを繰り返す、ヒラメ筋に効果的な筋トレです。ヒラメ筋を鍛えることにより、瞬発力をアップすることもできます。"},
        // ]
        todos: [],
        // weight: null,
        // idealWeight: null,
        // token:window.localStorage.getItem("token"),
    };
  },
  computed: {
  // 計算した結果を変数として利用したいときはここに記述する
    /*
    sortedArticles() {
    }
    */
  },
  created() {
    // Vue.jsの読み込みが完了したときに実行する処理はここに記述する
    // this.iam = localStorage.getItem("userId");
    // apiからarticleを取得する
    const requestBody = {
        token: window.localStorage.getItem("token")
      }
    axios.post(baseUrl + "/todo", requestBody)
      .then((response) => {
        console.log(response.data.todo);
        this.todos = response.data.todo;
        // this.weight = window.localStorage.getItem("weight"),
        // this.idealWeight = window.localStorage.getItem("idealWeight"),
        // console.log(this.todos);
        // console.log(this.weight);
        // console.log(this.idealWeight);
      })
      .catch((e) => {
          console.log(e);
      });
  },
  methods: {
    // Vue.jsで使う関数はここで記述する
    deleteTodo() {
        alert('よく頑張りました！');
        //配列の先頭の要素を削除
        this.todos.shift();
    },
    /*
    getArticles() {
    },
    postArticle() {
    },
    searchArticle() {
    },
    deleteArticle(article) {
    },
    fromUnixtoDate(timestamp) {
    }
    */
  }
}
</script>
<style scoped>
    /*#overlay{*/
    /*    z-index:1;*/
    /*    position:fixed;*/
    /*      top:0;*/
    /*      left:0;*/
    /*      width:100%;*/
    /*      height:100%;*/
    /*      background-color:rgba(0,0,0,0.5);*/
    /*      display: flex;*/
    /*      align-items: center;*/
    /*      justify-content: center;*/
    /*}*/

    /*#content{*/
    /*  z-index:2;*/
    /*  width:50%;*/
    /*  padding: 1em;*/
    /*  background:#fff;*/
    /*}*/


    body {
        margin: 0;
        padding: 0;
        font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif;
        background-color: #F7EFE3 !important;
    }

    ul {
        list-style: none;
    }


    header {
        width: 100%;
        padding: 30px 4% 10px;
        background-color: #fff;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
    }

    .header-icon {
        margin-right: 1px;
    }

    header h1 {
        margin: 0;
        padding: 0;
        font-size: 20px;
    }

    a {
        text-decoration: none;
        color: #4b4b4b;
    }

    header ul {
        list-style: none;
        margin: 0;
        display: flex;
    }

    header li {
        margin: 0 0 0 15px;
        font-size: 1.1rem;
    }

    nav {
        margin: 0 0 0 auto;
    }

.Todo {
    padding: 30px 4% 10px;
    background-color: #ffffff;
    width: 85%;
    margin:40px auto;
    margin-bottom: 600px;
    border-radius: 15px;
    font-weight: bold;
}

.mydata {
     width: 85%;
    margin:30px auto;
    font-weight: bold;
    font-size: 1.3rem;
}

.mydata-span {
    font-size: 1.5rem;
}

.Todo ul {
    list-style-position: inside;
}

.Todo li {
    font-size: 1.6rem;
    margin: 10px 0px;
}

.Todo p {
    margin: 21px 45px;
}

.part {
    font-size: 1rem;
    margin-left: 30px;
}

.times {
    margin-left: 20px;
}

.header-icon {
    width: 40px;
}

.Todo-item {
    /*background-color: #fec7d7;*/
    background-color: #DADADA;
    border-radius: 15px;
    padding: 8px 28px;
    margin-bottom: 15px;
    height: 150px;
}

.Todo-item:first-of-type {
    margin-top: 30px;
}

.todoButton {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 15px;
}
</style>
