import {createRouter, createWebHashHistory} from "vue-router";

export const routes = [
    {
        path:'/',
        redirect:'/show-list',
        component: ()=> import('@/views/Home/ShowList/index')
    },
    {
        path:'/show-list',
        component: ()=> import('@/views/Home/ShowList/index')
    },
    /* 图表配置 */

    /* custom *******************************/
    {  // 自定义的不规则图表
        path:'/custom/custom-bar',
        component:()=>import('@/components/custom/custom-bar.vue')
    },
    {  // 散点柱状图
        path:'/custom/custom-scatter-bar',
        component:()=>import('@/components/custom/custom-scatter-bar.vue')
    },

    /* dataset *******************************/
    {  // 数据集柱状图
        path:'/dataset/dataset-bar',
        component:()=>import('@/components/dataset/dataset-bar.vue')
    },
    { // 数据集行列映射配置
        path:'/dataset/dataset-seriesLayoutBy',
        component:()=>import('@/components/dataset/dataset-seriesLayoutBy.vue')
    },
    { // 数据到图形的映射
        path:'/dataset/dataset-encode',
        component:()=>import('@/components/dataset/dataset-encode.vue')
    },
    { // 数据集气泡图
        path:'/dataset/dataset-bubble',
        component:()=>import('@/components/dataset/dataset-bubble.vue')
    },
    { // 数据集+视觉映射
        path:'/dataset/dataset-visualMap',
        component:()=>import('@/components/dataset/dataset-visualMap.vue')
    },
    { // 共享数据集 图表联动
        path:'/dataset/dataset-dataShare',
        component:()=>import('@/components/dataset/dataset-dataShare.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
