<template>
    <!--热销商品-->
    <div class="container g-suolueTu3">
        <div class="row">
            <div class="col-xs-6 col-md-3 m-left">
                <img src="../../assets/imgs/shouye/index_img_15646239672151.jpg" />
            </div>
            <div class="col-xs-6 col-md-9 m-right">
                <div class="row">
                    <div class="col-xs-6 col-md-3 f-info" v-for="item,index in indexThumbnail3">
                        <p>
                            <a href="#"><img :src="item.pic" alt="" /></a>
                        </p>
                        <p>
                            <a href="#">{{item.title}}</a>
                        </p>
                        <p>{{item.descp}}</p>
                        <p>
                            <i>￥</i>{{item.price}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["indexThumbnail3"])
    }
}
</script>

<style>
.g-suolueTu3 .m-left img {
    width: 100%;
    height: 615px;
}

.g-suolueTu3 .m-right .f-info {
    width: 23%;
    height: 300px;
    background: white;
    margin-right: 17px;
    margin-bottom: 15px;
}

.g-suolueTu3 .m-right .f-info:last-child {
    margin-right: 0px;
}

.g-suolueTu3 .m-right .f-info p {
    text-align: center;
}

.g-suolueTu3 .m-right .f-info p img {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
}

.g-suolueTu3 .m-right .f-info p:nth-child(2) a {
    margin-bottom: 12px;
    font-size: 15px;
    color: #263746;
}

.g-suolueTu3 .m-right .f-info p:nth-child(3) {
    font-size: 15px;
    color: #828282;
    margin-bottom: 25px;
}

.g-suolueTu3 .m-right .f-info p:nth-child(4) {
    font-size: 15px;
    color: #ee0a3b;
}

.g-suolueTu3 .m-right .f-info p:nth-child(4) i {
    font-style: normal;
}

.g-suolueTu3 .m-right .f-info:hover {
    box-shadow: 0px 0px 10px #cac7c7;
    transform: translateY(-5px);
    transition: 0.3s linear;
}
</style>
