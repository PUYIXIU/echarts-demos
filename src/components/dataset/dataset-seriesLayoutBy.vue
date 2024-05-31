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
      // col：每行为维度（dimension），每列为系列（item）
      source:[
             ['Coffee', '2022','2023','2024'],
             ['Mocha', 43.3, 85.8, 93.7],
             ['Latte', 83.1, 73.4, 55.1],
             ['Americano', 86.4, 65.2, 82.5],
             ['Espresso', 72.4, 53.9, 39.1]
      ]
    },
    grid:[{bottom:'55%'},{top:'55%'}],
    xAxis:[
      {type:'category',gridIndex:0},
      {type:'category',gridIndex:1},
    ],
    yAxis:[{gridIndex:0},{gridIndex:1}],
    series:[
      // 一行为一个维度
      {type:'bar',seriesLayoutBy:'row'},
      {type:'bar',seriesLayoutBy:'row'},
      {type:'bar',seriesLayoutBy:'row'},

      //（默认）一列为一个维度
      {type:'bar',xAxisIndex:1,yAxisIndex:1},
      {type:'bar',xAxisIndex:1,yAxisIndex:1},
      {type:'bar',xAxisIndex:1,yAxisIndex:1},
    ],
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
