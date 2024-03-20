<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话(vue3配置的-sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(vue2配置的-sayHello)</button>
  <br>
  <br>
  <button @click="test1">测试在Vue2的配置中去读取vue3中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试在Vue3的setup配置中去读取vue2中的数据、方法</button>
</template>

<script>
// import {h} from 'vue' 
export default {
  name: 'App',
  //⭐扭转一下写法：在vue2中都是直接在对象中写东西都是key:value的形式；而vue3是在函数体中写东西就是正常写就好
  data(){//vue2配置的数据
    return {
      sex:'男'
    }
  },
  methods:{//vue2配置的方法
    sayWelcome(){
      alert('学习中')
    },
    test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },

  //此处只是测试一下setup，暂时不考虑响应式的问题
  setup() {
    //数据（这边不写成const是因为后面可能会有变化）
    let name = '张三'
    let age = 18

    //方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好阿！`)
    }
    function test2(){//要在页面上呈现记得返回
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)
      console.log(this.sayWelcome)
    }

    //返回一个对象（常用）
    return {//验证1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
      //返回的是一个对象的话，最先想到的就应该是键值对name:name触发了简写形式
      name,
      age,
      sayHello,
      test2,//交出test2后，页面控制台输出了undefined说明在vue3中无法获取vue2这个也证明了vue2 vue3不能混用

    }
    

    //返回一个函数（渲染函数）了解
    // return ()=>{ returnh('h1','wqq')}底下简写更好
    // return ()=>h('h1','wqq')
    /*对比vue2
    const vm=new Vue({
      render:h=>h(App)//h哪来的?在vue2中只要你写render的配置项，vue会帮你配置render并把一个h帮你传进来，这个h就是渲染函数
    })
    vm.$mount('#app')
    */

    }
}
</script>
