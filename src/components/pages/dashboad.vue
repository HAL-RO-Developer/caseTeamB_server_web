<template>
<div>
    <under-tab :index=1></under-tab>
</div>
</template>

<script>
import auth from "../../service/auth";
import http from "../../service/service";
export default {
  name: "dashboad",
  data() {
    return {};
  },
  methods: {},
  created: function() {
    console.log("on create + " + auth.GetToken());
    if (!auth.GetToken()) {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
