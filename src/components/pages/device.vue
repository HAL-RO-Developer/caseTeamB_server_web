<template>
<div>
  <p id = "err">{{err}}</p>
  <ul v-if="length">
        <li class="card" id = "name">デバイス</li>
        <li class="card" id = "child">子ども</li>
        <li  id = "button">&nbsp;</li>
          </ul>
          
   <ul v-for= "i in length" v-bind:value="i" v-bind:key="i">
        <li v-for="a in data[i-1]['child_devices'].length" v-bind:value="a" v-bind:key="a" class="card" id = "name" >{{data[i-1]['child_devices'][a-1]}}</li>
        <li v-for="a in data[i-1]['child_devices'].length" v-bind:value="a" v-bind:key="a" class="card" id = "child" >{{data[i-1]['nickname']}}</li>
        <li v-for="a in data[i-1]['child_devices'].length" v-bind:value="a" v-bind:key="a"><button id = "button" class="button" @click="dele(data[i-1]['child_devices'][a-1])">削除</button></li> 
          </ul>
              <under-tab :index=0 ></under-tab>
              <center>
        <button class="button" @click="pin" v-if="err || length != 0">pin</button>
              </center>

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
    dele(id) {
      http
        .delebutton(String(id))
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
        .getid()
        .then(response => {
          console.log(response.data);
          this.data = response.data.devices;
          this.length = this.data["length"];
          //console.log("%d",this.length);
        })
        .catch(error => {
          console.log(error.response);
          this.err = error.response.data.error;
          this.data = new Array();
          this.length = 0;
        });
    },
    pin() {
      this.$router.push({ path: "/pin" });
    }
  }
};
</script>
<style>
#name,#child {
  float: left;
  width: 42.5%;
  height: 2em;
  text-align: center;
}
#button {
  float: right;
  width: 15%;
  height: 2em;
}
#err {
  text-align: center;
  color: RED;
}
#false{
  float: left;
  width: 10%;
  height: 2em;
  background-color: red;
}
#true {
  float: left;
  width: 10%;
  height: 2em;
  background-color: #00ff7f;
}
</style>
