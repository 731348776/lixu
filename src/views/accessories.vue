<template>
  <div>
    <!-- 头部导航条 -->
    <header-nav></header-nav>
    <!--热卖推荐-->
    <hot-remd></hot-remd>
    <!-- 路径导航 -->
    <nav-path></nav-path>
    <!-- 排序内容 -->
    <sort-contxt></sort-contxt>
  </div>
</template>

<script>
import HeaderNav from '../components/headerNav'
import HotRemd from '../components/accessories/hotRemd'
import NavPath from '../components/accessories/navPath'
import SortContxt from '../components/accessories/sortContxt'
export default {
  components: {
    HeaderNav,
    HotRemd,
    NavPath,
    SortContxt
  },
}
</script>

<style>

</style>
