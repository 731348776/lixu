<template>
    <!--缩略图-->
    <div class="container g-suolueTu1">

        <div class="row">
            <div class="col-xs-6 col-md-3 m-left">
                <ul>
                    <li v-for="item,index in indexThumbnail1">
                        <img :src="item.pic" alt="" />
                        <p>积分商城</p>
                    </li>
                </ul>
            </div>
            <div class="col-xs-6 col-md-3 m-right">
                <a href="#"><img src="../../assets/imgs/shouye/b-1.jpg" alt="" /></a>
            </div>
            <div class="col-xs-6 col-md-3 m-right">
                <a href="#"><img src="../../assets/imgs/shouye/b-2.jpg" alt="" /></a>
            </div>
            <div class="col-xs-6 col-md-3 m-right">
                <a href="#"><img src="../../assets/imgs/shouye/b-3.jpg" alt="" /></a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["indexThumbnail1"])
    }
}
</script>

<style>
.g-suolueTu1 {
    margin-top: 40px;
}

.g-suolueTu1 .m-left {
    background: white;
    background-image: url(../../assets/imgs/shouye/fastnavL-bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 220px;
}

.g-suolueTu1 .m-left ul {
    overflow: hidden;
}

.g-suolueTu1 .m-left ul li {
    float: left;
    padding: 20px 19px;
    text-align: center;
}

.g-suolueTu1 .m-left ul li img {
    margin-bottom: 13px;
}

.g-suolueTu1 .m-left ul li p {
    font-size: 12px;
    color: #757575;
}

.g-suolueTu1 .m-left ul li p:hover {
    color: #f00a3b;
}

.g-suolueTu1 .m-left:hover {
    box-shadow: 0px 0px 10px #cac7c7;
}

.g-suolueTu1 .m-right {
    /*	border: 1px solid red;*/
    height: 220px;
    line-height: 220px;
    padding-left: 10px;
}

.g-suolueTu1 .m-right a {
    display: block;
    width: 100%;
    background: white;
    /*	padding:40px 0px;*/
}

.g-suolueTu1 .m-right img {
    width: 100%;
}

.g-suolueTu1 .m-right img:hover {
    box-shadow: 0px 0px 10px #cac7c7;
}
</style>
