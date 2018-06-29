<template>
<div>
  <ul>
        <li class="card" id = "content">目標</li>
        <li class="card" id = "number">回数</li>
        <li class="card" id = "message">メッセージ</li>
        <li id = "button"></li>
          </ul>
 <ul v-for= "i in length" v-bind:value="i" v-bind:key="i">
        <li class="card" id = "content">{{data[i-1]['content']}}</li>
        <li class="card" id = "number">{{data[i-1]['message_call']}}</li>
        <li class="card" id = "message">{{data[i-1]['message']}}</li>
        <li><button id = "button" class="button" >変更</button></li>
          </ul>

      <under-tab :index= 1 ></under-tab>
</div>

</template>

<script>
export default {
  data() {
    return {
      selected: null,
      err: "",
      length: 0,
      data: []
    };
  },

}
</script>

<style>
#content,#number{
  float: left;
  width: 10%;
  text-align: center;
  height:  2em;
}
#message{
  float: left;
  width: 65%;
  text-align: center;
  height:  2em;

}
#button{
  float: left;
  width: 15%;
  text-align: center;
  height:  2em;
}
</style>
