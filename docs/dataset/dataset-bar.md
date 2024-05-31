# dataset bar

<a href="https://echarts.apache.org/handbook/zh/concepts/dataset">官网介绍</a>

## 数据结构

dataset的数据源source，**数据结构**上可以是
- _二维数组_
- _对象数组_

## 维度 dimensions && 数据项 item

以列为主导的source：
- _一列为一个维度_
- _一行为一个数据项_
以行为主导则反之

## 指定维度 dimensions

如果是二维数组，二维数组的首行可以是维度名，也可以直接算作数据行



可以手动指定dimensions维度，
针对每一维度还能指定类型。



> 如果维度类型设置为**float/int**时，
> echarts会使用**TypedArray**存储数据，**这样对性能优化有好处**
