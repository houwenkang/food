<template>
  <div>
    <logo></logo>
    <div class="eggs-body">
      <section>
        <h3 class="title">腌咸肉类</h3>
        <section class="link-box">
          <router-link class="link" to="/detail/" v-for="(item,index) in arrs" :key="index"
            ><div class="name">{{item}}</div></router-link
          >
         
        </section>
      </section>
      <section>
        <h3 class="title">腌咸菜类</h3>
        <section class="link-box">
          <router-link class="link" to="/detail/" v-for="(item,index) in arrs1" :key="index"
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
        "火腿",
        "培根",
        "香肠",
        "腊肉",
        "咸肉",
        "午餐肉",
        "咸鱼",
        "脆皮肠",
        "叉烧肉",
        "木鱼花",
      ],
      arrs1: [
        "剁椒",
        "泡椒",
        "腐乳",
        "酸菜",
        "泡菜",
        "梅干菜",
        "榨菜",
        "雪里蕻",
        "辣白菜",
        "笋干",
        "泡姜",
        "橄榄菜",
        "咸菜",
        "萝卜干",
        "酸豇豆",
        "纳豆",
        "大头菜",
        "酸笋",
        "冬菜",
        "泡萝卜",
        "咸黄瓜"
        
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