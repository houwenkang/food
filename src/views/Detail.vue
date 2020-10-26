<template>
  <div>
    <logo></logo>
    <div class="detail-body">
      <section class="m20">
        <h1 class="title">{{ str }}</h1>
        <ul class="topbar">
          <li @click="lx('lx')" :class="{ active: tab == 'lx' }">最近流行</li>
          <li @click="lx('hot')" :class="{ active: tab == 'hot' }">最受欢迎</li>
        </ul>
      </section>
      <ul class="list" v-if="arrs.length>0">
        <li class="item" v-for="(arr, index) in arrs" :key="index" >
          <div class="cover">
            <img :src="arr.img" alt="" />
          </div>
          <div class="content">
            <h3 class="content-t">{{ arr.title }}</h3>
            <span>{{ arr.stat }}</span>
          </div>
        </li>
      </ul>
      <p v-else>暂无数据</p>
    </div>
  </div>
</template>

<script>
import logo from "../components/Logo";

export default {
  components: {
    logo,
  },
  data() {
    return {
      msg: "",
      arrs: [],
      str: "家常菜",
      tab: "lx",
      objs: [
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
          item:"zizhi",
          title:"自制"
        },
        {
         item:"chuangyi",
         title:"创意菜"
        },
        {
          item:"qingxin",
          title:"小清新"

        },
        {
          item:"yecan",
          title:"野餐"
        },
        {
          item:"shipin",
          title:"视频菜谱"
        },
        {
          item:"yiguo",
          title:"异国风味"
        },
        {
          item:"dashi",
          title:"大师秘方"
        },
       
      ],
    };
  },
  mounted() {
    this.msg = this.$route.params.id;
    for(var i=0;i<this.objs.length;i++){
      if(this.msg==this.objs[i].item){
        this.str=this.objs[i].title
      }
    }
    
    this.getdata();
  },
  methods: {
    lx(t) {
      this.tab = t;
      this.getdata();
    },
    getdata() {
      this.axios
        .get("http://localhost:3000/detail/" + this.msg + "?tab=" + this.tab)
        .then((res) => {
          this.arrs = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.detail-body {
  padding-top: 55px;
  margin: 20px;
}
.m20 {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}
.title {
  font-size: 23px;
  font-weight: bold;
  line-height: 32px;
  color: #383835;
}
.topbar li {
  padding-left: 20px;
  display: inline-block;
  line-height: 32px;
  font-size: 15px;
}
.item {
  background-color: #fff;
  display: flex;
  padding: 0 0 15px;
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
  padding: 2px 0 10px;
  line-height: 22px;
}
.content > span {
  margin-right: 10px;
  font-size: 12px;
  color: #777;
}
.topbar li.active {
  color: #fa6650;
}
</style>