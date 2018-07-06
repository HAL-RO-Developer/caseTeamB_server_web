<template>
<div>
  <div v-if="length">
        <p class="card" id = "name">名前</p>
        <p id = "button">&nbsp;</p>
  </div>
          
   <div v-for= "i in length" v-bind:value="i" v-bind:key="i">
        <p class="card" id = "name">{{data[i-1]['nickname']}}</p>
        <button id = "button" class="button" @click="dele(data[i-1]['child_id']);">削除</button>
    </div>
        <section>
         <button  class="button" type="button" @click="setting"  id ="setting" >    
          設定
          </button>
            </section>
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
      length: 0,
      data: []
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
          this.length = 0;
          this.data = new Array();
          this.set();
        })
        .catch(error => {
          console.log(error.response.data.error);
        });
    },
    set() {
      http
        .getchild()
        .then(response => {
          console.log(response);
          this.data = response.data.children;
          this.length = this.data["length"];
        })
        .catch(error => {
          console.log(error.response);
          this.length = 0;
          this.data = new Array();
        });
    },
    setting(){
    this.$router.push({ path: "/settings" });
    }
  }
};
</script>

<style>
#err {
  text-align: center;
  color: RED;
}
ul {
  text-align: center;
  width: 100%;
}
#button {
  width: 20%;
  height: 2em;
  text-align: center;
}
#name {
  width: 80%;
  float: left;
  height: 2em;
  text-align: center;
}
#setting{
text-align: center;
 float: left;
 width: 15%;
 margin-top: 3%;
}
</style>
