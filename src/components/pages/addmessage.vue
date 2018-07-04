<template>
        <div id = "form" class="modal-card" style="width: auto">
    <form>
        <header class="modal-card-head">
                <p class="modal-card-title">メッセージ追加</p>
            </header>
                    <section class="modal-card-body">
           <b-select placeholder="Select a name" v-model ="id" >
<option v-for="a in length" v-bind:value="a" v-bind:key="a">{{data[a-1]['content']}}({{data[a-1]['nickname']}})</option>
    </b-select>
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
      message: ""
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
        })
        .catch(error => {
          console.log(error.response);
        });
    } ,
    onclick(){
           http.addmessage(this.data[this.id-1]['goal_id'],Number(this.call),this.message)
        .then(response => {
          console.log(response.data.success);
          this.$router.push({ path: '/message' });
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>