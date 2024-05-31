<script setup>
import * as echarts from 'echarts'
import {onBeforeUnmount, onMounted} from "vue";

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

// 计算option
function getOption(){
  option = {
    dataset:[
      {source:[[8.3, 143],
        [8.6, 214],
        [8.8, 251],
        [10.5, 26],
        [10.7, 86],
        [10.8, 93],
        [11.0, 176],
        [11.0, 39],
        [11.1, 221],
        [11.2, 188],
        [11.3, 57],
        [11.4, 91],
        [11.4, 191],
        [11.7, 8],
        [12.0, 196],
        [12.9, 177],
        [12.9, 153],
        [13.3, 201],
        [13.7, 199],
        [13.8, 47],
        [14.0, 81],
        [14.2, 98],
        [14.5, 121],
        [16.0, 37],
        [16.3, 12],
        [17.3, 105],
        [17.5, 168],
        [17.9, 84],
        [18.0, 197],
        [18.0, 155],
        [20.6, 125]]},
      {transform:{type:'ecStat:histogram', config:{}},},
      {transform:{type:'ecStat:histogram', config:{dimensions:[1]}},},
    ],
    tooltip:{},
    grid:[
      {top:'50%',right:'50%'},  // 左下角散点图
      {bottom:'52%',right:'50%'}, //左上角柱状图
      {top:'50%',left:'52%'}, //右下角柱状图
    ],
    xAxis:[
      {scale:true, gridIndex:0}, // 散点图坐标系
      {
        type:'category',
        scale:true,
        axisTick:{show:false},
        axisLabel:{show:false},
        axisLine:{show:false},
        gridIndex:1
      },
      {scale:true, gridIndex:2}
    ],
    yAxis:[
      {gridIndex:0},
      {gridIndex:1},
      {
        type:'category',
        axisTick:{show:false},
        axisLabel:{show:false},
        axisLine:{show:false},
        gridIndex:2
      },
    ],
    series:[
      {
        name:'original scatter',
        type:'scatter',
        xAxisIndex:0,
        yAxisIndex:0,
        dimensions:['x','y'],
        encode:{tooltip:['x','y']},
        datasetIndex:0,
        itemStyle:{color:'#f2a160'}
      },
      // {
      //   name:'histogram',
      //   type:'bar',
      //   xAxisIndex:1,
      //   yAxisIndex:1,
      //   datasetIndex: 2,
      //   encode:{x:0, y:1, itemName:4}
      // }
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
