<template>
<div id = "form" class="modal-card" style="width: auto">
<p v-if="err" id = "err">{{err}}</p>

<form>
    <header class="modal-card-head">
        <p class="modal-card-title">目標登録</p>
    </header>
<section>
        <b-field label="Child_id">
            <b-input
                type="number"
                v-model="id"
                placeholder="子どもID"
                required
                >
            </b-input>
        </b-field>
        <b-field label="content">
            <b-input
                type="string"
                v-model="content"
                placeholder="目標名"
                required
                >
            </b-input>
        </b-field>
        <b-field label="criteria">
            <b-input
                type="number"
                v-model="name"
                placeholder="達成目標数"
                required
                >
            </b-input>
        </b-field>
    <b-field label="Select a deadline">
        <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            :readonly="false"
            v-model="date"
            >
        </b-datepicker>
    </b-field>  
    <footer class="modal-card-foot">
    <button class="button" type="button"  @click="onclick">登録</button>
    </footer>
</section>
</form>

<under-tab :index=1></under-tab>
</div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import auth from "../../service/auth";
import http from "../../service/service";
export default {
  created: function() {
    http
      .getid()
      .then(response => {
        console.log(response);
        this.options = response.data.goal_id;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      options: "id",
      child_id: "",
      content: "",
      criteria: new Date(),
      deadline: null,
      ok: "",
      err: ""
    };
  },
  methods: {
    onclick() {
        var date = moment(this.date);
        date.local();
        http.addgoal(this.child_id, this.content, this.criteria, date.format("YYYY-MM-DD"))
        .then(response => {
            console.log(response.data.success);
            this.$router.push({ path: '/goal/goal/' });
        })
        .catch(error => {
            console.log(error.response.data);
            this.err = error.response.data.error;
        });
    }
  }
};
</script>
<style>
#ok {
  color: blue;
}
#err {
  color: red;
}
</style>
