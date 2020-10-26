<template>
  <div>
    <logo></logo>
    <div class="eggs-body">
      <section>
        <h3 class="title">油</h3>
        <section class="link-box">
          <router-link
            class="link"
            to="n"
            v-for="(item, index) in arrs"
            :key="index"
            ><div class="name">{{ item }}</div></router-link
          >
        </section>
      </section>
      <section>
        <h3 class="title">粮食</h3>
        <section class="link-box">
          <router-link
            class="link"
            to="/detail/doufu"
            v-for="(item, index) in arrs1"
            :key="index"
            ><div class="name">{{ item }}</div></router-link
          >
        </section>
      </section>
      <section>
        <h3 class="title">干果</h3>
        <section class="link-box">
          <router-link
            class="link"
            to="/detail/doufu"
            v-for="(item, index) in arrs2"
            :key="index"
            ><div class="name">{{ item }}</div></router-link
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
        "香油",
        "橄榄油",
        "色拉油",
        "植物油",
        "玉米油",
        "辣椒油",
        "花生油",
        "牛油",
        "花椒油",
        "菜籽油",
        "红油",
        "调和油",
        "葵花籽油",
        "酥油"
       
      ],
      arr1: [
        "面粉",
        "大米",
        "意大利面",
        "糯米",
        "年糕",
        "西米",
        "粉丝",
        "地瓜粉",
        "糯米粉",
        "米粉",
        "燕麦",
        "燕麦片",
        "挂面",
        "薏米",
        "乌冬面",
        "玉米油",
        "小米",
        "饺子皮",
        "混沌皮",
        "全麦粉",
        "黑米",
        "魔芋",
        "木薯粉",
        "汤种",
        "小麦粉",
        "方便面",
        "春卷皮",
        "粉条",
        "米线",
        "荞麦面",
        "手擀面",
        "油条",
        "马蹄粉",
        "黄豆面",
        "凉粉",
        "黑麦粉",
        "面筋",
        "糙米",
        "粘米粉",
        "河粉",
        "紫米",
        "烤麸",
        "小麦胚芽",
        "澄面",
        "粉皮",
        "蕨根粉",
        "藕粉",
        "红曲米",
        "黄米",
        "莜面",
        "荞麦",
        "大麦",
         "高粱米"
      ],
      arr2: [
        "芝麻",
        "花生",
        "杏仁",
        "核桃",
        "板栗",
        "腰果",
        "松仁",
        "银杏果",
        "榛子",
        "开心果",
        "南瓜子",
        "瓜子仁",
        "枣",
        "蔓越莓",
        "葡萄干",
        "莲子",
        "橄榄",
        "乌梅",
        "提子干",
        "话梅",
        "罗汉果",
        "桂圆"
        
      ],
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