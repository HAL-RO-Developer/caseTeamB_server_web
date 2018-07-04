<template>
<div>
  <header class="modal-card-head">
    <p class="modal-card-title">目標詳細</p>
  </header>
<section>

  <b-tabs v-model="activeTab" position="is-centered">
    <b-tab-item label="日別"><child></child></b-tab-item>
    <b-tab-item label="週別"></b-tab-item>
  </b-tabs>

  <center>
    <button class="button" type="button" @click="message">目標メッセージ</button>
  </center>
</section>
<under-tab :index=1></under-tab>
</div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
import Child from "./child.vue"
export default {
  data() {
    return {
      graph: "ダミー",
      day: new Day(),
      week: new Week()
    };
  },
  methods: {
    onDay() {
      var day = moment(this.day);
    },
    onWeek() {
      var week = "www";
    }
  },
  components: {
    Child
  } ,
  message(){
            this.$router.push({ path: "/message" });
    }
};
</script>
