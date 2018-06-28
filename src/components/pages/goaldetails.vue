<template>
<section>
  <b-field>
    <b-radio-button v-model="graph" :native-value="day" @Click="onDay">
      日別
    </b-radio-button>
    <b-radio-button v-model="graph" :native-value="week" @click="onWeek">
      週別
    </b-radio-button>
  </b-field>
  {{graph}}
</section>
</template>


<script>
import moment from "moment";
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
export default {
  data() {
    return {
      graph: "ダミー",
      day: new Day(),
      week: new Week()
    };
  },
  methods:{
    onDay(){
      var day = moment(this.day);
    },
    onWeek(){
      var week = "www";
    }
  }
};
</script>

