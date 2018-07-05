<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <p id = "err">{{err}}</p>
        <card v-for="(goal, index) in goals" 
            :key="index"
            :nickname="child.nickname"
            :id="child.child_id"
            :selected="selected"
            @remove="removegoal"
            @select="select"></card>
        <fab :icon="fabIcon" @click="isComponentModalActive = true"></fab>
        <under-tab :index='1'></under-tab>
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form @add="addgoal"></modal-form>
        </b-modal>
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
      ok: "",
      err: "",
      length: 0,
      selected: "",
      isComponentModalActive: false
    };
  },
  created: function() {
    this.set();
  },
  methods: {
    getgoal() {
      http
        .getgoal()
        .then(response => {
          console.log(response);
          this.goals = response.data.goals;
          this.length = this.goals["length"];
        })
        .catch(error => {
          console.log(error.response);
          this.err = error.response.data.error;
          this.goals = new Array();
          this.length = 0;
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
    this.getgoal();
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
