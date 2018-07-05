<template>
<div id = "form" class="modal-card" style="width: auto">
<app-header :title="title"></app-header>
<p v-if="err" id = "err">{{err}}</p>
<form>
<section>
    <b-field label="デバイス一覧">
        <b-select v-model="device_id" 
        placeholder="デバイスID" expanded>
            <option v-for="(device, index) in devices.child_devices" 
                    :key="index"
                    :deviceId="device"
                    @remove="removeDevice">
                    {{devices.nickname}}
            </option>
        </b-select>
    </b-field>

    <b-field label="目標一覧">
      <section v-for="a in length"  v-bind:key="a">
        <b-select placeholder="Select a goal" v-model ="id" expanded>
        <option v-for="i in goals[a-1]['child_goals'].length" 
        v-bind:value="goals[a-1]['child_goals'][i-1]['goal_id']" v-bind:key="i">
        {{goals[a-1]['child_goals'][i-1]['content']}}({{goals[a-1]['nickname']}})
        </option>
        </b-select>
      </section>
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
import axios from "axios";
import auth from "../../service/auth";
import http from "../../service/service";
import AppHeader from "../modules/header.vue";
import AppFooter from "../modules/footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  created: function() {
    this.getGoal();
    this.getDevice();
  },
  data() {
    return {
      title: "ボタン登録",
      goals: [],
      goals: {},
      devices: [],
      goal_id: "",
      device_id: "",
      child_id: "",
      pin: "",
      devices: {},
      length: 0,
      dlength: 0,
      id: "",
      ok: "",
      err: ""
    };
  },
  methods: {
    onclick() {
      http
        .putgoal(this.goal_id, this.device_id)
        .then(response => {
          console.log(response.data.success);
        })
        .catch(error => {
          console.log(error.response.data);
          this.err = error.response.data.error;
        });
    },
    getGoal() {
      http
        .getgoal()
        .then(response => {
          console.log(response);
          this.goals = response.data.goals;
          this.length = this.goals["length"];
          this.ok = 1;
        })
        .catch(error => {
          console.log(error.response);
          this.err = error.response.data.error;
          this.goals = new Array();
        });
    },
    getDevice() {
      http
        .getid()
        .then(response => {
          console.log(response);
          var devices = response.data.devices;
          devices.forEach(device => {
            if (device.child_id == this.child_id) {
              this.devices = device;
            }
          });
        })
        .catch(err => {
          this.isLoading = false;
          if (err) {
            this.$dialog.alert({
              title: "Error",
              message: err.response.data.error,
              type: "is-danger",
              hasIcon: true,
              icon: "times-circle",
              iconPack: "fa"
            });
            switch (err.response.status) {
              case 401:
                http.RemoveToken();
                this.$router.push({ path: "/" });
                break;
              default:
                break;
            }
          }
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