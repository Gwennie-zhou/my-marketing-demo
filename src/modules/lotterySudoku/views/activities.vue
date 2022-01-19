<template>
    <div class="activities-wrapper">
      <img src="../images/home-bg.png" alt="" class="imgbg">
      <div class="grid-wrapper" >
        <img src="../images/k1.png" alt="" class="girdbg">
        <ul class="prize-list">
          <li v-for="item in prize_list" :key="item.id">
            <div v-if="item.id !== -9" class="prize-item" :class="{ active: isLotteryIng && item.id === currentIndex}">
              <img :src="item.prize_img" alt="">
              <p>{{item.prize_name}}</p>
            </div>
            <div v-else class="lottery-btn"> 
              <img :src="item.btn_img" alt="" @click.stop="start">
            </div>
          </li>
        </ul>
      </div>
      
    </div>
</template>
<script>
import { getActivitesData, getLotteryResult } from '../mock'
export default {
   data() {
      return {
        prize_list: [], //奖品列表
        currentIndex: 0, //当前正在抽奖的索引
        winId: null, //  中奖的id
        isLotteryIng: false, //是否正在抽奖
        initTime: 200, // 初始设定的时间
        time: null, // 从一个格子跳到另一个格子的时间，值越大，代表跳转越慢
        diff: 20, // 时间变化的跨度
        cicle: 0, // 当前转了多少圈
      }
   },
   async created(){
     await this.initData() // 获得奖品列表
     this.sortData() // 对奖品列表按照[0,1,2,7,8,3,6,5,4]排序
   },
   computed:{
   },
   methods:{
     async initData () {
       const res = await getActivitesData()
       if (res.code !== 0) {
         this.$toast({
           message: '网络加载错误，请稍后再试',
           duration: 1000
         })
         return
       } else {
         this.prize_list = res.data.prize_list
         this.prize_list.push({id: -9, btn_img: 'https://i-1-lanrentuku.qqxzb-img.com/2020/11/16/933c7b1e-9a1b-42af-985c-63a9d23805fd.png'})
       }
     },
     sortData () {
       const sortIndex = [1,2,3,8,-9,4,7,6,5] 
       const keyObj = {}
       const arr = []
       this.prize_list.forEach(item => {
        keyObj[item.id] = item
       })  
       sortIndex.forEach(ele => {
        arr.push(keyObj[ele])
       })
       this.prize_list = arr
     },
     async start () {
       if (this.isLotteryIng) {
         return 
       }
       this.isLotteryIng = true
       this.currentIndex = 1
       this.time = this.initTime
       this.cicle = 1
       // 模拟请求后台数
       setTimeout(()=> {
         this.winId =  parseInt(Math.random()*8+1) 
         console.log(11,this.winId );
       }, 1000)
       this.move()
     },
      move() {
        let timer = setTimeout(() => {
          this.currentIndex++
          if (this.currentIndex > 9) {
            this.currentIndex = 1
            this.cicle++
          }
          if (this.cicle >=5 && this.winId) { // 请求到数据且已转足5圈或以上，此时就可以减速了
            this.time += this.diff // 减速转动
            // 有点问题，this.winId === lotteryData.id 
            if (this.time >= 400 && this.winId === this.prize_list[this.currentIndex-1].id) {
              clearTimeout(timer)
              // const winArr = this.prize_list.filter(item => { item.id === this.winId})
              setTimeout(() => {
                this.$dialog.alert({
                  message: `恭喜您，抽中了...`,
                  theme: 'round-button',
                });
                this.isLotteryIng = false
              }, 400)
              return
            }
          } else if (this.time >= 50) { // 当跳转的时间小于50后，就将以这个速度匀速转动
            this.time -= this.diff
          }
          this.move()
        }, this.time)
      }
      
   },
}
</script>
<style lang="less" scoped>
.activities-wrapper {
  position: relative;
  .imgbg {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -9999;
  }
  .grid-wrapper {
    margin-top: 150px;
    position: relative;
    .girdbg {
      display: block;
      margin: 0 auto;
      width: 355px;
      height: 355px;
    }
  }
  .prize-list {
    position: absolute;
    top: 20px;
    left: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .prize-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0 10px 10px 0;
    width: 95px;
    height: 95px;
    background-color: #fff;
    img {
      width: 75%;
      height: 75%;
    }
    p {
      font-size: 16px;
      color: black;
    }
  }
  .lottery-btn {
    width: 95px;
    height: 95px;
    margin: 0 10px 10px 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .active {
    background-color: rgba(247, 149, 21, 0.5);
  }
}
</style>
