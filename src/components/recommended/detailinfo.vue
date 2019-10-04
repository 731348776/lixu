<template>
    <!-- 推荐商品商品详情 -->
    <div class="row m-goodsInfo">
        <!--左边商品展示区-->
        <!--<div class="col-md-5">-->
        <div class="col-md-5 g-left bg">
            <div class="bg_left">

                <div class="m-show">
                    <div class="show">
                        <img :src="onegoods.pic" alt="">
                        <div class="mask"></div>
                        <div class="vidieoBtn">
                            <span id="showBtn"></span>
                            <!--<span id="hide"></span>-->
                        </div>
                    </div>

                    <div class="smallshow">
                        <p class="prev prevnone"></p>
                        <div class="middle_box">
                            <ul class="middle">
                                <li><img :src="onegoods.pic" alt=""></li>
                                <li><img :src="onegoods.pic" alt=""></li>
                            </ul>
                        </div>
                        <p class="next "></p>
                    </div>
                </div>

                <video id="small-video" width="430px" height="430px" controls="controls">
                    <source src="http://cloud.video.taobao.com/play/u/420722466/p/1/e/6/t/1/50169596347.mp4" type="video/mp4">
                </video>

            </div>
            <div class="bg_right">
                <div class="bigshow">
                    <div class="bigitem">
                        <img :src="onegoods.pic" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!--</div>-->
        <div class="col-md-7 g-right-info">

            <div class="g-mn2 cls" id="product-information">
                <h1 class="f-title">{{onegoods.title}}</h1>
                <!--商品卖点-->
                <div class="sell-points cls">
                    <span style="color:#000000;">视觉导航智慧眼 规划扫拖更高效</span><br />
                    <span style="color:#E53333;">新注册会员享200元优惠券礼包</span><br />
                    <span style="color:#E53333;">*购机即享包邮+全国联保服务</span><br />
                </div>
                <!--商品促销-->

                <div class="f-info">
                    <div class="J-lazyload">
                        <div>
                            <span>销售价:</span>
                            <span>￥{{onegoods.price}}</span>
                            <!--<a class="openChatBox" href="javascript:;">咨询客服</a>-->
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                咨询客服
                            </button>
                        </div>
                        <p>
                            <span>促销信息:</span>
                            <span class="showErweima"></span>
                        </p>
                        <p class="erwerima">
                            <span></span>
                            <img src="../../assets/imgs/hotSall/2656.png" alt="" />
                        </p>
                        <p>
                            <span>服务：</span>
                            <span><img src="../../assets/imgs/hotSall/cuxiaofuwu01.jpg" />免期分期</span>
                            <span><img src="../../assets/imgs/hotSall/cuxiaofuwu02.jpg" />官方正品</span>
                            <span><img src="../../assets/imgs/hotSall/cuxiaofuwu03.jpg" />全国联保</span>
                            <span><img src="../../assets/imgs/hotSall/cuxiaofuwu04.jpg" />全场满99包邮</span>
                            <span><img src="../../assets/imgs/hotSall/cuxiaofuwu05.jpg" />7天无理由退货</span>
                        </p>
                        <p>
                            <span>购买数量：</span>
                            <span>
                                <button id="reduce">-</button>
                                <input type="text" value="1" id="inpNum" />
                                <button id="add">+</button>
                            </span>
                            <span>
                                销量:
                                <em>{{onegoods.sale}}</em>
                            </span>
                        </p>
                    </div>

                </div>

                <!--购买按钮-->
                <div class="buy">

                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal2" @click="buyHandle(1)">
                        <span class="glyphicon glyphicon-shopping-cart"></span>
                        <span>加入购物车</span>
                    </button>

                   
                    <input type="button" class="f-buyBtn" value="立即购买" @click="buyHandle(2)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from "vuex"
import { sortList } from "../../datas/goodsdata.js"
export default {
    data() {
        return {
            onegoods: {

            }
        }
    },
   
    // 组件创建时
    created() {
        let gid = this.$route.params.gid;
        this.onegoods = sortList.filter(item => item.id == gid)[0];
    },
    methods: {
        buyHandle(flag) {
            if (!this.$local.fetch("user").userName) {
                alert("请先登录！");
                this.$router.push("/login");
                return;
            }
            this.$store.dispatch("addAction", this.onegoods);
            if (flag == 1) {
                alert("添加到购物车")
            }
            // 再去判断是加入购物车还是立即购买
        }
    }

}
</script>

<style>
/*商品放大镜*/

.g-main1 .bg {
    width: 920px;
    height: 540px;
    margin: 0 auto;
    padding: 20px;
    overflow: hidden;
    min-width: 900px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    /* 	border: 1px solid red;*/
}

.g-main1 .bg_left {
    width: 430px;
    height: auto;
    float: left;
    position: relative;
}



/*放大部分*/

.g-main1 .bg_right {
    float: left;
    /* 	border: 1px solid red;*/
    position: absolute;
    top: 18px;
    left: 450px;
}



/*视频*/

.g-main1 #small-video {
    position: absolute;
    top: 0px;
    left: 0px;
    background: black;
    display: none;
}

.g-main1 .m-show {
    position: absolute;
    top: 0px;
    left: 0px;
}

.g-main1 .show {

    width: 430px;
    height: 430px;
    margin-bottom: 10px;
    position: relative;
    cursor: move
}

.g-main1 .show img {
    width: 430px;
    height: 430px;
    /* 	border: 1px solid red;*/
}

.g-main1 .show .vidieoBtn {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 430px;
    height: 430px;
    /* 	border: 1px solid blue;*/
}

.g-main1 .show .vidieoBtn span:first-child {
    display: block;
    width: 60px;
    height: 60px;
    background-image: url(../../assets/imgs/hotSall/video-icon.png);
    background-repeat: no-repeat;
    margin-top: 370px;
    float: left;
}

