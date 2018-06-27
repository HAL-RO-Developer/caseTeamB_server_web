<template>
<div>
  <section>
   <b-table :data="data" :columns="columns"  id = "table">
     </b-table>  
          <button  v-for="i in length" v-bind:value="i" v-bind:key="i" 
     class="button" type="button" id= "button"
     @click="button = i;dele();">削除</button>

<under-tab :index=2 ></under-tab>
     </section>   
</div>

</template>

<script>
import http from "../../service/service";
import axios from "axios";
import auth from "../../service/auth";

export default {
  data() {
    return {
      button: 0,
      length: 0,
      data: [],
      columns: [
        {
          field: "child_id",
          label: "ID",
          numeric: true
        },
        {
          field: "nickname",
          label: "名前"
        }
      ]
    };
  },
  created: function() {
    http
      .getchild()
      .then(response => {
        console.log(response);
        this.data = response.data.data;
        this.length = this.data["length"];
        //console.log("%d",this.length);
      })
      .catch(function(error) {
        console.log(error.response);
      });
  },
  methods: {
    dele(id) {
      console.log(this.button);
      http
        .delechild(Number(this.button))
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>

<style>
#table {
  width: 80%;
  float: left;
  text-align: center;
}
#button {
  width: 20%;
  float: right;
  margin-top: 10%;
    text-align: center;
}
</style>
