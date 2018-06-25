<template>
<div>
    <button class="button" type="button" @click="child">子ども登録</button>
    <button class="button" type="button" @click="logout">ログアウト</button>
    <under-tab :index=2 ></under-tab>
</div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods:{
            child(){
            this.$router.push({ path: '/child' });
            },
            logout(){
               
            }
        }
    }
</script>

