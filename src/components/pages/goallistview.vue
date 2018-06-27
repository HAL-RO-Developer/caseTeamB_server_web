<template>
  <b-table :data="data" :columns="columns"></b-table>
</template>


<script>
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
import Goallistview from "./goallistview.vue";
export default {
  created() {
    http
      .getid()
      .then(response => {
        console.log(response);
        this.data = response.data.goals;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      data: [],
      columns: [
        {
          field: "id",
          label: "ID",
          numeric: true
        },
        {
          field: "name",
          label: "目標名"
        },
        {
          field: "update_at",
          label: "最終達成日"
        },
        {
          field: "total",
          label: "トータル"
        },
        {
          field: "curentcnt",
          label: "現在の回数"
        }
      ]
    };
  },
  methods: {
    detail() {
      // this.$route.push({path: "/"})
    }
  },
  components: {
    Goallistview
  }
};
</script>