<template>
<div id = "form" class="modal-card" style="width: auto">
<p v-if="err" id = "err">{{err}}</p>

<form>
    <header class="modal-card-head">
        <p class="modal-card-title">目標登録</p>
    </header>
<section>
    <b-field>
        <b-select type="number" v-model="child_id" 
        placeholder="子どもID" expanded>
            <option v-for="option in options"
            :key="option.child_id" :value="option.child_id">
            {{option.nickname}}</option>
        </b-select>
    </b-field>

    <b-field>
        <b-input
            v-model="content"
            placeholder="目標名"
            expanded
            >
        </b-input>
    </b-field>
        <b-field>
            <b-input
                type="number"
                v-model="criteria"
                placeholder="達成目標数"
                expanded
                >
            </b-input>
        </b-field>
    <b-field>
        <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            :readonly="false"
            v-model="deadline"
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
    this.set();
  },
  data() {
    return {
      options: [],
      child_id: null,
      content: "",
      criteria: null,
      deadline: new Date(),
      ok: "",
      err: ""
    };
  },
  methods: {
    onclick() {
      var deadline = moment(this.deadline);
      deadline.local();
      http
        .addgoal(
          Number(this.child_id),
          this.content,
          Number(this.criteria),
          deadline.format("YYYY-MM-DD")
        )
        .then(response => {
          console.log(response.data.success);
        })
        .catch(error => {
          console.log(error.response.data);
          this.err = error.response.data.error;
        });
    },
    set() {
      http
        .getchild()
        .then(response => {
          console.log(response);
          this.options = response.data.children;
        })
        .catch(error => {
          console.log(error.response);
          this.err = error.response.data.error;
          this.options = new Array();
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
