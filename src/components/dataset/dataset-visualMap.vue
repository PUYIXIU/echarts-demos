<script setup>
import * as echarts from 'echarts'
import {onBeforeUnmount, onMounted} from "vue";
import {themeColorList, themeColorMap} from "@/data/colors.js";

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
    grid:{containLabel:true}, // 包含label
    xAxis:{name:'amount'},
    yAxis:{type:'category'},
    visualMap:{
      orient:'horizontal',
      left:'center',
      min:10,
      max:100,
      text:['High Score','Low Score'],
      dimension:0, //作为颜色映射的凭证维度
      inRange:{color:[ // 差值颜色
          themeColorMap.m_blue,
          themeColorMap.m_yellow,
          themeColorMap.m_red,
        ]}
    },
    series:[
      {
        type:'bar',
        encode:{
          x:'amount',
          y:'product'
        }
      }
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
