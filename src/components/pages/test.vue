<template>
  <div>
    <graph :chartData='chartData' :options='options' :width="900" :height="300"></graph>
    <button @click="fillData">ランダムデータ入力</button>
  </div>
</template>

<script>
import Graph from '../modules/graph.vue'

export default {
  components: {
    Graph
  },
  data(){
    return {
      chartData:{},
      options:{}
    }
  },
  methods:{
    // ランダムな数値を返す
    getRandomInt() {
      return Math.floor(Math.random() * 100)
    },
    // chartDataのdatasets.dataをランダムな値で埋める
    fillData () {
      this.chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      },
      this.options = {
        scales:{
          yAxes:[
            {
              ticks:{
                min: 0,
                max: 100,
              }
            }
          ]
        }
      }
    }
  },
  created() {
    this.fillData() // インスタンス作成時にfillDataを実行
  }
  
} 
</script>