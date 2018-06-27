<template>
<div>
  <section>
   <b-table :data="data" :columns="columns"  id = "table">
     </b-table>  
<under-tab :index=2 ></under-tab>
     </section>   
     <button  v-for="i in length" class="del" @click="button = i;dele;">{{i}}削除</button>
</div>

</template>

<script>
import http from "../../service/service";
import axios from "axios";
import auth from "../../service/auth";

export default {
  data() {
    return {
      button : null,
      length : null,
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
        },
      ]
    };
  },
  created: function() {
    http
      .getchild()
      .then(response => {
        console.log(response);
        this.data = response.data.data;
        this.length = this.data.length;
        //console.log("%d",this.length);
      })
      .catch(function(error) {
        console.log(error.response);
      });
  } , 
  methods: {
    dele(){
      http
        .delechild(this.button)
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
  display: inline-block;
  text-align: center;
}
.del{
  width: 20%;
}
</style>
