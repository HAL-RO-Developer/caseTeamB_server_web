<template>
    <button class="button" type="button" @click="child">子ども登録</button>
    <button class="button" type="button" @click="logout">ログアウト</button>
</template>

<script>
    import axios from 'axios'
    import http from '../../service/service'
    import auth from '../../service/auth'
    export default {
        data() {
            return {
                name: "",
                password: "",
                err: ""
            }
        },
        methods:{
            child(){
                http.signup(this.name, this.password)
                .then((response)=> {
                    console.log(response.data.success);
                    this.signin();
                }) 
                .catch((error)=>{
                    //   console.log(error.response.data);
                    this.err = error.response.data.error;
                });
            },
            logout(){
                http.signin(this.name, this.password)
                .then((response) => {
                    console.log("then");
                    console.log(response.data.token);
                    auth.SetToken(response.data.token);
                    this.$router.push({ path: '/logout' });
                })
                .catch((error) => {
                console.log("catch");
                     console.log(error.response.data);
                     this.err = error.response.data.error;
                });
            }
        }
    }
</script>

