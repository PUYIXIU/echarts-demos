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
  addEvent()
  window.addEventListener('resize', resize)
}

// 设置option
function getOption(){
  option = {
    color:themeColorList,
    legend:{},
    tooltip:{
      trigger:'axis',
      showContent:false,
    },
    dataset:{
      source:[
        ['product', '2019', '2020', '2021', '2022', '2023', '2024'],
        ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    grid:{top:'55%'},
    xAxis:{type:'category'},
    yAxis:{gridIndex:0},
    series:[
      {
        type:'line',
        smooth:true,
        seriesLayoutBy:'row',
        emphasis:{focus:'series'}
      },
      {
        type:'line',
        smooth:true,
        seriesLayoutBy:'row',
        emphasis:{focus:'series'}
      },
      {
        type:'line',
        smooth:true,
        seriesLayoutBy:'row',
        emphasis:{focus:'series'}
      },
      {
        type:'line',
        smooth:true,
        seriesLayoutBy:'row',
        emphasis:{focus:'series'}
      },
      {
        type:'pie',
        id:'pie',
        radius:'30%',
        center:['50%','25%'],
        emphasis:{focus:'self'},
        label:{
          formatter:'{b}: {@2012} ({d}%)'
        },
        encode:{
          itemName:'product',
          value:'2019',
          tooltip:'2019'
        }
      }
    ]
  }
}

// 监听图表事件
function addEvent(){
  chart.on('updateAxisPointer',event=>{
    const xAxisInfo = event.axesInfo[0] // 获取x轴
    if(xAxisInfo){
      const dimension = xAxisInfo.value + 1; // 当前选中的维度
      chart.setOption({
        series:{
          id:'pie',
          label:{
            formatter:`{b}: {@[${dimension}]} ({d}%)`
          },
          encode:{
            value:dimension,
            tooltip:dimension
          }
        }
      })
    }
  })
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
