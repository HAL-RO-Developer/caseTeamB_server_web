<template>
<div>
  <p id = "err">{{err}}</p>
  <ul v-if="length">
    <li class="card" id = "child_id">子ども名</li>
  </ul>
  <ul v-for= "i in length" v-bind:value="i" v-bind:key="i">
        <li class="card" id = "child_id">{{lists[i-1]['child_id']}}</li>
  </ul>
  <under-tab :index=1></under-tab>
</div>
</template>


<script>
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
import Goallistview from "./goallistview.vue";
export default {
  created() {
    http
      .getgoal()
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
    goal() {
      this.$router.push({ path: "/child" });
    }
  },
  components: {
    Goallistview
  }
};
</script>