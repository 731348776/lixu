<template>
    <div class="g-scar">
        <div class="cartMain_hd">
            <ul class="order_lists cartTop row">
                <li class=" col-xs-1 col-md-1 list_chk">
                    <!--所有商品全选-->
                    <input type="checkbox" id="all" class="whole_check">
                    <label for="all" class="glyphicon glyphicon-ok"></label> 全选
                </li>
                <li class=" col-xs-5 col-md-5 list_con">商品信息</li>
                <li class="list_price col-xs-2 col-md-2">单价</li>
                <li class="list_amount col-xs-2 col-md-2">数量</li>
                <li class="list_sum col-xs-1 col-md-1">金额</li>
                <li class="list_op col-xs-1 col-md-1">操作</li>
            </ul>
        </div>
        <!--购物车主体-->
        <div class="cartBox">
            <div class="order_content">
                <ul class="order_lists row" v-for="item,index in carData">
                    <li class="list_chk col-xs-1 col-md-1">
                        <input type="checkbox" id="checkbox_2" class="son_check">
                        <label for="checkbox_2" class="glyphicon glyphicon-ok"></label>
                    </li>
                    <li class="list_con col-xs-5 col-md-5">
                        <div class="list_img">
                            <a href="hotSall.html"><img :src="item.pic" alt=""></a>
                        </div>
                        <div class="list_text">
                            <a href="hotSall.html">{{item.title}}</a>
                        </div>
                    </li>
                    <li class="list_price col-xs-2 col-md-2">
                        <p class="price">￥{{item.price}}</p>
                    </li>
                    <li class="list_amount col-xs-2 col-md-2">
                        <div class="amount_box">
                            <input type="button" value="-" id="u-csub" class="reduce reSty" @click="subNum(index)" />
                            <input type="text" class="sum" v-model="item.count">
                            <input type="button" value="+" id="u-cadd" class="plus" @click="addNum(index)" />
                        </div>
                    </li>
                    <li class="list_sum col-xs-1 col-md-1">
                        <p class="sum_price">￥{{item.price*item.count}}</p>
                    </li>
                    <li class="list_op col-xs-1 col-md-1">
                        <p class="del">
                            <a href="javascript:;" class="delBtn glyphicon glyphicon-trash"></a>
                        </p>

                    </li>
                </ul>
            </div>
        </div>
        <!--底部-->
        <div class="bar-wrapper">
            <div class="bar-left">
                <p>
                    <a href="#">继续购物</a>
                    <a href="javascript:;" id="clearCarts">清空购物车</a>
                </p>
            </div>
            <div class="bar-right">
                <div class="piece">已选商品
                    <strong class="piece_num">{{totalCount}}</strong>件</div>
                <div class="totalMoney">共计:
                    <strong class="total_text">{{totalPrice}}</strong>
                </div>
                <div class="calBtn">
                    <a href="javascript:;">结算</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
export default {
    computed: {
        ...mapState(["carData"]),
        ...mapGetters(["totalCount", "totalPrice"])
    },
    methods: {
        subNum(idx) {
            this.$store.dispatch("changeAction", { flag: 1, index: idx })
        },
        addNum(idx) {
            this.$store.dispatch("changeAction", { flag: 2, index: idx })
        }
    }
}
</script>

<style>
.g-scar .col-xs-1.col-md-1 {
    padding-right: 0px;
}

.g-scar .col-xs-5.col-md-5 {
    padding-right: 0px;
    text-align: center;
}

.g-scar .col-xs-2.col-md-2 {
    padding-right: 0px;
    text-align: center;
}











/*购物车头部*/

.g-scar .cartMain_hd {
    width: 100%;
    color: #666666;
    height: 110px;
    line-height: 110px;
    background: white;
}

.g-scar .cartMain_hd .cartTop {
    font-size: 17px;
    color: #666666;
}











/* //购物车主体 */

.g-scar .cartBox {
    width: 100%;
    margin-bottom: 15px;
}

.g-scar .cartBox .order_content {
    border: 1px solid transparent;
}










/* .g-scar .cartBox .order_content a {
    display: block;
} */

.g-scar .order_content {
    background: white;
}











/*商品列表*/

.g-scar .order_lists {
    width: 100%;
    height: 130px;
    margin-right: 0px;
    margin-left: 0px;
}

.g-scar .order_lists li {
    float: left;
    height: 130px;
    line-height: 130px;
}

.g-scar .order_lists .list_chk {
    position: relative;
}

.g-scar .order_lists .list_chk input[type="checkbox"] {
    position: absolute;
    z-index: 0;
    left: -20px;
    top: -20px;
}

