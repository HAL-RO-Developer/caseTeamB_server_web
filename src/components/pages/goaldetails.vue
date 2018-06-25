<template>
    <section>
        <div class="card-footer">
            <div id="goal" class="card-footer-item">目標一覧</div>            
        </div>
        <div class="card-footer">
            <div id="goal" class="card-footer-item">目標名</div>
            <div id="updated_at" class="card-footer-item">達成日時</div>
            <div id="percent" class="card-footer-item">達成率</div>              
        </div>
        
        <goallistview></goallistview>
        
    </section>
</template>


<script>
import axios from "axios";
import http from "../../service/service";
import auth from "../../service/auth";
import Goallistview from "./goallistview.vue";
export default {
  data() {
    return {
      goalname: "",
      goalday: "",
      percent: "0"
    };
  },
  methods: {
    detail() {
      // this.$route.push({path: "/"})
    }
  },
  components: {
    Goallistview
  }
};
</script>

