<template>
    <section>
        <div  class="card-footer">
            <div id="goal" class="card-footer-item" @click="goal">{{goalname}}</div>
            <div id="updated_at" class="card-footer-item">{{goalday}}</div>
            <div id="percent" class="card-footer-item">{{percent}}%</div>
        </div>
    </section>
</template>


<script>
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
export default {
  created() {
    http
      .getid()
      .then(response => {
        console.log(response);
        this.goalname = response.data.goal;
        this.goalday = response.data.updated_at;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      goalname: "",
      goalday: "",
      percent: "0"
    };
  },
  methods: {
    goal() {
       this.$route.push({path: "/"})
    }
  }
};
</script>