<template>
<div>
  <logo></logo>
  <div class="eggs-body">
    <section>
        <h3 class="title">蛋类</h3>
        <section class="link-box">
          <router-link  class="link" to="/detail/jidan"><div class="name">鸡蛋</div></router-link>
          <router-link  class="link" to="/detail/xiandan"><div class="name">咸蛋</div></router-link>
          <router-link  class="link" to="/detail/pidan"><div class="name">皮蛋</div></router-link>
          <router-link  class="link" to="/detail/anchun"> <div class="name">鹌鹑蛋</div></router-link>
          <router-link  class="link" to="/detail/yadan"><div class="name">鸭蛋</div></router-link>
         
        </section>
      </section>
       <section>
        <h3 class="title">豆类</h3>
        <section class="link-box">
          <router-link  class="link" to="/detail/doufu"><div class="name">豆腐</div></router-link>
          <router-link  class="link" to="/detail/hongdou"><div class="name">红豆</div></router-link>
          <router-link  class="link" to="/detail/lvdou"><div class="name">绿豆</div></router-link>
          <router-link  class="link" to="/detail/xianggan"> <div class="name">香干</div></router-link>
          <router-link  class="link" to="/detail/huangdou"><div class="name">黄豆</div></router-link>
           <router-link  class="link" to="/detail/douzha"><div class="name">豆渣</div></router-link>
          <router-link  class="link" to="/detail/qianzhang"><div class="name">千张</div></router-link>
          <router-link  class="link" to="/detail/fuzhu"><div class="name">腐竹</div></router-link>
          <router-link  class="link" to="/detail/heidou"> <div class="name">黑豆</div></router-link>
          <router-link  class="link" to="/detail/midou"><div class="name">蜜豆</div></router-link>
           <router-link  class="link" to="/detail/yundou"><div class="name">芸豆</div></router-link>
          <router-link  class="link" to="/detail/suji"><div class="name">素鸡</div></router-link>
          <router-link  class="link" to="/detail/yingzui"><div class="name">鹰嘴豆</div></router-link>
          <router-link  class="link" to="/detail/youdou"> <div class="name">油豆皮</div></router-link>
          <router-link  class="link" to="/detail/meidou"><div class="name">眉豆</div></router-link>
           <router-link  class="link" to="/detail/hongyao"><div class="name">红腰豆</div></router-link>
         
        </section>
      </section>
  </div>
</div>
  
</template>

<script>
import logo from "../components/Logo";
export default {
 components:{
   logo
 }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.eggs-body{
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
.link{
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
.name{
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