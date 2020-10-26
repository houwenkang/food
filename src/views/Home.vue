
<template>
  <div>
    <header class="header">
      <img
        class="logo"
        src="https://s.chuimg.com/dist/waffle/img/2e9b403.png"
        alt
      />
    </header>
    <div class="container">
      <div class="wrapper">
        <input
          type="text"
          class="search"
          placeholder="搜索菜谱、食材"
          v-model="value"
          @keyup.enter="select"
        />
      </div>
      <div class="nav">
        <router-link to="/detail/jiachang" class="nav-title">
          <span>家常菜</span>
        </router-link>
        <router-link to="/detail/kuaishou" class="nav-title">
          <span>快手菜</span>
        </router-link>
        <router-link to="/detail/xiafan" class="nav-title">
          <span>下饭菜</span>
        </router-link>
        <router-link to="/detail/zaocan" class="nav-title">
          <span>早餐</span>
        </router-link>
        <router-link to="/detail/rou" class="nav-title">
          <span>肉</span>
        </router-link>
        <router-link to="/detail/yu" class="nav-title">
          <span>鱼</span>
        </router-link>
        <router-link to="/About" class="nav-all">全部菜谱分类</router-link>
      </div>
      <h3 class="flex">菜谱榜单</h3>

      <div class="tiles">
        <router-link to="/video/editor" class="a">
          <div class="ratio">
            <img
              src="https://i1.chuimg.com/1f17eb06a73f458ba2ef4cf7bb9c2b6b_2449w_2448h.jpg@2o_50sh_1pr_1l_560w_340h_1c_1e_90q_1wh"
              alt
            />
          </div>
          <div class="info">
            <h3 class="title">发现新菜</h3>
            <div class="desc">新创建的菜谱，编辑每日精选</div>
          </div>
        </router-link>

        <router-link to="/video/video" class="a">
          <div class="ratio">
            <img
              src="https://i2.chuimg.com/96e13b9869e84d84af68947bf52dbcc8_1620w_1080h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90"
              alt
            />
          </div>
          <div class="info">
            <h3 class="title">视频菜谱</h3>
            <div class="desc">视频详解操作流程，想失败都难</div>
          </div>
        </router-link>

        <router-link to="/video/rising" class="a">
          <div class="ratio">
            <img
              src="https://i1.chuimg.com/46efc58756824e87a7f8561e59f94dd4_1600w_1066h.jpg@2o_50sh_1pr_1l_560w_340h_1c_1e_90q_1wh"
              alt
            />
          </div>

          <div class="info">
            <h3 class="title">新秀菜谱</h3>
            <div class="desc">被10人做过的菜谱，推荐每天逛逛</div>
          </div>
        </router-link>

        <router-link to="/video/hall" class="a">
          <div class="ratio">
            <img
              src="https://i2.chuimg.com/bb0b18901f6011e7947d0242ac110002_1616w_1080h.jpg?imageView2/1/w/560/h/340/interlace/1/q/90"
              alt
            />
          </div>
         <div class="info">
           <h3 class="title">荣誉殿堂</h3>
          <div class="desc">被1000人做过的菜谱，好吃到流泪</div>
         </div>
          
        </router-link>

        <router-link to="/video/last_month" class="a">
        <div class="ratio">
  <img
            src="https://i2.chuimg.com/fc8c22e089a143ce9588f1d886e46c6b_1280w_854h.jpg?imageView2/1/w/640/h/520/q/90/format/jpg"
            alt
          />
        </div>
        <div class="info">
            <h3 class="title">上月最佳</h3>
          <div class="desc">上月口碑最好的菜谱，精彩不容错过</div>
        </div>
        
        </router-link>
      </div>

      <ul class="list">
        <li class="item" v-for="(item, index) in lists" :key="index">
          <div class="cover">
            <img :src="item.img" alt width="140" height="95" />
          </div>
          <div class="content">
            <h3 class="content-t">{{ item.title }}</h3>
            <span>{{ item.ncooked }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import router from "../router";

export default {
  data() {
    return {
      lists: null,
      value: null,
      arrs: null,
      objs: [
        {
          item: "jiachang",
          title: "家常菜",
        },
        {
          item: "kuaishou",
          title: "快手菜",
        },
        {
          item: "xiafan",
          title: "下饭菜",
        },
        {
          item: "zaocan",
          title: "早餐",
        },
        {
          item: "rou",
          title: "肉",
        },
        {
          item: "yu",
          title: "鱼",
        },
        {
          item: "dangao",
          title: "烘焙",
        },
        {
          item: "shucai",
          title: "蔬菜",
        },
        {
          item: "tang",
          title: "汤粥主食",
        },
        {
          item: "sucai",
          title: "素菜",
        },
        {
          item: "tianpin",
          title: "甜品饮品",
        },
        {
          item: "xiaochi",
          title: "小吃",
        },
        {
          item: "lingshi",
          title: "零食",
        },
        {
          item: "lanren",
          title: "懒人食谱",
        },
        {
          item: "xiajiu",
          title: "下酒菜",
        },
        {
          item: "yiren",
          title: "一人食",
        },
        {
          item: "yanke",
          title: "宴客",
        },
        {
          item: "xiawu",
          title: "下午茶",
        },
        {
          item: "biandang",
          title: "便当",
        },
        {
          item: "zheng",
          title: "蒸",
        },
        {
          item: "hongshao",
          title: "红烧",
        },
        {
          item: "jian",
          title: "煎",
        },
        {
          item: "huoguo",
          title: "火锅",
        },
        {
          item: "dun",
          title: "炖",
        },
        {
          item: "ganguo",
          title: "干锅",
        },
        {
          item: "lu",
          title: "卤",
        },
        {
          item: "zha",
          title: "炸",
        },
        {
          item: "miankao",
          title: "免烤",
        },
        {
          item: "jidan",
          title: "鸡蛋",
        },
        {
          item: "xiandan",
          title: "咸蛋",
        },
        {
          item: "pidan",
          title: "皮蛋",
        },
        {
          item: "anchun",
          title: "鹌鹑蛋",
        },
        {
          item: "yadan",
          title: "鸭蛋",
        },
        {
          item: "doufu",
          title: "豆腐",
        },
        {
          item: "hongdou",
          title: "红豆",
        },
        {
          item: "lvdou",
          title: "绿豆",
        },
        {
          item: "xianggan",
          title: "香干",
        },
        {
          item: "huangdou",
          title: "黄豆",
        },
        {
          item: "douzha",
          title: "豆渣",
        },
        {
          item: "qianzhang",
          title: "千张",
        },
        {
          item: "fuzhu",
          title: "腐竹",
        },
        {
          item: "heidou",
          title: "黑豆",
        },
        {
          item: "midou",
          title: "蜜豆",
        },
        {
          item: "yundou",
          title: "芸豆",
        },
        {
          item: "suji",
          title: "素鸡",
        },
        {
          item: "yingzui",
          title: "鹰嘴豆",
        },
        {
          item: "youdou",
          title: "油豆皮",
        },
        {
          item: "meidou",
          title: "眉豆",
        },
        {
          item: "hongyao",
          title: "红腰豆",
        },
        {
          item: "sushe",
          title: "宿舍",
        },
        {
          item: "xiaoye",
          title: "宵夜",
        },
        {
          item: "shuiguo",
          title: "水果",
        },
        {
          item: "nai",
          title: "奶类",
        },
        {
          item: "zizhi",
          title: "自制",
        },
        {
          item: "chuangyi",
          title: "创意菜",
        },
        {
          item: "qingxin",
          title: "小清新",
        },
        {
          item: "yecan",
          title: "野餐",
        },
        {
          item: "shipin",
          title: "视频菜谱",
        },
        {
          item: "yiguo",
          title: "异国风味",
        },
        {
          item: "dashi",
          title: "大师秘方",
        },
      ],
    };
  },
  mounted() {
    
    this.axios
      .get("http://localhost:3000/list")
      .then((res) => {
        this.lists = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    select() {
      this.arrs = this.objs.filter((item) => {
        return item.title == this.value;
      });
      console.log(this.arrs);
      if (this.arrs.length == 1) {
        router.push({ name: "Detail", params: { id: this.arrs[0].item } });
      } else {
        router.push({ path: "Search", query: { keyword: this.value } });
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  padding: 10px 20px;
  height: 54px;
}
.header .logo {
  width: 86px;
  height: 29px;
}
.wrapper {
  height: 70px;
  padding: 20px 20px 0;
}
.search {
  padding-left: 35px;
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #e8e6e5;
  border-radius: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAABmJLR0QAugC6ALpASYqeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QoEAg8dQLyO3wAAA2lJREFUWMPN2EuoV1UUx/HP/1rXsEgry7rkILUIy0mDQoUeF+4imvQkpccgCno5CcxBZUEOioKQ6CFSDkqaWKSUBju6DYLoIQSlFCIWOlAbCN3EzMf9Nzk3Lod9zvn///dvt99wr7XP+Z511l577d1qt9ug1WppUkppEEuxHIsxH+cW5r9wED/jW3wVEX/qQe12W6sTsJTSebgfK3B+h8//G9uxKSIO9R0spTSCp3Gh3nQCG7A5IsanDJZSGsBq3Ks/+hrPRMTRnsEKqBdxa9Mz8AdO4iIMNPjvxpNNcHVgq7GyYt5RfIJR7I6IE8WcGViEm3AHLqmY/z1WRcTprsBSSsN4pWLOR3gzIsYaVu/ZuA+PYjDj8k5EbOgYLKU0C1sziX4Kz0dE6iapUkrXYj3mlEzjWBERv1aBlXPigYrVt7ZbKIiIXViF4yXTAB6vmztQCv89GZ8tEfF5r0sxIn7BaxnTLSmloUYwXJ+J1lG81YdSsRV7SmOtulU/GWx5xr6t122lFLVxfJAxLe0EbHHGPqp/Gi2SfrKuKWpmLdj8ku10sSH3RRFxDPtKw4O4uAlsdsl2ZKJ49lEHM2Ozm8Bkale/Nd6p40CpC2j8kilqTkV7VAtWDvOsujrTrYokX5RpAg41ge3N2Jf1MVpLJnW7E9ofEY0R25mx35VSavUJ7O7M2M5OcuyLTHJehZE+/MaFFVV+tBEsIo7gy4zPmpTSvClAzcS6TAXYj+86iRi8m4naHLyeUrqgB6hBvFREPteTtTsCi4g9+DDjtxDvpZSWdAE1VBxCbsyYf8BndfNzHew5eB9XVBTIHcWJZ28F0LziALMSMyveuy0i1vXS8w9hE+bWfNQB7MLhAngursaVRUvTpPURsbmX49t8vI1LnTm9EBHbO2mtJ+fbATyIb84g2NqU0rKOciyTMxOd5hO4rMsXj+FT3J6p+pP3ysci4qeu7y4KwLNwM27DDTWJfQo/ImFHRBxLKV2HNyqOcopD88MR8VvXYCXIGViAy4supFXc9uzHvog4npkzjJdrWq3DeCgifu8ZbAq7wJ14tsZlHx4ZGRkZG/AfKiI+xsYalwVY09TBnim4jdhS4zI8LWCFXi26maobpOkBK86Zz1X0Y9unM2Ii4iSeKkBOFPVs68R1wr+r8v+mfwCkwlvqzFCr0QAAAABJRU5ErkJggg==);
  background-position: 8px 14px;
  background-size: 20px;
  background-repeat: no-repeat;
  font-size: 18px;
  line-height: 50px;
}
.nav {
  margin: 20px;
  font-size: 18px;
  overflow: hidden;
}
.nav-title {
  position: relative;
  float: left;
  overflow: hidden;
  margin-right: 2.5%;
  margin-bottom: 2.5%;
  padding-bottom: 31.66%;
  width: 31.66%;
  height: 0;
  background-color: #e8e8e8;
  background-image: url(https://i2.chuimg.com/52f1175bd6c04049b123a8f08edd3fd3_200w_1200h.jpg);
  background-size: cover;
}
.nav-title:nth-child(3n) {
  margin-right: 0;
}
.nav-title:nth-child(2) {
  background-position: 0 -100%;
}
.nav-title:nth-child(3) {
  background-position: 0 -200%;
}
.nav-title:nth-child(4) {
  background-position: 0 -300%;
}
.nav-title:nth-child(5) {
  background-position: 0 -400%;
}
.nav-title:nth-child(6) {
  background-position: 0 -500%;
}
.nav-title span {
  position: absolute;
  bottom: 14px;
  display: block;
  width: 100%;

  color: #fff;
  text-align: center;
  font-weight: 700;
}
.nav-all {
  float: left;
  padding: 12px 24px;
  width: 100%;
  background: #f2f2f2;
  color: #383831;
  text-align: center;
  font-size: 17px;
  line-height: 23px;
}
.flex {
  padding: 20px;
  font-size: 20px;
  line-height: 26px;
  color: #383831;
}

.tiles {
  padding: 0 0 0 20px;
  overflow: auto;
  min-width: 100%;
  width: 1px;
  white-space: nowrap;
  font-size: 0;
}
.tiles .ratio {
  width: 220px;
  height: 130px;
  position: relative;
}
.ratio img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.tiles .a {
  display: inline-block;
  margin-right: 10px;
  font-size: 16px;
}
.title {
  margin-top: 15px;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  color: #383831;
}
.desc {
  margin-top: 10px;
  margin-bottom: 20px;
  color: #95958f;
  font-size: 13px;
}
.item {
  margin: 0 20px 15px;
  background-color: #fff;
  display: flex;
}
.item .cover {
  width: 140px;
  height: 95px;
  background-color: #e2e2e2;
  flex-shrink: 0;
}
.item img {
  max-width: 100%;
}
.content {
  margin-left: 12px;
  flex-shrink: 1;
  min-width: 0;
}
.content-t {
  font-size: 18px;
  color: #191919;
  margin: 2px 4px 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content > span {
  margin-right: 10px;
  font-size: 12px;
  color: #777;
}
</style>
