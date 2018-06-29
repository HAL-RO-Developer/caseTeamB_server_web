<template>
<div>
  <p id = "err">{{err}}</p>
  <ul v-if="length">
        <li class="card" id = "state">状態</li>
        <li class="card" id = "id">ID</li>
        <li id = "button">&nbsp;</li>
          </ul>
          
   <ul v-for= "i in length" v-bind:value="i" v-bind:key="i">
        <li  id = "true" class="card" v-if="data[i-1]['device_alive'] == true">&nbsp;</li>
        <li  id = "false" class="card" v-if="data[i-1]['device_alive'] == false">&nbsp;</li>
        <li class="card" id = "id" >{{data[i-1]['device_id']}}</li>
        <li><button id = "button" class="button" @click="dele(data[i-1]['device_id']);">削除</button></li>
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
          console.log(response);
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
#state {
  float: left;
  width: 10%;
  height: 2em;
  text-align: center;
}
#id {
  float: left;
  width: 75%;
  height: 2em;
  text-align: center;
}
#button {
  float: left;
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
