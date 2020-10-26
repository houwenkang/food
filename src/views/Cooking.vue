<template>
  <div>
    <logo></logo>
    <div class="cooking-body">
      <section>
        <h3 class="title">烹调方法</h3>
        <section class="link-box">
          <router-link  class="link" to="/detail/zheng"><div class="name">蒸</div></router-link>
          <router-link  class="link" to="/detail/hongshao"><div class="name">红烧</div></router-link>
          <router-link  class="link" to="/detail/huoguo"><div class="name">火锅</div></router-link>
          <router-link  class="link" to="/detail/jian"> <div class="name">煎</div></router-link>
          <router-link  class="link" to="/detail/dun"><div class="name">炖</div></router-link>
          <router-link  class="link" to="/detail/mlxg"><div class="name">干锅</div></router-link>
          <router-link  class="link" to="/detail/lu"><div class="name">卤</div></router-link>
          <router-link  class="link" to="/detail/zha"><div class="name">炸</div></router-link>
          <router-link  class="link" to="/detail/miankao"><div class="name">免烤</div></router-link>
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
};
</script>

<style scoped>
.cooking-body {
  padding-top: 55px;
  box-sizing: border-box;
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