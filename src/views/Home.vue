<template>
  <div class="home">
     <el-button type='success' @click="diaGo()">点我弹出子组件</el-button>
     <div id="main" style="width: 600px;height:400px;"></div>
    <HelloWorld msg="Welcome to Your Vue.js App" ref="children"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
   getInner(){
    return {height:document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight,
            width:document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth
    } 
   }
  },
  data(){
    return{
      option:{
			    title: {
			        text: 'ECharts 入门示例'
			    },
			    tooltip: {},
			    legend: {
			        data:['销量']
			    },
			    xAxis: {
			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [5, 20, 36, 10, 10, 20]
			    }]
			},
    }
  },
  methods:{
    diaGo(){
       this.$refs.children.say()
    },
    getText(){
    return 1111111
  }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart =this.$echarts.init(document.getElementById('main'),'dark');
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.option);
		}
}
</script>
