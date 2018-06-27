<template>
<div id= "pin">
<h1 id = "box">
    {{pin}} 
</h1>
<p>child_id</p>
<select v-model="id">
<option v-for="a in length" v-bind:value="a" v-bind:key="a">{{data[a-1]['child_id']}}</option>
</select>
<button  class="button" type="button" @click="onclick" >    
  put
</button>
    <under-tab :index=0></under-tab>
</div>
</template>
<script>
import http from '../../service/service'
import axios from 'axios'
import auth from '../../service/auth'

export default {
    
     created: function() {
    http
      .getchild()
      .then(response => {
        this.data = response.data.data;
        this.length =  this.data['length' ];
        console.log(this.data[1]['child_id']);
      })
      .catch(function(error) {
        console.log(error.response);
      });
  },
    data() {
        return {
            length: 0 ,
            data : "",
            pin : "",
            options : "hoge",
            id : ""
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
                    console.log(error.response.data);
                }); 
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
</style>
