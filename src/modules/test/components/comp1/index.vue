<template>
  <div>
    <div>这是组件1</div>
    <div>由组件1调取组件2中的一个方法</div>
    <button @click="click">点我</button>
    <hr>
  </div>
  
</template>

<script>
import {getThis} from "../../../../assets/utils/index"
export default {
  data() {
    return {
      text: '缓缓hh'
    }
  },
  methods: {
    click() {
      getThis(this.init)
      // getThis({content: this, getMethod: this.init})
    },
    init() {
      console.log("hello", this.text);
    }
  }
}
</script>