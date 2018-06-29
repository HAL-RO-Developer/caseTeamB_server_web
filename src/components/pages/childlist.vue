<template>
<div>
  <p id = "err">{{err}}</p>
  <ul v-if="length">
        <li class="card" id = "id">ID</li>
        <li class="card" id = "name">名前</li>
        <li id = "button">&nbsp;</li>
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
      err : "",
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
        .delechild(String(id))
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
          this.data = response.data.children;
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
  width: 15%;
  height: 2em;
}
 #id,#name{ 
   width: 42.5%;
   float: left;
   height: 2em;
   text-align: center;
 } 
</style>
