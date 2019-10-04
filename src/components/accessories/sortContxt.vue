<template>
    <div>
        <!--排序-->
        <div class="container g-sorting">
            <ul>
                <li>
                    <a href="#">综合</a>
                </li>
                <li>
                    <a href="#">评分↑</a>
                </li>
                <li>
                    <a href="#">销量↑</a>
                </li>
                <li>
                    <a href="#">价格↑</a>
                </li>
                <li>
                    <a href="#">上架时间↑</a>
                </li>
            </ul>
        </div>
        <!--主体-->
        <div class="container g-mainBox">
            <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3 m-left-Img">
                    <img src="../../assets/imgs/parts/link_15662635452734.jpg" />
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 m-other" v-for="item,index in sortList">
                    <router-link :to="'/detail/'+item.id">
                        <img :src="item.pic" />
                    </router-link>
                    <p>￥{{item.price}}</p>
                    <p>{{item.title}}</p>
                    <p>{{item.descp}}</p>
                    <p>
                        销量：
                        <span class="Sales-count">{{item.sale}}</span>&nbsp;|&nbsp;评论：
                        <span class="comment">{{item.comment}}</span>
                    </p>
                    <p>
                        <a href="#">
                            <span class="glyphicon glyphicon-star-empty"></span>
                            <span>收藏</span>
                        </a>
                        <a href="#">
                            <span class="glyphicon glyphicon-shopping-cart"></span>
                            <span>加入购物车</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["sortList"])
    }
}
</script>

<style>
.border-solid {
    border: 1px solid #dfdfdf;
}

.g-sorting {
    border: 1px solid #dfdfdf;
    background: #f5f5f5;
    padding-left: 0px;
    margin-bottom: 40px;
}

.g-sorting li {
    font-size: 17px;
    color: #333333;
    float: left;
    padding: 15px 20px;
}

.g-sorting li a {
    color: #333333;
    text-decoration: none;
}

.g-sorting li:hover {
    background: white;
}

.g-sorting li:hover a {
    color: #ee0a3b;
}

.trs {
    transform: translateY(-5px);
    transition: 0.3s linear;
    box-shadow: 0px 0px 5px #c8c7c7;
}

.g-mainBox .m-left-Img>img {
    width: 100%;
}

.g-mainBox .row {
    margin-bottom: 20px;
}

.g-mainBox .m-other img {
    width: 90%;
    margin-left: 5%;
}

.g-mainBox .m-other p {
    font-size: 17px;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 13px;
}

.g-mainBox .m-other p a {
    color: #333333;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border: 1px solid #dfdfdf;
    padding-bottom: 8px;
    padding-top: 8px;
}

.g-mainBox .m-other p a:first-child {
    width: 40%;
}

.g-mainBox .m-other p a:nth-child(2) {
    width: 57%;
}

.g-mainBox .m-other p a:hover {
    color: #ee0a3b;
    border: 1px solid #ee0a3b;
}

.g-mainBox .m-other p:nth-child(2),
.g-mainBox .m-other p:nth-child(4) {
    color: #ee0a3b;
}

.g-mainBox .m-other p:last-child {
    display: none;
}

.g-mainBox .m-other:hover {
    transform: translateY(-5px);
    transition: 0.3s linear;
    box-shadow: 0px 0px 5px #c8c7c7;
}

.g-mainBox .m-other:hover p:last-child {
    display: block;
}
</style>
