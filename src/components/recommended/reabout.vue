<template>
    <!--关联商品推荐-->
    <div class="g-about">
        <h3>关联商品推荐</h3>
        <div class="row">
            <div class="col-md-9 col-xs-9 m-left">
                <div class="row">
                    <div class="col-md-2 col-xs-2">
                        <img src="../../assets/imgs/hotSall/about1.png" alt="" />
                        <p>科沃斯扫地机器人</p>
                    </div>
                    <div class="col-md-2 col-xs-2">+</div>
                    <div class="col-md-2 col-xs-2" v-for="item,index in reAboutList">
                        <img :src="item.pic" alt="" />
                        <p>
                            <span>{{item.title1}}</span>
                            <span>{{item.title2}}</span>
                            <span>{{item.title3}}</span>
                        </p>
                        <p>
                            <input type="checkbox" class="checkOne" />
                            <span>￥{{item.price}}</span>
                        </p>
                    </div>

                </div>

            </div>
            <div class="col-md-3 col-xs-3 m-right">
                <div>=</div>
                <div>
                    <p>已选择
                        <span>1</span>个产品</p>
                    <p>总价：
                        <span>￥1699</span>
                    </p>
                    <a href="javascript:;">加入购物车</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["reAboutList"])
    }
}
</script>

<style>
/*关联商品推荐*/

.g-main1 .g-about {
    border: 1px solid transparent;
}

.g-main1 .g-about h3 {
    font-size: 18px;
    color: #333333;
    margin-top: 50px;
    padding-bottom: 12px;
    border-bottom: 1px solid #333333;
    margin-bottom: 50px;
}

.g-main1 .g-about .m-left .col-md-2.col-xs-2 {
    text-align: center;
}

.g-main1 .g-about .m-left .col-md-2.col-xs-2:first-child img {
    width: 77px;
    height: 77px;
    margin-bottom: 35px;
}

.g-main1 .g-about .m-left .col-md-2.col-xs-2:first-child p {
    font-size: 16px;
    color: #333333;
}

.g-main1 .g-about .m-left .col-md-2.col-xs-2:nth-child(2) {
    font-size: 28px;
    color: #333333;
    font-weight: bold;
    padding-top: 30px;
}

.g-main1 .g-about .m-left .col-md-2.col-xs-2 p:last-child span {
    color: #ee0a3b;
    font-weight: bold;
}

.g-main1 .g-about .m-right div {
    float: left;
}

.g-main1 .g-about .m-right div:first-child {
    font-size: 28px;
    color: #cccccc;
    font-weight: bold;
    padding-top: 30px;
    margin-right: 50px;
    text-align: right;
}

.g-main1 .g-about .m-right div:last-child p {
    font-size: 16px;
}

.g-main1 .g-about .m-right div:last-child p:nth-child(1) {
    margin-bottom: 15px;
}

.g-main1 .g-about .m-right div:last-child p:nth-child(2) span {
    color: #ee0a3b;
    font-weight: bold;
}

.g-main1 .g-about .m-right div:last-child a {
    display: block;
    height: 50px;
    width: 140px;
    background: #ee0a3b;
    color: white;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
}
</style>
