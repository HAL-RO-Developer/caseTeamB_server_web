<template>
    <under-tab :index=2></under-tab>
</template>

<script>

export default {
  name: "index",
  data(){
    return{
      name:"makki"
    }
  },
  methods:{
    hello(){
      console.log("hello!")
      this.name = "hello!!"
    }
  }
}
</script>
<style>

</style>
