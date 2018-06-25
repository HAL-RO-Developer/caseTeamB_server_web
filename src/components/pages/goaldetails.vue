<template>
    <section>
        <b-collapse class="card">
            <div slot="trigger" slot-scope="props" class="card-header">
                <div class="card-header-title">
                    <div id="goalname"  ref="">{{ goalname }}</div>
                    目標名
                </div>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            
            <footer class="card-footer">
                <div id="goalday" class="card-footer-item">{{goalday}}達成日時</div>
                <div id="percent" class="card-footer-item">{{percent}}達成率</div>
            </footer>
        </b-collapse>
    </section>
</template>

<script>
import axios from 'axios'
import http from '../../service/service'
import auth from '../../service/auth'
export default {
    created:function(){
        http.getid()
        .then((response)=> {
            console.log(response)
            this.options = response.data.goalname
            }) 
            .catch(function (error) {
            console.log(error);
        });
            
    },
    data(){
        return{
            goalname:"",
            goalday:"",
            percent:""
        }
    }
}
</script>

