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
    dataset:{
      source:[
        // x y size
        [12, 323, 400, 11.2],
        [23, 167, 300, 8.3],
        [81, 284, 100, 12],
        [91, 413, 450, 4.1],
        [13, 287, 140, 13.5],
        [50, 250, 310, 15.5],
      ]
    },
    visualMap:{
      show:false,
      dimension:3,
      min:2,
      max:15,
      inRange:{
        symbolSize:[5,60] // 气泡尺寸的范围
      }
    },
    xAxis:{},
    yAxis:{},
    series:[
      {type:'scatter', encode:{x:0,y:1}},
      {type:'scatter', encode:{x:0,y:2}},
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
