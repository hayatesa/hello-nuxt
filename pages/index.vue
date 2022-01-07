<template>
  <div class="container-main">
    <h1>{{title}}</h1>
    <p>asyncData 获取的数据： {{message}}</p>
    <nuxt-link to="/user/120/details">用户详情</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  // beforeCreate created 在服务端执行，如果有 ajax 请求，请求在客户端发送（无法 SEO）
  // 因此页面发送请求应使用 asyncData 或 fetch，在服务端和客户端都执行
  // asyncData 返回的结果会被合并到页面组件的 data 属性中
  // fetch 不需要返回结果，一般用于操作 vuex
 async asyncData ({$axios}) {
  //  console.log(Object.keys(context))
  const data = await $axios.get('/mock/route/to/demo')
  // const data = {
  //   message: 'Hello Nuxt.js!'
  // }
   return data
 },
 data () {
   return {
     title: '首页'
   }
 },
  mounted() { // 等待 DOM 加载完成，在浏览器执行
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  },
});
</script>
<style lang="scss">
</style>