.g-scar .order_lists .list_chk label {
    margin: 0px 0 0 0px;
}

.g-scar .order_lists .list_con .list_img {
    width: 15%;
    float: left;
}

.g-scar .order_lists .list_con .list_img img {
    width: 100%;
    vertical-align: middle;
}

.g-scar .order_lists .list_con .list_text {
    margin: 0px 0 0 10px;
    line-height: 130px;
    width: 80%;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.g-scar .order_lists .list_con .list_text a {
    color: #747774;
    font-size: 16px;
}

.g-scar .order_lists .list_con .list_text a:hover {
    color: #ee0a3b;
}

.g-scar .order_lists .list_price {
    height: 130px;
    line-height: 130px;
}

.g-scar .order_lists .list_price .price {
    font-family: Verdana, Tahoma, arial;
    color: #666666;
    font-weight: bold;
}

.g-scar .order_lists .list_amount {
    padding-left: 0px;
}

.g-scar .order_lists .list_amount .amount_box {
    width: 100%;
}

.g-scar .order_lists .list_amount .amount_box input:nth-of-type(1),
.g-scar .order_lists .list_amount .amount_box input:nth-of-type(3) {
    font-size: 20px;
    width: 10%;
     text-align: center; 
     border: none; 
     background: transparent; 
    color: #757575;
}

.g-scar .order_lists .list_amount .amount_box input:nth-of-type(2) {
    width: 25%;
    color: #343434;
    font-size: 18px;
    text-align: center;
    height: 50px;
    border: none;
}
/* 
html input[type=button] {
    -webkit-appearance: none
} */

/* .g-scar .order_lists .list_amount .amount_box a:hover {
    text-decoration: none;
    color: #ee0a3b;
    z-index: 3;
} */

.g-scar .order_lists .list_sum .sum_price {
    line-height: 130px;
    font-family: Verdana, Tahoma, arial;
    color: #ee0a3b;
    font-weight: bold;
}

.g-scar .order_lists .list_op .del {
    line-height: 130px;
    font-size: 20px;
}

.g-scar .order_lists .list_op .del a {
    color: #666666;
}

.g-scar .order_lists .list_op .del a:hover {
    color: #ee0a3b;
    text-decoration: none;
}











/*底部总计算价*/

.g-scar .bar-wrapper {
    margin-top: 40px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    height: 100px;
    z-index: 99;
    background: white;
    margin-bottom: 40px;
}

.g-scar .bar-wrapper .bar-left {
    line-height: 100px;
    float: left;
    margin-top: 0px;
}

.g-scar .bar-wrapper .bar-left a {
    color: #666666;
    font-size: 16px;
    text-decoration: none;
    padding-left: 30px;
    padding-right: 30px;
}

.g-scar .bar-wrapper .bar-left a:first-child {
    border-right: 1px solid #666666;
}

.g-scar .bar-wrapper .bar-left a:hover {
    color: #ee0a3b;
}

.g-scar .bar-wrapper .bar-right {
    font-size: 16px;
    height: 100px;
    float: right;
    color: #3c3c3c;
    padding-top: 25px;
    padding-right: 20px;
}

.g-scar .bar-wrapper .bar-right strong {
    color: #ee0a3b;
}

.g-scar .bar-wrapper .bar-right .piece {
    float: left;
    min-width: 110px;
    margin-right: 20px;
    height: 50px;
    line-height: 50px;
}

.g-scar .bar-wrapper .bar-right .piece .piece_num {
    display: inline-block;
    padding: 0 10px;
    font-weight: 700;
    font-size: 18px;
    font-family: tohoma, arial;
}

.g-scar .bar-wrapper .bar-right .totalMoney {
    float: left;
    min-width: 100px;
    height: 50px;
    line-height: 50px;
}

.g-scar .bar-wrapper .bar-right .totalMoney .total_text {
    float: right;
    font-weight: 400;
    font-size: 20px;
    font-family: Arial;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 15px;
}

.g-scar .bar-wrapper .bar-right .calBtn {
    float: left;
}

.g-scar .bar-wrapper .bar-right .calBtn a {
    display: block;
    width: 220px;
    height: 60px;
    color: white;
    background: #969293;
    cursor: not-allowed;
    font-size: 22px;
    letter-spacing: 5px;
    text-decoration: none;
    line-height: 60px;
    text-align: center;
}

.g-scar .bar-wrapper .bar-right .calBtn a.btn_sty {
    cursor: pointer;
    background: #ee0a3b;
}
</style>