.g-main1 .mask {
    width: 215px;
    height: 215px;
    background: #000;
    filter: Alpha(opacity=50);
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    display: none;
    margin-bottom: 20px;
    /*border: 1px solid red;*/
}

.bg_right {
    position: relative;
}

.g-main1 .bigshow {
    width: 430px;
    height: 430px;
    overflow: hidden;
    display: none;
    border: 1px solid #E8E8E8;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
}

.g-main1 .bigshow img {
    width: 860px;
    height: 860px;
    margin-right: 10px;
}

.g-main1 .smallshow {
    width: 100%;
    height: 70px;
    position: relative
}

.g-main1 .smallshow img {
    width: 100%;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    transition: all 0.5s
}

.g-main1 .smallshow>.middle_box {
    margin-left: 30px;
    margin-right: 30px;
    width: 370px;
    overflow: hidden;
    height: 70px;
}

.g-main1 .smallshow .middle {
    overflow: hidden;
    transition: all 0.5s;
    height: 70px;
}

.g-main1 .smallshow .middle>li {
    width: 64px;
    height: 64px;
    float: left;
    cursor: pointer;
    padding: 0 5px;
}

.g-main1 .smallshow>p {
    position: absolute;
    top: 50%;
    width: 22px;
    height: 32px;
    margin-top: -16px;
}



/* .g-main1 .smallshow>.prev {
    left: 0;
    background: url(../../assets/img/hover-prev.png) no-repeat;
    transition: all 0.5s
}

.g-main1 .smallshow>.next {
    right: 0;
    background: url(img/hover-next.png) no-repeat;
    transition: all 0.5s
}

.g-main1 .smallshow>.prev.prevnone {
    left: 0;
    background: url(../../assets/img/prev.png) no-repeat;
    cursor: not-allowed
}

.g-main1 .smallshow>.next.nextnone {
    right: 0;
    background: url(../../assets/img/next.png) no-repeat;
    cursor: not-allowed
} */

.g-main1 .m-goodsInfo {
    position: relative;
}

.g-main1 .m-goodsInfo .g-right-info {
    position: absolute;
    top: 0px;
    left: 450px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 h1 {
    font-size: 24px;
    margin-bottom: 15px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .sell-points span {
    font-size: 16px;
    margin-bottom: 15px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .sell-points {
    margin-bottom: 40px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(2) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:first-child {
    display: inline-block;
    font-size: 16px;
    color: #636363;
    width: 100px;
    height: 20px;
    /*border: 1px solid red;*/
    text-align: right;
    margin-right: 23px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child span:nth-child(2) {
    font-size: 24px;
    color: #ee0a3b;
    font-weight: bold;
    /*margin-left: 30px;*/
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child button {
    font-size: 16px;
    background: #233846;
    padding: 5px 20px;
    color: #ffffff;
    float: right;
    border-radius: 0px;
}




/*二维码*/

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(2) span:last-child {
    display: inline-block;
    background: url(../../assets/imgs/hotSall/goods_mp_qrcode.png);
    background-position: 0 0;
    width: 190px;
    height: 30px;
    margin-top: 10px;
    margin-left: 0px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload {
    position: relative;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3) {
    width: 250px;
    height: 270px;
    position: absolute;
    top: 42px;
    left: 90px;
    background: white;
    box-shadow: 0px 0px 10px grey;
    z-index: 99;
    text-align: center;
    display: none;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3) span:first-child {
    display: inline-block;
    background: url(../../assets/imgs/hotSall/goods_mp_qrcode2.png);
    background-position: 0 0;
    width: 190px;
    height: 30px;
    margin-top: 10px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3)>img {
    display: block;
    width: 200px;
    height: 200px;
    margin-left: 20px;
}





/*服务*/

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span {
    margin-left: 10px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:nth-child(2) {
    margin-left: 0px;
    font-size: 16px;
}






/*购买数量*/

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) {
    margin-top: 30px;
    margin-bottom: 40px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) button,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) input {
    width: 40px;
    height: 40px;
    background: white;
    outline: none;
    border: none;
    margin: 0px;
    text-shadow: none;
    font-size: 18px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) input {
    border: 1px solid #e0e0e0;
    margin-left: 0px;
    text-align: center;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) button:last-child {
    margin-right: 60px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:last-child {
    font-size: 16px;
    margin-left: 60px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:last-child em {
    font-style: normal;
    margin-left: 25px;
}





/*购买按钮*/


/*加入购物车*/

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .f-buyBtn,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>button {
    display: inline-block;
    width: 200px;
    height: 55px;
    border: 1px solid #ee0a3b;
    text-align: center;
    color: #ee0a3b;
    font-size: 16px;
    line-height: 55px;
    text-decoration: none;
    background: transparent;
    border-radius: 0px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary:hover {
    color: #ee0a3b;
    background-color: transparent;
    border-color: #ee0a3b;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary.focus,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary:focus {
    color: #ee0a3b;
    background-color: transparent;
    border-color: transparent;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>button {
    padding-top: 0px;
}






/*加入购物车  模态框*/

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .m-add-car {
    padding-top: 150px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .close {
    float: right;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-dialog {
    width: 500px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content {
    width: 500px;
    text-align: center;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content h4 {
    float: left;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body {
    padding-bottom: 45px;
    padding-top: 45px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body p {
    font-size: 18px;
    margin-bottom: 30px;
}

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body p>span {
    color: #ee0a3b;
    font-weight: 600;
}





/*立即购买*/

.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .f-buyBtn {
    background: #ee0a3b;
    color: white;
    margin-left: 20px;
}
</style>
