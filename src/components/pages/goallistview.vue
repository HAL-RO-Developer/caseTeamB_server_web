<template>
    <div class="modal-card" style="width: auto">
    <app-header :title='title'></app-header>
    <div id = "err">{{err}}</div>
    <div v-if="length">
      <p class="card" id = "content">目標名</p>
      <p id = "button">&nbsp;</p>
    </div>
          
   <div v-for="goal in length"  v-bind:key="goal">
        <p class="card" id = "content" v-for="i in goals[goal-1]['child_goals'].length" 
          v-bind:value="goals[goal-1]['child_goals'][goal-1]['goal_id']" v-bind:key="i">
          {{goals[goal-1]['child_goals'][i-1]['content']}}({{goals[goal-1]['nickname']}})</p>
        <button id = "button" class="button" @click="dele(goals[goal-1]['child_goals'][goal-1]['goal_id'])">削除</button>
    </div>
        <!--<fab :icon="fabIcon" @click="isComponentModalActive = true"></fab>-->
        <fab :icon="fabIcon" @click="goal"></fab>
        <under-tab :index='1'></under-tab>
        <!--
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form @add="addgoal"></modal-form>
        </b-modal>-->
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
import AppHeader from "../modules/header.vue";
import AppFooter from "../modules/footer.vue";
import Card from "../modules/goalCard.vue";
import ModalForm from "../modules/addGoalModel.vue";
import Fab from "../modules/fab.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    Card,
    ModalForm,
    Fab
  },
  data() {
    return {
      title: "目標一覧",
      fabIcon: "plus",
      goals: [],
      child_id: "",
      ok: "",
      err: "",
      length: 0,
      selected: "",
      isComponentModalActive: false
    };
  },
  methods: {
    goal() {
      this.$router.push({ path: "/goal" });
    },
    dele(id) {
      console.log("goal_id:%dを消します", id);
      http
        .delegoal(String(id))
        .then(response => {
          console.log(response.data);
          this.length = 0;
          this.goals = new Array();
          this.getGoal();
        })
        .catch(error => {
          console.log(error.response.data.error);
        });
    },
    getGoal() {
      http
        .getgoal()
        .then(response => {
          console.log(response);
          this.goals = response.data.goals;
          this.length = this.goals["length"];
        })
        .catch(error => {
          console.log(error.response);
          this.length = 0;
          this.goals = new Array();
        });
    },
    addgoal(data) {
      this.isComponentModalActive = false;
      var deadline = moment(data.deadline);
      console.log(data);
      http
        .addgoal(
          Number(data),
          this.content,
          Number(data),
          deadline.format("YYYY-MM-DD")
        )
        .then(response => {
          this.getgoal();
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    select(id) {
      localStorage.setItem("child_id", id);
      this.selected = id;
    }
  },
  created() {
    this.selected = localStorage.getItem("child_id");
    this.getGoal();
  }
};
</script>

<style>
.full-width {
  width: 100%;
}
#err {
  color: red;
}
</style>
