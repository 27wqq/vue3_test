<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age}}</h2>
  <h3>工作类型：{{job.type}}</h3>
  <h3>工作工资：{{job.salary}}</h3>
  <button @click="chanceInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup() {
    //数据（这边不写成const是因为后面可能会有变化）
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30K',
    })

    //方法
    function chanceInfo(){
      name.value ='李四',
      age.value = 48,
      console.log(name,age)//输出的是一个ref引用对象
      job.value.type = 'UI设计师',
      job.value.salary = '60k'
      console.log(job.value)//输出的是一个proxy对象
    }

    //返回一个对象（常用）
    return {//验证1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
      //返回的是一个对象的话，最先想到的就应该是键值对name:name触发了简写形式
      name,
      age,
      job,
      chanceInfo,
      }
    }
}
</script>
