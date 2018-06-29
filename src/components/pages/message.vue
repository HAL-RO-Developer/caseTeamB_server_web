<template>
<div>
  <p id = "err">{{err}}</p>
  <ul v-if="length">
        <li class="card" id = "content">目標</li>
        <li class="card" id = "number">回数</li>
        <li class="card" id = "message">メッセージ</li>
        <li id = "button"></li>
          </ul>
 <ul v-for= "i in length" v-bind:value="i" v-bind:key="i">
        <li class="card" id = "content">{{data[i-1]['content']}}</li>
        <li class="card" id = "number">{{data[i-1]['message_call']}}</li>
        <li class="card" id = "message">{{data[i-1]['message']}}</li>
        <li><button id = "button" class="button" >変更</button></li>
          </ul>

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
    set() {
      http
        .getmessage()
        .then(response => {
          console.log(response);
          this.data = response.data.messages;
          this.length = this.data["length"];
          console.log("%d",this.length);
        })
        .catch(error => {
          console.log(error.response);
          this.err = error.response.data.error;
          this.data = new Array();
          this.length = 0;
        });
    }
  }
};
</script>

<style>
#content {
  float: left;
  width: 30%;
  text-align: center;
  height: 2em;
}
#number {
  float: left;
  width: 15%;
  text-align: center;
  height: 2em;
}
#message {
  float: left;
  width: 40%;
  text-align: center;
  height: 2em;
}
#button {
  float: left;
  width: 15%;
  text-align: center;
  height: 2em;
}
#err {
  text-align: center;
  color: RED;
}
</style>
