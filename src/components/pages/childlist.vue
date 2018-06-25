<template>
<div>
  <div>
   <b-table :data="data" :columns="columns"></b-table>
   </div>
        <under-tab :index=2 ></under-tab>

</div>
</template>

<script>
import moment from "moment";
import http from "../../service/service";
import axios from "axios";
import auth from "../../service/auth";

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          field: "child_id",
          label: "ID",
          numeric: true
        },
        {
          field: "birthday",
          label: "誕生日"
        },
        {
          field: "nickname",
          label: "名前"
        },
        {
          field: "sex",
          label: "性別"
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
        for (var i = 0; i < this.data.length; i++) {
          if (this.data[i].sex == 0) {
            this.data[i].sex = "男";
          } else if (this.data[i].sex == 1) {
            this.data[i].sex = "女";
          }
          var date = moment(this.data[i].birthday)
          date.locale()
          this.data[i].birthday = date.format("YYYY-MM-DD")
        }
      })
      .catch(function(error) {
        console.log(error.response);
      });
  }
};
</script>
