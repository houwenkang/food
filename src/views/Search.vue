<template>
  <div>
    <logo></logo>
    <div class="container">
      <div class="wrapper">
        <input
          type="text"
          class="search"
          placeholder="搜索菜谱、食材"
          v-model="value"
          @keyup.enter="select"
        />
      </div>
      <ul class="list" v-if="lists.length>0">
        <li class="item" v-for="(item,index) in lists" :key="index">
          <div class="cover">
            <img :src="item.img" alt width="140" height="95" />
          </div>
          <div class="content">
            <h3 class="content-t">{{item.title}}</h3>
            <span>{{item.stat}}</span>
          </div>
        </li>
      </ul>
      <p v-else class="none">下厨房没有这个菜谱......</p>
    </div>
  </div>
</template>

<script>
import logo from "../components/Logo";
export default {
  data(){
    return{
      value:null,
      lists:null
    }
   
  },
  components: {
    logo,
  },
  mounted() {
  console.log();
  this.value=this.$route.query.keyword
  this.getdata(this.$route.query.keyword)
},
methods:{
  select(){
  this.getdata(this.value)
  },
  getdata(keyword){
    this.axios.get('http://localhost:3000/search?keyword='+keyword).then(res=>{
      this.lists=res.data.data
    }).catch(err=>{
      console.log(err);
    })
  }
}
};

</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container{
  padding-top: 55px;
}
.wrapper {
  height: 70px;
  padding: 20px 20px 0;
  margin-bottom: 20px;
}
.search {
  padding-left: 35px;
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #e8e6e5;
  border-radius: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAABmJLR0QAugC6ALpASYqeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QoEAg8dQLyO3wAAA2lJREFUWMPN2EuoV1UUx/HP/1rXsEgry7rkILUIy0mDQoUeF+4imvQkpccgCno5CcxBZUEOioKQ6CFSDkqaWKSUBju6DYLoIQSlFCIWOlAbCN3EzMf9Nzk3Lod9zvn///dvt99wr7XP+Z511l577d1qt9ug1WppUkppEEuxHIsxH+cW5r9wED/jW3wVEX/qQe12W6sTsJTSebgfK3B+h8//G9uxKSIO9R0spTSCp3Gh3nQCG7A5IsanDJZSGsBq3Ks/+hrPRMTRnsEKqBdxa9Mz8AdO4iIMNPjvxpNNcHVgq7GyYt5RfIJR7I6IE8WcGViEm3AHLqmY/z1WRcTprsBSSsN4pWLOR3gzIsYaVu/ZuA+PYjDj8k5EbOgYLKU0C1sziX4Kz0dE6iapUkrXYj3mlEzjWBERv1aBlXPigYrVt7ZbKIiIXViF4yXTAB6vmztQCv89GZ8tEfF5r0sxIn7BaxnTLSmloUYwXJ+J1lG81YdSsRV7SmOtulU/GWx5xr6t122lFLVxfJAxLe0EbHHGPqp/Gi2SfrKuKWpmLdj8ku10sSH3RRFxDPtKw4O4uAlsdsl2ZKJ49lEHM2Ozm8Bkale/Nd6p40CpC2j8kilqTkV7VAtWDvOsujrTrYokX5RpAg41ge3N2Jf1MVpLJnW7E9ofEY0R25mx35VSavUJ7O7M2M5OcuyLTHJehZE+/MaFFVV+tBEsIo7gy4zPmpTSvClAzcS6TAXYj+86iRi8m4naHLyeUrqgB6hBvFREPteTtTsCi4g9+DDjtxDvpZSWdAE1VBxCbsyYf8BndfNzHew5eB9XVBTIHcWJZ28F0LziALMSMyveuy0i1vXS8w9hE+bWfNQB7MLhAngursaVRUvTpPURsbmX49t8vI1LnTm9EBHbO2mtJ+fbATyIb84g2NqU0rKOciyTMxOd5hO4rMsXj+FT3J6p+pP3ysci4qeu7y4KwLNwM27DDTWJfQo/ImFHRBxLKV2HNyqOcopD88MR8VvXYCXIGViAy4supFXc9uzHvog4npkzjJdrWq3DeCgifu8ZbAq7wJ14tsZlHx4ZGRkZG/AfKiI+xsYalwVY09TBnim4jdhS4zI8LWCFXi26maobpOkBK86Zz1X0Y9unM2Ii4iSeKkBOFPVs68R1wr+r8v+mfwCkwlvqzFCr0QAAAABJRU5ErkJggg==);
  background-position: 8px 14px;
  background-size: 20px;
  background-repeat: no-repeat;
  font-size: 18px;
  line-height: 50px;
}
.item {
  margin: 0 20px 15px;
  background-color: #fff;
  display: flex;
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
  margin: 2px 4px 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content > span {
  margin-right: 10px;
  font-size: 12px;
  color: #777;
}
.none{
  margin: 20px;
  font-size: 17px;
  color: #383835;
 
}
</style>