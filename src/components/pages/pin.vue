<template>
<div id= "pin" v-if="ok == 1">
<p id = "err">{{err}}</p>
<h1 id = "box">
    {{pin}} 
</h1>
    <b-select placeholder="Select a name" v-model ="id">
<option v-for="a in length" v-bind:value="data[a-1]['child_id']" v-bind:key="a">{{data[a-1]['nickname']}}</option>
    </b-select>
<button  class="button" type="button" @click="onclick" >    
  put
</button>
<section>
<button  class="button" type="button" @click="device"  id ="device" >    
  デバイス一覧
</button>
</section>
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
        this.ok = 1;
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
                    console.log(error.response.data);
                }); 
       } ,
       device(){
          this.$router.push({ path: "/device" });

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
#device{
 margin-top: 3%;
}
</style>
