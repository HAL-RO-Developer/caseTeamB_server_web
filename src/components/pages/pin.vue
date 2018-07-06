<template>
<div>
<div id= "pin" v-if="ok == 1">
<h1 id = "box">
    {{pin}} 
</h1>
            <section v-for="a in length"  v-bind:key="a">
           <b-select placeholder="Select a name" v-model ="id" >
<option v-for="i in data[a-1]['child_goals'].length" v-bind:value="data[a-1]['child_goals'][i-1]['goal_id']" v-bind:key="i">{{data[a-1]['child_goals'][i-1]['content']}}({{data[a-1]['nickname']}})</option>
    </b-select>
            </section><button  class="button" type="button" @click="onclick" >    
  put
</button>
<section>
</section>
</div>
    <under-tab :index=0></under-tab>
    <button  class="button" type="button" @click="device"  id ="device" >    
  デバイス
</button>
</div>
</template>
<script>
import http from '../../service/service'
import axios from 'axios'
import auth from '../../service/auth'

export default {
    
     created: function() {
    http
      .getgoal()
      .then(response => {
          this.data = response.data.goals;
          this.length = this.data["length"];

        this.ok = 1;
      })
      .catch(error =>{
      });
  },
    data() {
        return {
            length: 0 ,
            data : "",
            pin : "",
            options : "hoge",
            id : "" ,
            ok : ""
        }
    },
    methods:{
       onclick(){
           http.getpin(this.id) 
                .then( (response) => {
                    console.log(response.data.pin);
                    this.pin = response.data.pin
                     //alert(response);
                }) 
                .catch(function (error) {
                }); 
       } ,
       device(){
          this.$router.push({ path: "/device" });

       }
    }
}
</script>

<style>

#pin{
    text-align: center;
}
#box{
    border: solid #008080;
}
#device{
 margin-top: 3%;
 text-align: center;
 float: left;
 width: 25%;
}
</style>
