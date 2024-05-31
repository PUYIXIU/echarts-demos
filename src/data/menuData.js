// 菜单的配置数据
const imgBasePath = '@/assets/images/'
export let menuData = [
    {
      title:'所有图表',
      level:0,
      path:'/show-list',
      type:'custom',
    },
    {
        title:'custom',
        level:0,
        children:[
            {
                menuTitle:'不规则柱状图',
                title:'custom / 不规则柱状图',
                level:1,
                path:'/custom/custom-bar',
                image:'/images/custom/custom-bar.png',
                type:'chart',
            },
            {
                menuTitle:'散点分布统计柱状直方图',
                title:'custom / 散点分布统计柱状直方图',
                level:1,
                path:'/custom/custom-scatter-bar',
                image:'/images/custom/custom-bar.png',
                type:'chart',
            },
        ]
    },
    {
        title:'dataset',
        level:0,
        children:[
            {
                menuTitle:'数据集柱状图',
                title:'dataSet / 柱状图',
                level:1,
                path:'/dataset/dataset-bar',
                image:'/images/dataset/dataset-bar.png',
                type:'chart',
            },
            {
                menuTitle:'数据集行列映射',
                title:'dataSet / seriesLayout',
                level:1,
                path:'/dataset/dataset-seriesLayoutBy',
                image:'/images/dataset/dataset-seriesLayoutBy.png',
                type:'chart',
            },
            {
                menuTitle:'数据到图形的映射',
                title:'dataSet / encode',
                level:1,
                path:'/dataset/dataset-encode',
                image:'/images/dataset/dataset-encode.png',
                type:'chart',
            },
            {
                menuTitle:'数据集气泡图',
                title:'dataSet / bubble',
                level:1,
                path:'/dataset/dataset-bubble',
                image:'/images/dataset/dataset-bubble.png',
                type:'chart',
            },
            {
                menuTitle:'数据集+视觉映射',
                title:'dataSet / visualMap',
                level:1,
                path:'/dataset/dataset-visualMap',
                image:'/images/dataset/dataset-visualMap.png',
                type:'chart',
            },
            {
                menuTitle:'共享数据集+图表联动',
                title:'dataSet / visualMap',
                level:1,
                path:'/dataset/dataset-dataShare',
                image:'/images/dataset/dataset-dataShare.png',
                type:'chart',
            },
        ]
    }
]
export const menuMap = {} // 菜单映射表

export function getMenuData(){
    let noChildrenMenu = []
    let hasChildrenMenu = []
    menuData.forEach((item,index)=>{
        item.index = index+1+''
        if(!item.children) {
            noChildrenMenu.push(item)
            return
        }
        hasChildrenMenu.push(item)
        item.children.forEach((subItem,subIndex)=>{
            subItem.index = `${item.index}-${subIndex+1}`
        })
    })
    return {
        noChildrenMenu,
        hasChildrenMenu
    }
}

export function getMenuMap(data = [...menuData.noChildrenMenu, ...menuData.hasChildrenMenu]){
    data.forEach(node=>{
        if(node.path) menuMap[node.path] = {
            index:node.index,
            type:node.type,
            path:node.path
        }
        if(node.children?.length){
            getMenuMap(node.children)
        }
    })
}

menuData = getMenuData()
getMenuMap()
