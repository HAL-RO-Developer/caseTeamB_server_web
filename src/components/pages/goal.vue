<template>
<div>
<div v-if="ok" id = "ok">{{ ok }}</div>
<div v-if="err" id = "err">{{ err }}</div>
    <select v-model="id">
 <option v-for="option in options" v-bind:value="option" v-bind:key="option"> 
    {{option}}
 </option>
</select>
<form action="">
<b-field label="goal">
    <b-input 
        type="text"
        v-model="goal"
        placeholder="new goal"
        required>
    </b-input>
</b-field>
 <button class="button" type="button" @click="add">登録</button>
</form>
</div>
</template>

<script>
var flg = 0;
var index = 0;
import http from '../../service/service'
import axios from 'axios'
import auth from '../../service/auth'
export default {
     created: function () {
                http.getid()
                .then((response)=> {
                    console.log(response)
                    this.options = response.data.goal_id
                }) 
                .catch(function (error) {
                    console.log(error);
                });
            
            },
        data() {
        return {
            options : "id",
            id : "",
            goal: "",
            ok : "" ,
            err : ""
        }
    },
    methods:{
  
    add(){
            http.addgoal(this.id, this.goal)
            .then((response)=> {
                console.log(response);
                this.ok = response.data.success;
            }) 
            .catch((error)=>{
                    console.log(error.response.data);
                    this.err = error.response.data.error;
            });
        },
    }
}
</script>
<style>
#ok{
    color: blue;
}
#err{
    color: red;
}
</style>
