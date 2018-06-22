<template>
<div>
    <ul>
        <li v-for="li in lis" v-bind:value="li" v-bind:key="li">
            <input type="checkbox" name = li value= li v-model = "list" >
            {{li}}
        </li>
    </ul>
 <button @click="onclick">    
  delete
 </button>
</div>
</template>

<script>
import http from '../../service/service'
import axios from 'axios'
import auth from '../../service/auth'
export default {
     created: function () {
             
                this.pinget()
            
            },
        data() {
        return {
            lis : "",
            id : "",
            goal: "",
        }
    },
    methods:{ 
     onclick() {
         // 消す処理

         //再描画
         this.pinget();
     } ,
     pinget() {
                http.getid()
                .then((response)=> {
                    console.log(response)
                    this.lis = response.data.goal_id
                }) 
                .catch(function (error) {
                    console.log(error);
                });
     }
  } 
}
</script>
