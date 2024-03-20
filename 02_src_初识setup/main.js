//引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
//构造函数与工厂函数的区别：
//1）	构造函数首字母大写，且必须通过new关键字去调用
//2）	工厂函数不用通过new关键字调用，直接用就可以
// import Vue from 'vue';//vue2写法
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')//精简写法
/*拆分理解
const app=createApp(App)//创建应用实例对象-app（类似于之前Vue2中的vm,但app比vm更"轻"）
// console.log('@@@',app)通过控制台输出打印看见一些属性等确实少了一些
app.mount('#app')

//测试unmount
// setTimeout(()=>{
//     app.unmount('#app')
// },1000)
*/

/*对比vue2
const vm=new Vue({
    render:h=>h(App)
})
vm.$mount('#app')*/
