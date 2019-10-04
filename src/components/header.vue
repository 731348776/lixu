<template>
    <div>
        <!-- 顶部广告 -->
        <div class="container-fluid g-guangao" v-show="this.$route.meta.showBanner">
            <img src="../assets/imgs/shouye/link_15629138544530.gif" id="guanggao" alt="" />
        </div>
        <!--顶部导航条-->
        <nav class="navbar navbar-default container-fluid g-nav">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="https://www.ecovacs.cn/index.html">科沃斯官网</a>
                    <a class="navbar-brand" href="#">收藏我们</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link to="/">新用户注册，领取200元优惠券礼包></router-link>
                        </li>
                        <li>
                            <router-link to="/">签到领积分</router-link>
                        </li>
                        <li>
                            <router-link to="/login">
                                <span v-show="!isnameShow">登录</span>
                                <span v-show="isnameShow">{{loginName}}|
                                    <span @click="loginout">退出</span>
                                </span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/register">注册</router-link>
                        </li>
                        <li>
                            <router-link to="/">我的订单</router-link>
                        </li>
                        <li>
                            <router-link to="/shopCar">
                                <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;购物车
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--输入框-->
        <div class="container-fluid g-inp">
            <div class="container g-input">
                <ul>
                    <li><img src="../assets/imgs/shouye/logo_dark.png" /></li>
                    <li>
                        <input type="text" />
                        <span class="glyphicon glyphicon-search"></span>
                        <h5>以旧换新第三季&nbsp;旧机最高抵1000元</h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from "vuex"
export default {
    data() {
        return {
            isnameShow: false,
            loginName: ""
        }
    },
    // computed: {
    //     ...mapState(["isnameShow", "loginName"])
    // },
    created() {
        if (this.$local.fetch("user").login) {
            this.isnameShow = true;
            this.loginName = this.$local.fetch("user").userName;
        } else {
            this.isnameShow = false;
        }
    },
    methods: {
        loginout() {
            this.$local.delete("user");
            this.isnameShow = false;
            this.$router.push("/index");
        }
    },
    watch: {
        $route() {
            this.isnameShow = this.$local.fetch("user").login;
            this.loginName = this.$local.fetch("user").userName;
        }
    },
}
</script>

<style>
/* 顶部广告条 */

.g-guangao {
    padding-right: 0px;
    padding-left: 0px;
}

.g-guangao img {
    width: 100%;
    display: block;
}


/*导航条*/

.g-nav {
    padding-right: 0px;
    padding-left: 0px;
    background-color: #f2f2f2;
    padding-top: 10px;
    margin-bottom: 0px;
    border-radius: 0px;
}

.g-nav div:first-child {
    height: 100%;
}

.g-nav li {
    font-size: 12px;
}

.navbar-brand {
    height: 38px;
}

.g-nav .navbar-header a {
    display: inline-block;
    font-size: 12px;
    color: #263746;
    height: 21px;
    padding: 0px 20px;
    line-height: 21px;
    border-right: 2px solid #263746;
    margin-top: 8px;
    margin-right: 15px;
}

.g-nav .navbar-header a:last-child {
    border-right: none;
}

.g-nav .navbar-default {
    background-color: #f2f2f2;
    border-color: transparent;
    border-radius: 0px;
    height: 38px;
    margin-bottom: 0px;
    min-height: 38px;
}

.g-nav .navbar-nav>li>a {
    padding-top: 0px;
    padding-bottom: 0px;
    line-height: 21px;
}

.g-nav ul>li:first-child a {
    color: #ee0a3b;
    margin-right: 20px;
}

.g-nav ul>li:nth-child(2) a {
    padding: 2px 10px;
    background: #ee0a3b;
    color: white;
    margin-top: 2px;
}

.g-nav ul>li:nth-child(2) {
    border-right: 2px solid #263746;
    padding-right: 20px;
}

.g-nav ul>li:nth-child(3) {
    border-right: 2px solid #263746;
    padding: 0px 20px;
}

.g-nav ul>li a {
    margin-top: 6px;
    padding: 10px 10px;
}

.g-nav ul>li:nth-child(4) {
    border-right: 2px solid #263746;
    padding: 0px 20px;
}

.g-nav ul>li:nth-child(5) {
    padding-left: 20px;
    padding-right: 20px;
}

.g-nav ul>li:last-child a {
    color: #ee0a3b;
}





/*输入框*/

.g-inp {
    background: white;
    padding-top: 20px;
}

.g-inp .g-input ul {
    height: 120px;
    position: relative;
    line-height: 120px;
}

.g-inp .g-input ul>li:first-child {
    position: absolute;
    top: 0px;
    left: 0px;
}

.g-inp .g-input ul>li:last-child {
    width: 36%;
    position: absolute;
    top: 0px;
    right: 0px;
    overflow: hidden;
    margin-top: 25px;
}

.g-inp .g-input ul>li:last-child input {
    height: 50px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    width: 85%;
    float: left;
    margin-bottom: 10px;
    padding: 20px;
}

.g-inp .g-input ul>li:last-child span {
    width: 50px;
    height: 50px;
    border: 1px solid #cccccc;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    float: left;
    margin-bottom: 10px;
}

.g-inp .g-input ul>li:last-child h5 {
    font-size: 12px;
    color: #ee0a3b;
}

.g-inp .g-input ul>li:last-child input:focus {
    outline: transparent;
}
</style>
