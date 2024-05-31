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
      source:[
        ['score', 'amount', 'product'],
        [89.3, 58212, 'Matcha Latte'],
        [57.1, 78254, 'Milk Tea'],
        [74.4, 41032, 'Cheese Cocoa'],
        [50.1, 12755, 'Cheese Brownie'],
        [89.7, 20145, 'Matcha Cocoa'],
        [68.1, 79146, 'Tea'],
        [19.6, 91852, 'Orange Juice'],
        [10.6, 101852, 'Lemon Juice'],
        [32.7, 20112, 'Walnut Brownie']
      ]
    },
    grid:[{bottom:'55%',left:'20%'},{top:'55%',left:'20%'}],
    xAxis:[{gridIndex:0},{gridIndex:1,type:'category'}],
    yAxis:[{gridIndex:0,type:'category'},{gridIndex:1},{gridIndex:1}],
    series:[
      {
        type:'bar',
        xAxisIndex:0,
        yAxisIndex:0,
        encode:{
          x:'amount',
          y:'product'
        }
      },
      {
        type:'bar',
        xAxisIndex:1,
        yAxisIndex:1,
        encode:{
          x:'product',
          y:[1]
        }
      },
      {
        type:'bar',
        xAxisIndex:1,
        yAxisIndex:2,
        encode:{
          x:'product',
          y:'score'
        }
      },
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
