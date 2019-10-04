<template>
  <div>
    <!-- 头部导航条 -->
    <header-nav></header-nav>
    <!--bnaner 巨幕-->
    <div class="container-fluid g-jumu">
      <img src="../assets/imgs/old_new/20190820092340_80143.jpg" />
    </div>
    <!-- 轮播图 -->
    <div class="container g-oldcol">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item,index in oldCarousel" :key="index">
          <div><img :src="item.pic" alt="" /></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--巨幕2-->
    <div class="jumbotron g-juImg2">

    </div>
    <!-- 巨幕3 -->
    <old-jumu3></old-jumu3>
    <!--bnaner 巨幕-->
    <div class="container-fluid g-jumu4">
      <img src="../assets/imgs/old_new/20190716100805_60416.jpg" />
    </div>

    <!--bnaner 巨幕-->
    <div class="container-fluid g-jumu5">
      <img src="../assets/imgs/old_new/yjhx_pc_06.jpg" />
    </div>
    <!-- 巨幕6 -->
    <old-jumu6></old-jumu6>
    <!--常见问题-->
    <old-ques></old-ques>
  </div>
</template>

<script>
import { mapState } from "vuex"
import HeaderNav from '../components/headerNav'
import OldJumu3 from '../components/oldChangeNew/oldJumu3'
import OldJumu6 from '../components/oldChangeNew/oldJumu6'
import OldQues from '../components/oldChangeNew/oldQues'
export default {
  components: {
    HeaderNav,
    OldJumu3,
    OldJumu6,
    OldQues
  },
  computed: {
    ...mapState(["oldCarousel"])
  }
}
</script>

<style>
.g-jumu {
  height: 460px;
  padding: 0px;
  margin-bottom: 60px;
}

.g-jumu img {
  width: 100%;
  height: 480px;
}

.g-oldcol .el-carousel__container {
  height: 475px;
}

.g-oldcol .el-carousel__item div {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.g-oldcol .el-carousel__item div img {
  width: 100%;
  height: 100%;
}

.g-oldcol .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.g-oldcol .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.g-juImg2 {
  width: 100%;
  margin-top: 60px;
  background-image: url(../assets/imgs/old_new/20190715111435_82762.jpg);
  background-size: cover;
  background-position: center;
  height: 800px;
  background-repeat: no-repeat;
  margin-bottom: 0px;
}

.g-jumu4 img {
  width: 100%;
  height: 792px;
}

.g-jumu5 img {
  width: 100%;
  height: 600px;
}
</style>
