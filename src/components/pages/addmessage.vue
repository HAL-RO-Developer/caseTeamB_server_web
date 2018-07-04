<template>
        <div id = "form" class="modal-card" style="width: auto" v-if="ok == 1">
    <form>
        <header class="modal-card-head">
                <p class="modal-card-title">メッセージ追加</p>
            </header>
                    <section class="modal-card-body">

            <section v-for="a in length"  v-bind:key="a">
           <b-select placeholder="Select a name" v-model ="id" >
<option v-for="i in data[a-1]['child_goals'].length" v-bind:value="data[a-1]['child_goals'][i-1]['goal_id']" v-bind:key="i">{{data[a-1]['child_goals'][i-1]['content']}}({{data[a-1]['nickname']}})</option>
    </b-select>
            </section>
        <b-field label="回数">
                    <b-input
                            type="Number"
                            v-model="call"
                            placeholder="回数"
                            required>
                    </b-input>
                </b-field>
                    <b-field label="メッセージ">
                    <b-input
                            type="text"
                            v-model="message"
                            placeholder="メッセージ"
                            required>
                    </b-input>
                </b-field>
            </section>
            <under-tab :index=1></under-tab>
 <footer class="modal-card-foot">
    <button class="button" type="button" @click="onclick">決定</button>
     </footer>
    </form>
    </div>
</template>

<script>
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
export default {
  data() {
    return {
      data: [],
      length: 0,
      id: "",
      call: null,
      message: "",
      ok: ""
    };
  },
  created: function() {
    this.set();
  },
  methods: {
    set() {
      http
        .getgoal()
        .then(response => {
          console.log(response);
          this.data = response.data.goals;
          this.length = this.data["length"];
          this.ok = 1;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    onclick() {
      http
        .addmessage(this.id, Number(this.call), this.message)
        .then(response => {
          console.log(response.data.success);
          this.$router.push({ path: "/message" });
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>