<template>
  <div>
    <!-- 头部导航条 -->
    <header-nav></header-nav>
    <!-- 轮播图 -->
    <div class="g-indexcol">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item,index in indexCarousel" :key="index">
        <div><img :src="item.pic" alt="" /></div>
      </el-carousel-item>
    </el-carousel>
    </div>
    <!-- 缩略图1 -->
    <index-thumbnail></index-thumbnail>
    <!-- 活动专区 -->
    <div class="container m-indextitle">
      <h1>活动专区</h1>
    </div>
    <index-thumbnail2></index-thumbnail2>
    <!-- 热销商品 -->
    <div class="container m-indextitle">
      <h1>热销商品</h1>
    </div>
    <index-thumbnail3></index-thumbnail3>
    <!--巨幕-->
    <!--科沃斯团购，一站式专业采购平台-->
    <div class="container m-indextitle">
      <div class="jumbotron XboxJU">
      </div>
    </div>
    <!--配件专区-->
    <div class="container m-indextitle">
      <h1>配件专区</h1>
    </div>
    <index-thumbnail4></index-thumbnail4>
    <!--猜你喜欢-->
    <div class="container m-indextitle">
      <h1>猜你喜欢</h1>
    </div>
    <index-thumbnail5></index-thumbnail5>
  </div>
</template>

<script>
import HeaderNav from '../components/headerNav'
import IndexThumbnail from '../components/index/indexThumbnail'
import IndexThumbnail2 from '../components/index/indexThumbnail2'
import IndexThumbnail3 from '../components/index/indexThumbnail3'
import IndexThumbnail4 from '../components/index/indexThumbnail4'
import IndexThumbnail5 from '../components/index/indexThumbnail5'
import { mapState } from "vuex"
export default {
  components: {
    HeaderNav,
    IndexThumbnail,
    IndexThumbnail2,
    IndexThumbnail3,
    IndexThumbnail4,
    IndexThumbnail5
  },
  computed: {
    ...mapState(["indexCarousel"])
  }
}
</script>

<style>
.g-indexcol .el-carousel__container {
  height: 360px;
}

.g-indexcol .el-carousel__item div {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.g-indexcol .el-carousel__item div img {
  width: 100%;
  height: 100%;
}

.g-indexcol .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.g-indexcol .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.m-indextitle h1 {
  font-size: 24px;
  color: #263746;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 0px;
  margin-top: 0px;
}


/* 巨幕 */

.XboxJU {
  background-image: url(../assets/imgs/shouye/jumu.jpg);
  background-size: cover;
  height: 140px;
}
</style>
