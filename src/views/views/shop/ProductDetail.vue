<!-- 商品详情页面-->
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
      <br/>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>其他</el-breadcrumb-item>
        <el-breadcrumb-item>商品名称</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <br>
      <br>
      <br>
      <div>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-card shadow="always">
              <el-carousel indicator-position="outside" style='margin-right: 10px'>
                <el-carousel-item v-for="(item,index)   in productInfo.pictures" :key="index">
                  <el-image :src="item.picture_url" v-if="item.type != 1" width="200" height="100" class="tableImg">
                    <div slot="placeholder" class="image-slot">
                      加载中<span class="dot">...</span>
                    </div>
                  </el-image>
                </el-carousel-item>
              </el-carousel>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="always">
              鼠标悬浮时显示
            </el-card>
          </el-col>
        </el-row>
      </div>

    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      productInfo: null
    }
  },
  mounted() {
    this.testData()
  },
  methods: {
    // 获取测试数据
    testData() {
      this.$http.get('http://localhost/XShop/product/newest', {params: {page: 0, size: 1}}, {
        emulateJSON: true
      }).then(result => {
        let code = result.data.code
        let data = result.data.data
        if (code == 200) {
          this.productInfo = data[0];
        } else {
          this.$message({
            showClose: true,
            message: '服务器请求错误',
            type: 'error'
          });
        }
      })
    },

  }

}
</script>

<style scoped>

</style>