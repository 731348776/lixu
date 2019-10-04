<template>
  <div>
    <!-- 头部导航条 -->
    <header-nav></header-nav>
    <!-- 内容 -->
    <div class="container g-main1">
      <!-- 网页路径 -->
      <div class="m-rood-nav">
        <p>您当前的位置：</p>
        <ol class="breadcrumb">
          <li>
            <a href="index.html">首页</a>
          </li>
          <li>
            <a href="hotSall.html">地宝(扫地机器人)</a>
          </li>
          <li class="active">视觉导航DJ35</li>
        </ol>
      </div>
      <!-- 商品展示区 -->
      <re-goodsinfo></re-goodsinfo>
      <!-- 分享到 -->
      <re-share></re-share>
      <!-- 关联商品推荐 -->
      <re-about></re-about>
    </div>
    <!-- 标签页 -->
    <div class="container g-main3">
      <div class="row">
        <div class="col-md-9 col-xs-9 g-left-side">
          <div>
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation">
                <router-link to="/recommended" active-class="activeClass" exact>商品详情</router-link>
              </li>
              <li role="presentation">
                <router-link to="/recommended/two" active-class="activeClass">详细参数</router-link>
              </li>
              <li role="presentation">
                <router-link to="/recommended/three" active-class="activeClass">商品评论</router-link>
              </li>
              <li role="presentation">
                <router-link to="/recommended/four" active-class="activeClass">商品咨询</router-link>
              </li>
            </ul>
            <!-- 子路由切换 -->
            <div class="tab-content">
              <router-view/>
            </div>
          </div>
        </div>
        <re-right></re-right>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../components/headerNav'
import ReGoodsinfo from '../components/recommended/reGoodsinfo'
import ReShare from '../components/recommended/reshare'
import ReAbout from '../components/recommended/reabout'
import ReRight from '../components/recommended/reRight'
export default {
  components: {
    HeaderNav,
    ReGoodsinfo,
    ReShare,
    ReAbout,
    ReRight
  },
}
</script>

<style>
/*路径导航*/
.g-main1 .m-rood-nav {
  overflow: hidden;
  font-size: 16px;
  padding-top: 20px;
}

.g-main1 .m-rood-nav p {
  float: left;
  margin-top: 8px;
}

.g-main1 .m-rood-nav ol {
  float: left;
}

.g-main1 .m-rood-nav ol li a {
  color: #333333;
}

.g-main1 .breadcrumb {
  background: transparent;
}

.nav-tabs>li .activeClass {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
</style>
