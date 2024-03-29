<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age}}</h2>
  <h3>工作类型：{{person.job.type}}</h3>
  <h3>工作工资：{{person.job.salary}}</h3>
  <h3>爱好：{{person.hobby}}</h3><!--  reactive对数组对象的测试  -->
  <h3>验证reactive的深层性数据：{{person.job.a.b.c}}</h3>
  <button @click="chanceInfo">修改人的信息</button>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    //数据
    // let name = ref('张三')//（这边不写成const是因为后面可能会有变化）
    // let age = ref(18)
    // let job = reactive({
    //   type:'前端工程师',
    //   salary:'30K',
    //   a:{
    //     b:{
    //       c:666
    //     }
    //   }
    // })
    // let hobby=reactive(['抽烟','喝酒','烫头'])//reactive对数组对象的测试

    let person=reactive({
      name:'张三',
      age:18,
      job:{
        type:'前端工程师',
        salary:'30K',
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })

    //方法
    function chanceInfo(){
      person.name='李四',
      person.age = 48,
      person.job.type = 'UI设计师',
      person.job.salary = '60k'
      person.job.a.b.c=999
      person.hobby[0]='学习'
    }

    //返回一个对象（常用）
    return {//验证1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
      //返回的是一个对象的话，最先想到的就应该是键值对name:name触发了简写形式
      // name,
      // age,
      // job,
      // hobby,
      person,
      chanceInfo,
      }
    }
}
</script>
