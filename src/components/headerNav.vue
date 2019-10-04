<template>
   <!-- 头部导航条 -->
        <div class="g-header-nav">
            <ul>
                <li>
                    <router-link to="/">全部商品</router-link>
                    <my-pop v-show="this.$route.meta.showHeadernav"></my-pop>
                </li>
                <li>
                    <router-link to="/">商城首页</router-link>
                </li>
                <li>
                    <router-link to="/oldChangeNew">以旧换新</router-link>
                </li>
                <li>
                    <router-link to="/recommended">热卖推荐</router-link>
                </li>
                <li>
                    <router-link to="/">AIVI新品</router-link>
                </li>
                <li>
                    <router-link to="/accessories">全网配件</router-link>
                </li>
            </ul>
        </div>
</template>

<script>
import MyPop from './pop'
export default {
components:{
    MyPop
}
}
</script>

<style>


.g-header-nav {
    height: 50px;
    background: #263746;
    width: 100%;
    padding-left: 10%;
}

.g-header-nav>ul {
    position: relative;
}

.g-header-nav>ul>li {
    position: absolute;
    top: 0px;
    left: 0px;
}

.g-header-nav>ul>li:nth-child(1)>a {
    display: block;
    background: #ee0a3b;
    height: 50px;
    width: 290px;
    padding: 10px 20px;
}

.g-header-nav>ul>li>a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

.g-header-nav>ul>li:nth-child(2) {
    left: 300px;
    padding: 10px 30px;
}

.g-header-nav>ul>li:nth-child(2)>a:hover,
.g-header-nav>ul>li:nth-child(4)>a:hover,
.g-header-nav>ul>li:nth-child(5)>a:hover,
.g-header-nav>ul>li:nth-child(6)>a:hover {
    color: #ee0a3b;
}

.g-header-nav>ul>li:nth-child(3)>a {
    color: #d9cda7;
}

.g-header-nav>ul>li:nth-child(3) {
    left: 440px;
    padding: 10px 30px;
}

.g-header-nav>ul>li:nth-child(4) {
    left: 580px;
    padding: 10px 30px;
}

.g-header-nav>ul>li:nth-child(5) {
    left: 720px;
    padding: 10px 30px;
}

.g-header-nav>ul>li:nth-child(6) {
    left: 860px;
    padding: 10px 30px;
}
</style>
