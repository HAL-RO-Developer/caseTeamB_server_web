<template>
<div id= "pin">
<p id = "err">{{err}}</p>
<h1 id = "box">
    {{pin}} 
</h1>
    <b-select placeholder="Select a name" v-model ="id">
<option v-for="a in length" v-bind:value="a" v-bind:key="a">{{data[a-1]['nickname']}}</option>
    </b-select>
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
        this.data = response.data.children;
        this.length =  this.data['length' ];
      })
      .catch(error =>{
        this.err = error.response.data.error;
        console.log(error.response);
      });
  },
    data() {
        return {
            err: "",
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
#err{
  text-align: center;
  color: RED;
}
#pin{
    text-align: center;
}
#box{
    border: solid #008080;
}
</style>
