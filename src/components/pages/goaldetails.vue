<template>
<div id="aaa">
  <buttun class="button" type="button" @click="day">日別</buttun>
  <buttun class="button" type="button" @click="week">週別</buttun>
  <p>ダミー</p>
  <label for="">最終達成日</label>
  <buttun class="button" type="button" @click="message">目標メッセージ</buttun>
</div>
</template>


<script>
import auth from '../../service/auth';
import http from '../../service/service';
export default{
  methods:{
        day(){
            http.createButton()
            .then((response) => {
                console.log(response.data.pin);
                this.pin = response.data.pin
            }) 
            .catch((error) =>{
                console.log(error);
            });
        }
    }
}
</script>

