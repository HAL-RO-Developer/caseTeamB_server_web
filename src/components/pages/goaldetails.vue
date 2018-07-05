<template>
<div>
<app-header :title="title"></app-header>
<section>
  <b-tabs v-model="activeTab" position="is-centered">
    <b-tab-item label="日別"><child></child></b-tab-item>
    <b-tab-item label="週別"></b-tab-item>
  </b-tabs>

  <center>
    <button class="button" type="button" @click="message">目標メッセージ</button>
  </center>
</section>
<app-footer></app-footer>
<under-tab :index=1></under-tab>
</div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
import AppHeader from "../modules/header.vue";
import AppFooter from "../modules/footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      title: "目標登録",
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
  }
};
</script>
