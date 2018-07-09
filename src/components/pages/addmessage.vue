<template>
<div>
        <div id = "form" class="modal-card" style="width: auto" v-if="ok == 1">
    <form>
        <header class="modal-card-head">
                <p class="modal-card-title">メッセージ追加</p>
            </header>
                    <section class="modal-card-body">

 <b-field label="name">
           <b-select placeholder="Select a name" v-model ="name" >
<option v-for="a in length"  v-bind:value="a" v-bind:key="a" >{{data[a-1]['nickname']}}</option>
           </b-select>
</b-field>
<b-field label="goals">
           <b-select placeholder="Select a name" v-model ="id" >
<option v-for="i in data[name-1]['child_goals'].length" v-bind:value="data[name-1]['child_goals'][i-1]['goal_id']" v-bind:key="i">{{data[name-1]['child_goals'][i-1]['content']}}</option>
  </b-select>
  </b-field>
           
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
 <footer class="modal-card-foot">
    <button class="button" type="button" @click="onclick">決定</button>
     </footer>
    </form>
    </div>
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
      data: [],
      length: 0,
      id: "",
      call: null,
      message: "",
      ok: "", 
      name: 1
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