<template>
  <div class="wrap">
    <div>这是测试页</div>
    <!-- <div class="demo" ref="demo">{{testData}}</div> -->
    <comp1></comp1>
  </div>
</template>

<script>
import comp1 from "./components/comp1"
export default {
  data() {
    return {
      testData: ""
    }
  },
  components: {
    comp1
  },
  watch: {
    // testData(newVal) {
    //   const scroll = this.$refs.demo
    //   console.log("----", scroll.scrollHeight);
    //   scroll.style.height = scroll.scrollHeight + "px"
    // }
  },
  created() {
    // this.testData = "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
  },
  methods: {
    btnClick() {
      this.testData = "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
    }
  }
}
</script>

<style scoped>

  .demo {
    font-size: 16px;
    color: red;
    border-bottom: 1px solid black;
    min-height: 26px;
  }
</style>