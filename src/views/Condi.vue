<template>
  <div>
    <logo></logo>
    <div class="eggs-body">
      <section>
        <h3 class="title">调味酱料</h3>
        <section class="link-box">
          <router-link
            class="link"
            to=""
            v-for="(item, index) in arrs"
            :key="index"
            ><div class="name">{{ item }}</div></router-link
          >
        </section>
      </section>
      <section>
        <h3 class="title">调味香料</h3>
        <section class="link-box">
          <router-link class="link" to="" v-for="(item, index) in arrs1"
            :key="index"
            ><div class="name">{{item}}</div></router-link
          >
        </section>
      </section>
      <section>
        <h3 class="title">调味粉料</h3>
        <section class="link-box">
          <router-link class="link" to="" v-for="(item, index) in arrs2"
            :key="index"
            ><div class="name">{{item}}</div></router-link
          >
        </section>
      </section>
      <section>
        <h3 class="title">调味酒饮</h3>
        <section class="link-box">
          <router-link class="link" to="" v-for="(item, index) in arrs3"
            :key="index"
            ><div class="name">{{item}}</div></router-link
          >
        </section>
      </section>
      <section>
        <h3 class="title">花草植物</h3>
        <section class="link-box">
          <router-link class="link" to="" v-for="(item, index) in arrs4"
            :key="index"
            ><div class="name">{{item}}</div></router-link
          >
        </section>
      </section>
       <section>
        <h3 class="title">其他调料</h3>
        <section class="link-box">
          <router-link class="link" to="" v-for="(item, index) in arrs5"
            :key="index"
            ><div class="name">{{item}}</div></router-link
          >
        </section>
      </section>
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
      arrs: [
        "番茄酱",
        "豆瓣酱",
        "沙拉酱",
        "辣酱",
        "豆豉",
        "甜面酱",
        "芝麻酱",
        "老干妈",
        "黄豆酱",
        "花生酱",
        "番茄沙司",
        "味僧",
        "叉烧酱",
        "大酱",
        "沙茶酱",
        "海鲜酱",
        "千岛酱",
        "烤肉酱",
        "火锅底料",
        "披萨酱",
        "虾酱",
        "烧烤酱",
        "XO酱",
        "蓝莓酱",
        "草莓酱",
      ],
      arrs1: [
        "胡椒",
        "花椒",
        "八角",
        "干辣椒",
        "香草",
        "桂皮",
        "香叶",
        "罗勒",
        "草果",
        "麻椒",
        "香茅",
        "豆蔻",
        "迷迭香",
        "百里香",
        "欧芹",
      ],
      arrs2: [
        "淀粉",
        "鸡精",
        "泡打粉",
        "五香粉",
        "辣椒粉",
        "小苏打",
        "抹茶粉",
        "辣椒面",
        "十三香",
        "苏打粉",
        "发酵粉",
        "咖啡粉",
        "吉士粉",
        "塔塔粉",
        "可可粉",
        "红曲粉",
        "嫩肉粉",
        "椒盐",
        "海盐",
        "粗盐",
        "肉桂粉",
      ],
      arrs3: [
        "醋",
        "料酒",
        "黄酒",
        "葡萄酒",
        "朗姆酒",
        "白酒",
        "啤酒",
        "可乐",
        "花雕酒",
        "酒酿",
        "味啉",
        "绍酒",
        "白兰地",
        "雪碧",
        "清酒",
        "老酒",
        "百利甜酒",
      ],
      arrs4: [
        "桂花",
        "百合",
        "玫瑰",
        "薄荷",
        "枸杞",
        "肉桂",
        "甘草",
        "九层塔",
        "紫苏",
        "桃胶",
        "当归",
        "菊花",
        "鱼腥草",
        "洛神花",
        "马兰",
        "海底椰",
        "茉莉花",
        "川贝",
        "芡实",
        "槐花",
        "黄芪",
        "山奈",
        "党参",
        "穿心莲",
        "金银花",
        "首乌",
        "牛至",
        "绿茶",
        "红茶"
        
      ],
      arrs5:[
         '蚝油',
         '酵母',
         '高汤',
         '蒸鱼豉油',
         '鱼露',
         '芥末',
         '色素',
         '油泼辣子',
         '浓汤宝',
         '鸡汁',
         '琼脂',
         '鲍鱼汁',
         '蘑菇精',
         '枧水',
         '吉利丁',
         '糖',
         '酱油'
      ]
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.eggs-body {
  padding-top: 55px;
}
.title {
  margin: 20px 20px 10px;
  font-size: 17px;
  color: #383835;
  font-weight: bold;
}
.link-box {
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
}
.link {
  float: left;
  width: 22%;
  height: 0;
  overflow: hidden;
  padding-bottom: 22%;
  position: relative;
  margin-bottom: 4%;
  margin-right: 3%;
  background: #fafaf8;
  border-radius: 3px;
  box-sizing: border-box;
}
.name {
  position: absolute;
  color: #383835;
  height: 100%;
  top: 0;
  left: 0;
  font-weight: 400;
  display: flex;
  padding: 10%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  bottom: 10px;
  text-align: center;
  font-size: 12px;
  width: 100%;
}
</style>