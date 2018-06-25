<template>
<div id = "form" class="modal-card" style="width: auto">
    <form>
 <footer class="modal-card-foot">
    <h1>子ども　登録</h1>
     </footer>
    <section class="modal-card-body">
   <b-field label="Name">
                    <b-input
                            type="text"
                            v-model="name"
                            placeholder="child name"
                            required>
                    </b-input>
                </b-field>
     </section>

    <section class="modal-card-body">
    <b-field label="Select a birthday">
        <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            v-model="month"
            >
        </b-datepicker>
           </b-field>     
           </section> 

     <section class="modal-card-body">
    <b-radio v-model="radio"
                native-value=0>
                男
            </b-radio>
            <b-radio v-model="radio"
                native-value=１>
                女
            </b-radio>
     </section>

     <footer class="modal-card-foot">
    <button class="button" type="button"  @click="onclick">登録</button>
     </footer>
    </form>
     <p v-if="month">{{month}}</p>
    <under-tab :index=2 ></under-tab>
</div>
</template>

<script>
    export default {
        data() {
            return {
                name : "",
                radio: null,
                 month: null
                 
            }
        } ,
        methods:{
      onclick(){
          // post 

          //遷移
        this.$router.push({ path: '/' });

      }
           }
    }
</script>


