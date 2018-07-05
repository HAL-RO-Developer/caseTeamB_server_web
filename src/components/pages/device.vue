<template>
<div>
  <div v-if="length">
  <p id="name" class="card">名前</p>
  <p id = "device" class="card">デバイス</p>
  <p id = "button" >&nbsp;</p>
</div>

<div v-for= "i in length" v-bind:value="i" v-bind:key="i">
  <div  v-for="a in data[i-1]['child_devices'].length" v-bind:value="a" v-bind:key="a"> 
  <p id="name" class="card">{{data[i-1]['nickname']}} </p>
  <p id = "device" class="card">{{data[i-1]['child_devices'][a-1]}}</p>
  <button id = "button" class="button" @click="dele(data[i-1]['child_devices'][a-1])">削除</button>
  </div>
</div>
    <button id = "next" class="button" @click="pin();" >pin</button>
    <under-tab :index=0 ></under-tab>
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
      length: 0,
      data: [], 
    };
  },
  created: function() {
    this.data = "";
    this.length = 0;
    this.set();
  },
  methods: {
    dele(id) {
      http
        .delebutton(String(id))
        .then(response => {
          console.log(response.data);
          this.data = "";
          this.length = 0;
          this.set();
        })
        .catch(error => {});
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
        .catch(error => {});
    },
    pin() {
      this.data = "";
      this.length = 0;
      this.$router.push({ path: "/pin" });
    }
  }
};
</script>
<style>
#name {
  float: left;
  width: 40%;
  height: 2em;
  text-align: center;
}
#device {
  width: 40%;
  height: 2em;
  float: left;
  text-align: center;
}
#button {
  float: left;
  width: 20%;
  height: 2em;
  text-align: center;
}
#next {
  margin-top: 5%;
  margin-left: 50%;
}
</style>
