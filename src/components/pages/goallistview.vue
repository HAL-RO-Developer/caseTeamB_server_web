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
export default {
  data() {
    return {
      lists: [],
      ok: "",
      err: ""
    };
  },
  created: function() {
    this.set();
  },
  methods: {
    delete(id) {
      http
        .delegoal(String(id))
        .then(response => {
          console.log(response.data);
          this.set();
        })
        .catch(error => {
          console.log(error.response.data.error);
          this.err = error.response.data.error;
        });
    }
  },
  set() {
    http
      .getgoal()
      .then(response => {
        console.log(response);
        this.lists = response.data.goals;
        this.length = this.goals["length"];
      })
      .catch(error => {
        console.log(error.response);
        this.err = error.response.data.error;
        this.lists = new Array();
      });
  }
};
</script>