<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">目標追加</p>
        </header>
        <section class="modal-card-body">
            <b-field>
        <b-select type="number" v-model="data.child_id" 
        placeholder="子どもID" expanded>
            <option v-for="option in options"
            :key="option.child_id" :value="option.child_id">
            {{option.nickname}}</option>
        </b-select>
    </b-field>
        <b-input
            v-model="data.content"
            placeholder="目標名"
            expanded
            >
        </b-input>
        <b-field>
            <b-input
                type="number"
                v-model="data.criteria"
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
                v-model="data.deadline" 
                expanded
                >
            </b-datepicker>
        </b-field> 
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">キャンセル</button>
            <button class="button is-primary" @click="add">追加</button>
        </footer>
    </div>
</template>

<script>
import http from "../../service/service";
export default {
  data() {
    return {
      data: {
        device_id: "",
        child_id: null,
        content: "",
        criteria: null,
        deadline: new Date()
      },
      options: []
    };
  },
  methods: {
    add() {
      this.$emit("add", this.data);
    },
    getchild() {
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