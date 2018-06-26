<template>
<div>
  <section>
   <b-table :data="data" :columns="columns"  id = "table">
     </b-table>  

z     </section>
     
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
      length : 0,
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
        this.response.data.data.length
      })
      .catch(function(error) {
        console.log(error.response);
      });
  }
};
</script>

<style>
#table {
  width: 80%;
  height: 100%;
  display: inline-block;
  text-align: center;
}
#button{
  width: 20%;
  height: 100%;
  float: right;
}
</style>
