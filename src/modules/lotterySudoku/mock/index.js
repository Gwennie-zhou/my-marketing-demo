/** 该js文件模拟发起请求,为了使效果更加逼真，像真正去服务器请求数据，因此使用定时器去假设请求时间为1s*/ 

const activitiesData = {
  code: 0,
  data: {
    prize_list: [
      {
        id: 1,
        prize_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.it168.com%2Fn%2F640x480%2F7%2F7466%2F7466229.jpg&refer=http%3A%2F%2Fimage.it168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637652326&t=2029e076fd93bccdfe72cbbe160cc25a',
        prize_name: '手机'
      },
      {
          id: 2,
          prize_img: 'https://img2.baidu.com/it/u=2637130147,1151655652&fm=224&fmt=auto&gp=0.jpg',
          prize_name: '耳机'
      },
      {
          id: 3,
          prize_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fedf00522e731f32f0c8a5a19c63e300294167550804d-iEFq3G_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637652248&t=b34b61efd23c173a443b824c14e62d3e',
          prize_name: '音响'
      },
      {
        id: 4,
        prize_img: 'https://img1.baidu.com/it/u=1915725153,4026640266&fm=26&fmt=auto',
        prize_name: '拖地机'
      },
      {
          id: 5,
          prize_img: 'https://img1.baidu.com/it/u=328207386,3577335817&fm=26&fmt=auto',
          prize_name: '谢谢参与'
      },
      {
          id: 6,
          prize_img: 'https://img0.baidu.com/it/u=4184142271,395678703&fm=26&fmt=auto',
          prize_name: '10元优惠券'
      },
      {
        id: 7,
        prize_img: 'https://img0.baidu.com/it/u=1883252739,3916298737&fm=15&fmt=auto',
        prize_name: '100积分'
      },
      {
        id: 8,
        prize_img: 'https://img2.baidu.com/it/u=1488988831,305923517&fm=26&fmt=auto',
        prize_name: '垃圾桶'
      },
    ]
  }
}
const lotteryId = parseInt(Math.random()*8+1)
// 活动基本信息
export const getActivitesData = () => {
  return new Promise((resolve,reject) => {
    setTimeout(function() {
      resolve(activitiesData)
    }, 1000)
  })
}

// 抽奖结果
export const getLotteryResult = () => {
  setTimeout(()=> {
    return {id: lotteryId}
  }, 1000)
}