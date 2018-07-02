<template>
    <div>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">ログイン</p>
            </header>
            <div v-if="err" id = "err">{{ err }}</div>
            <section class="modal-card-body">
                <b-field label="Name">
                    <b-input
                            type="text"
                            v-model="name"
                            placeholder="Your name"
                            required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input
                            type="password"
                            v-model="password"
                            password-reveal
                            placeholder="Your password"
                            required>
                    </b-input>
                </b-field>
                <!-- <b-checkbox>Remember me</b-checkbox> -->
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="signup">新規登録</button>
                <button class="button" type="button" @click="signin">ログイン</button>
            </footer>
        </div>
    </form>
    <under-tab :index=0></under-tab>
    </div>
</template>

<script>
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
export default {
  data() {
    return {
      name: "",
      password: "",
      err: ""
    };
  },
  methods: {
    signup() {
      http
        .signup(this.name, this.password)
        .then(response => {
          console.log(response.data.success);
          this.signin();
        })
        .catch(error => {
          console.log(error.response.data);
          this.err = error.response.data.error;
        });
    },
    signin() {
      http
        .signin(this.name, this.password)
        .then(response => {
          console.log(response.data.token);
          console.log("then");
          auth.SetToken(response.data.token);
          console.log(response.data.token);
          this.$router.push({ path: "/device" });
        })
        .catch(error => {
          console.log("catch");
          console.log(error.response.data);
          this.err = error.response.data.error;
        });
    }
  }
};
</script>
<style>
#err {
  color: red;
}
</style>
