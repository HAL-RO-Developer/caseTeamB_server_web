<template>
<div>
        <under-tab :index=2 ></under-tab>

</div>
</template>

<script>
import http from "../../service/service";
import axios from "axios";
import auth from "../../service/auth";

export default {
  created: function() {
    http
      .getchild()
      .then(response => {
        console.log(response);
        this.lis = response.data;
      })
      .catch(function(error) {
        console.log(error.response);
      });
  }
};
</script>
