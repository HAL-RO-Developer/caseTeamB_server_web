<template>
<div>

  <p id = "err">{{err}}</p>
  <ul v-if="length != 0">
        <li class="card" id = "title">ID</li>
        <li class="card" id = "title">名前</li>
        <li id = "title2"></li>
          </ul>
          
   <ul v-for= "i in length" v-bind:value="i" v-bind:key="i">
        <li class="card" id = "id">{{data[i-1]['child_id']}}</li>
        <li class="card" id = "name">{{data[i-1]['nickname']}}</li>
        <li><button id = "button" class="button" @click="dele(data[i-1]['child_id']);">削除</button></li>
          </ul>
              <under-tab :index=2 ></under-tab>

</div>

</template>

<script>
import http from "../../service/service";
import axios from "axios";
import auth from "../../service/auth";

export default {
  data() {
    return {
      selected : null,
      err : "",
      btn: 0,
      length: 0,
      data: [],
    };
  },
  created: function() {
    this.set();
  },
  methods: {
    dele(id) {
      console.log("child_id:%dを消します", id);
      http
        .delechild(id)
        .then(response => {
          console.log(response.data);
          this.set();
        })
        .catch(error => {
          console.log(error.response.data.error);
          this.err = error.response.data.error;

        });
    },
    set() {
      http
        .getchild()
        .then(response => {
          console.log(response);
          this.data = response.data.data;
          this.length = this.data["length"];
          //console.log("%d",this.length);
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
 
#err{
  text-align: center;
  color: RED;
}
ul{
  text-align: center;
  width: 100%;
}
#button{
  width: 10%;
  height: 2em;
}
 #id,#name{ 
   width: 45%;
   float: left;
   height: 2em;
 } 
 #title{
   width: 45%;
   float: left;
   height: 2em;
 }
  #title2{
   width: 10%;
   float: left;
   height: 2em;
 }
</style>
