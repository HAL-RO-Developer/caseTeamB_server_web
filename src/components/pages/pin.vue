<template>
<div>
<h1>
    {{pin}} 
</h1>
<button @click="onclick">    
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
    data() {
        return {
            pin : "hoge"
        }
    },
    methods:{
       onclick(){
           http.getpin() 
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
