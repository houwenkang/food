<template>
  
   <div>
    <logo></logo>
    <div class="video-body">
      <header class="video-title">
        <div class="name"> {{msg}}</div>
       </header>
       <section class="recipes">
         <article class="recipes-item" v-for="(item,index) in arr" :key="index">
           <div class="cover">
             <img :src="item.img" alt="">
           </div>
           <div class="footer">
             <div class="content">
               <div class="info">
                 <div class="recipe-name">{{item.info}}</div>
                 <div class="author-name">{{item.info1}}</div>
                 <div class="info-footer">
                 {{item.font14}}
                 </div>
               </div>
               <div class="author"><img :src="item.author_img" alt=""></div>
             </div>
           </div>
         </article>
         
       </section>
      <div class="btn-more"  @click="page">
           <a class="addmore">查看更多结果</a>
         </div>
    </div>
     
   </div>
</template>

<script>
import logo from "../components/Logo"
export default {
components:{
  logo
},
data(){
  return{
    arr:null,
    str:'',
    msg:null,
    num:20
  }
},


mounted(){
 

  this.str=this.$route.params.id
  if(this.str=='editor'){
    this.msg='发现新菜'
  }else if(this.str=='video'){
    this.msg='视频菜谱'
  }else if(this.str=='rising'){
    this.msg='新秀菜谱'
  }else if(this.str=='hall'){
    this.msg='荣誉殿堂'
  }else if(this.str=='last_month'){
    this.msg='上月最佳'
  }
   this.getdata()
},
methods:{
   page(){
    
     
   
    console.log(this.num);
    if(this.num!=100){
       this.num=this.num+20
    }else{
      alert('没有更多数据了')
    }
    this.getdata()
  },
  getdata(){
    this.axios.get('http://localhost:3000/video/'+this.str+'?page='+this.num).then(res=>{
        console.log(res.data.data);
        console.log(this.str);
        
        this.arr=res.data.data
        
    }).catch(err=>{
      console.log(err);
      
    })
  },
 
}
}
</script>

<style scoped>

.video-body{
  
  padding: 55px 20px 0;
}
.video-title{
  color: #777;
    font-size: 13px;
    font-weight: 700;
    margin: 20px 0;
}
.name{
font-weight: 700;
color: #383835;
font-size: 23px;
}
.recipes-item{
  font-size: 12px;
    margin: 25px 0;
  position: relative;
}
.cover {
  max-width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
}
.cover img{
  position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
    width: 100%;
    height: auto;
}
.recipe-332-horizon .footer {
    padding: 5px 0 0;
}
.content{
  width: 100%;
    padding: 15px 0 0;
    overflow: hidden;
}
.info,.author{
  float: left;
}
.info{
  width: 75%;
}
.author{
  width: 25%;
  text-align: right;
}
.recipe-name {
    line-height: 1.4;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
      color: #383835;
}
.author-name{
  font-size: 15px;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.4;
    color: #383835;;
}
.info-footer{
  font-size: 14px;
 line-height: 1.4;
  color: #383835;;
}
.author img{
  width: 50px;
    height: 50px;
    border-radius: 50px;
    overflow: hidden;
    display: block;
    margin: 3px 0 3px auto;
}
.btn-more{
  margin: 10px 0;
}
.addmore{
  text-align: center;
    border: 1px solid #fa6650;
    display: block;
    height: 48px;
    font-size: 17px;
    line-height: 46px;
    color: #fa6650;
    box-sizing: border-box;
}
</style>