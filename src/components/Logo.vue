<template>
  <header class="header">
      <router-link class="goback" to="/"></router-link>
      <router-link to="/"><img class="logo" src="https://s.chuimg.com/dist/waffle/img/2e9b403.png" alt /></router-link>
  </header>
</template>

<script>
export default {
 
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.header {
  overflow: hidden;
 padding: 11px 20px;
  height: 54px;
  line-height: 54px;
  position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 0;
    background-color: #fff;
    z-index: 100;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.08);
}
.header .logo {
  width: 86px;
  height: 29px;
}
.goback{
  width: 15px;
    height: 29px;
    float: left;
    position: relative;
    top: 3px;
    display: block;
}
.goback::after{
  content: " ";
    position: absolute;
    top: 50%;
    display: block;
    width: 8px;
    height: 8px;
    border-left: 1px solid #191919;
    border-top: 1px solid #191919;
    transform: translate3d(0,-50%,0) rotate(-45deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(-45deg);
}
</style>