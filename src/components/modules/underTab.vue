<template>
    <section id="undertab"  class="container">
    <b-tabs type="is-toggle" v-model="IndexModel" @change="change" expanded>
        <b-tab-item label="登録" icon="google-photos"></b-tab-item>
        <b-tab-item label="目標" icon="library-music"></b-tab-item>
        <b-tab-item label="設定" icon="settings"></b-tab-item>
    </b-tabs>
    </section>
</template>

<script>
export default {
    data() {
        return {
            IndexModel: 1
        }
    },
    created(){
        this.IndexModel = this.index 
    },
    methods:{
        change(){
            // this.$router.push({path:"/login"})
            switch (this.IndexModel) {
                case 0:
                    this.$router.push({path:"/pin"})
                    break;
                case 1:
                    this.$router.push({path:"/"})
                    break;
                case 2:
                    this.$router.push({path:"/settings"})
                    break;
                default:
                    break;
            }
        }
    },
    props:{
        "index":{
            type :Number,
            default:0
        }
    }
}
</script>


<style>
  ＃undertab {
    position: relative;
    padding-bottom: タブバーの高さ分;
  }
  .b-tabs {
    position: fixed;
    left: 0;
    bottom: 0;
    height: タブバーの高さ;
  }
  .b-tabs .tab-content{
      padding: 0;
  }
</style>