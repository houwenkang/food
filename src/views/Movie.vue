<template>
  <div>
    <logo></logo>
    <div class="eggs-body">
      <section>
        <h3 class="title">影视综艺</h3>
        <section class="link-box">
          <router-link
            class="link"
            to="/detail/"
            v-for="(item, index) in arrs"
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
        "深夜食堂",
        "孤独的美食家",
        "小森林",
        "拜托了冰箱",
        "Happy Together",
        "食戟之灵",
        "多谢款待",
        "一起吃饭吧",
        "地狱厨房",
        "梦色蛋糕师",
        "十二道蜂味",
        "没有名字的甜点店",
        "康熙来了",
        "面包和汤和猫好天气",
        "白熊咖啡厅",
        "型男大主厨",
        "中华小当家",
        "料理仙姬",
        "花之懒散饭",
         "调酒师Bartender"
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