<template>
<div>
    <div v-if="length">
     <p class="card" id="name">名前</p>
     <p class="card" id="content">目標</p>
     <p class="card" id="call">回</p>
     <p class="card" id="messa">メッセージ</p>
     <p id = "button">&nbsp;</p>
  </div>
<div v-for= "i in length" v-bind:value="i" v-bind:key="i">
<div  v-for="a in data[i-1]['child_messages'].length" v-bind:value="a" v-bind:key="a"> 
  <p class="card" id="name">{{data[i-1][['nickname']]}} </p>
  <p class="card" id="content">{{data[i-1]['child_messages'][a-1]['content']}}</p>
  <p class="card" id="call">{{data[i-1]['child_messages'][a-1]['message_call']}}</p>
  <p class="card" id="messa">{{data[i-1]['child_messages'][a-1]['message']}}</p>
  <button id = "button" class="button" @click="dele(data[i-1]['child_messages'][a-1]['goal_id'],data[i-1]['child_messages'][a-1]['message_call'])">削除</button>
</div>
</div>
    <button id = "next" class="button" @click="onclick">追加 編集</button>
      <under-tab :index= 1 ></under-tab>
</div>
</template>

<script>
import http from "../../service/service";
import axios from "axios";
import auth from "../../service/auth";

export default {
  data() {
    return {
      selected: null,
      err: "",
      length: 0,
      data: []
    };
  },
  created: function() {
    this.set();
  },
  methods: {
    dele(id,call){
 var repuest = String(id) + '/' + String(call)
      http
        .delemessage(repuest)
        .then(response => {
          console.log(response.data);
          this.data = "";
          this.set();
        })
        .catch(error => {});
    },
    set() {
      http
        .getmessage()
        .then(response => {
          console.log(response);
          this.data = response.data.messages;
          this.length = this.data[0]['child_messages']["length"];
        })
        .catch(error => {
          console.log(error.response);
          this.data = new Array();
          this.length = 0;
        });
    },
    onclick(){
      this.$router.push({ path: "/message/add" });
    }
  }
};
</script>

<style>
#card{
  width: 21.25%;
  float: left;
  text-align: center;
  height: 2em;

}
#name,#content{
  width: 20%;
  float: left;
  text-align: center;
  height: 2em;
}
#call{
  width: 10%;
  float: left;
  text-align: center;
  height: 2em;
}
#messa{
  width: 35%;
  float: left;
  text-align: center;
  height: 2em;
}
#button {
  float: left;
  width: 15%;
  text-align: center;
  height: 2em;
}
#next{
margin-top: 5%;
margin-left: 50%;
  
}
</style>
