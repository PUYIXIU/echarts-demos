 <script setup>
 import * as echarts from 'echarts'
 import {onBeforeUnmount, onMounted} from "vue";
 import {themeColorList} from "@/data/colors.js";

 const domId = 'custom-bar-id' // dom-id
 let chart // 表格实例
 let option = {} // 配置

 // 初始化图表
 function initChart(){
   let dom = document.getElementById(domId)
   dom && (chart = echarts.init(dom))
   getOption()
   chart && (chart.setOption(option))
   window.addEventListener('resize', resize)
 }

 // 设置option
 function getOption(){
   option = {
    color:themeColorList,
     legend:{},
     tooltip:{},
     dataset:{
      /* 数组写法 */
      //  source:[ // 一列为一个系列
      //      ['咖啡热度', '2022','2023','2024'],
      //      ['摩卡', 43.3, 85.8, 93.7],
      //      ['拿铁', 83.1, 73.4, 55.1],
      //      ['美式', 86.4, 65.2, 82.5],
      //      ['意式浓缩', 72.4, 53.9, 39.1]
      //  ]

       /* 对象数组写法 */
       dimensions:['coffee', '2022', '2023', '2024'],
       source:[  // 一列为一个系列
         {'coffee':'Mocha','2022':43.3,'2023':85.8,'2024':93.7},
         {'coffee':'Latte','2022':83.1,'2023':73.4,'2024':55.1},
         {'coffee':'Americano','2022':86.4,'2023':65.2,'2024':82.5},
         {'coffee':'Espresso','2022':72.4,'2023':53.9,'2024':39.1},
       ]
     },
     xAxis:{type:'category'},
     yAxis:{},
     series:[
       {type:'bar'},
       {type:'bar'},
       {type:'bar'},
     ]
   }
 }

 // 自适应大小
 function resize(){
   chart && (chart.resize())
 }

 // 销毁
 function destroy(){
   chart && (chart.dispose())
   chart = null
   window.removeEventListener('resize',resize)
 }

 onMounted(()=>{
   initChart()
 })

 onBeforeUnmount(()=>{
   destroy()
 })

 </script>

 <template>
   <div class="full chart-wrapper">
     <div class="chart-canvas" :id="domId"></div>
   </div>
 </template>

 <style scoped lang="scss">
 .chart-canvas{
   width:100%;
   height:100%;
 }
 </style>
