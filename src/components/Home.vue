<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">登入</el-menu-item>
        <el-menu-item index="2">我的订单</el-menu-item>
        <el-menu-item index="3">购物车</el-menu-item>
        <el-menu-item index="4">
          <el-input
              placeholder="请输入商品,游戏名..."
              >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <div>

        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item,index)   in recommendingProductArr"  :key="index">
            {{item.pictures[0].picture_url}}
<!--            <el-image src= "http://localhost/XShop/resource/static/img/2.jpg">-->
<!--              <div slot="placeholder" class="image-slot">-->
<!--                加载中<span class="dot">...</span>-->
<!--              </div>-->
<!--            </el-image>-->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <h2>最新商品</h2>
      </div>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple" v-for="(item,index)   in recommendingProductArr"  :key="index">
          {{index}}
        </div></el-col>
      </el-row>
      <div>
        <h2>热门商品</h2>
      </div>
      <div class="demo-image__error">
        <div class="block">
          <span class="demonstration"></span>
          <el-image></el-image>
        </div>
      </div>
      <div>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap">返回顶部</el-backtop>
      </div>

    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
// import { newestProductList } from "../api/product";


export default {
  name: "home.vue",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      msg: "info",
      queryParams :{
        "page" : 0,
        "size" : 4
      },
      // 最新产品信息
      newestProductList : [],
      recommendingProductArr:[]
    };
  },
  //页面初始化
  mounted() {
    // 获取推荐商品
    this.listRecommendingProduct();
    // 获取最新商品
    this.listNewestProductList();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 测试获取数据
    test(){
      this.$http.get('http://localhost/XShop/product/newest',{params:{page:0,size:4}},{
        emulateJSON:true
      }).then(result =>{
          let code = result.data.code
          let data = result.data.data
          if (code == 200){
            this.newestProductList = data;
          }else {
            this.$message({
              showClose: true,
              message: '服务器请求错误',
              type: 'error'
            });
          }
      })
    },
    listNewestProductList(){
      this.$http.get('http://localhost/XShop/product/newest',{params:{page:0,size:4}},{
        emulateJSON:true
      }).then(result =>{
        let code = result.data.code
        let data = result.data.data
        if (code == 200){
          this.newestProductList = data;
        }else {
          this.$message({
            showClose: true,
            message: '服务器请求错误',
            type: 'error'
          });
        }
      })
    },
    // 推荐商品列表
    listRecommendingProduct(){
      this.$http.get('http://localhost/XShop/product/newest',{params:{page:0,size:4}},{
          emulateJSON:true
        }).then(result =>{
          let code = result.data.code
          let data = result.data.data
          if (code == 200){
            this.recommendingProductArr = data;
          }else {
            this.$message({
              showClose: true,
              message: '服务器请求错误',
              type: 'error'
            });
          }
        })
    }


  }
}
</script>

<style scoped>


.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>