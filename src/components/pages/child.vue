<template>
<div id = "form" class="modal-card" style="width: auto">
    <form>
 <footer class="modal-card-foot">
    <h1>子ども　登録</h1>
     </footer>
    <section class="modal-card-body">
   <b-field label="Name">
                    <b-input
                            type="text"
                            v-model="name"
                            placeholder="child name"
                            required
                            >
                    </b-input>
                </b-field>
     </section>

    <section class="modal-card-body">
    <b-field label="Select a birthday">
        <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            :readonly="false"
            v-model="date"
            >
        </b-datepicker>
           </b-field>     
           </section> 

     <section class="modal-card-body">
    <b-radio v-model="sex"
                native-value=0>
                男
            </b-radio>
            <b-radio v-model="sex"
                native-value=１>
                女
            </b-radio>
     </section>

     <footer class="modal-card-foot">
    <button class="button" type="button"  @click="onclick">登録</button>
     </footer>
    </form>
     <p v-if="date">{{date}}</p>
    <under-tab :index=2 ></under-tab>
</div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";

export default {
  data() {
    return {
      name: "",
      sex: null,
      date: new Date()
    };
  },
  methods: {
    onclick() {
      var date = moment(this.date);
      date.locale();
      //console.log(date.format("YYYY-MM-DD"));
      // post
      http.addchild(this.name,date.format("YYYY-MM-DD"),this.sex.value)
        .then(response => {
          console.log(response.data.success);
        })
        .catch(error => {
          console.log(error.response.data);
          this.err = error.response.data.error;
        });
      //遷移
      //this.$router.push({ path: '/' });
    }
  }
};
</script>


