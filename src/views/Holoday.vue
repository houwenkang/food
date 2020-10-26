<template>
  <div>
    <logo></logo>
    <div class="eggs-body">
      <section>
        <h3 class="title">节日节气</h3>
        <section class="link-box">
          <router-link class="link" to="/detail/" v-for="(item,index) in arrs" :key="index"
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
        "圣诞节",
        "情人节",
        "感恩节",
        "万圣节",
        "复活节",
        "年夜饭",
        "清明节",
        "腊八节",
        "冬至",
        "元宵节",
        "端午节",
        "中秋节"
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