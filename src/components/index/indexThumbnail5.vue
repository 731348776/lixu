<template>
    <!--猜你喜欢-->
    <div class="container g-suolueTu2 g-suolueTu5">
        <div class="row">
            <div class="col-xs-6 col-md-3 f-info2">
                <a href="#"><img src="../../assets/imgs/shouye/f1.png" alt="" /></a>
                <p>
                    <a href="#">地宝T5 Plus</a>
                </p>
                <p>以旧换新 高配新品</p>
                <p>
                    <i>￥</i>2999
                </p>
            </div>
            <thumbnail-right></thumbnail-right>
        </div>
    </div>
</template>

<script>
import ThumbnailRight from './thumbnailRight'
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["indexThumbnail2"])
    },
    components: {
        ThumbnailRight
    }
}
</script>

<style>
.g-suolueTu5 .f-info2 {
    background: white;
    height: 340px;
    text-align: center;
    padding-right: 0px;
    margin-right: 20px;
    width: 23%;
}

.g-suolueTu5 .f-info2 img {
    width: 70%;
    padding-top: 30px;
    padding-bottom: 30px;
}

.g-suolueTu5 .f-info2 p:nth-child(2) a {
    margin-bottom: 12px;
    font-size: 15px;
    color: #263746;
}

.g-suolueTu5 .f-info2 p:nth-child(3) {
    font-size: 15px;
    color: #828282;
    margin-bottom: 25px;
}

.g-suolueTu5 .f-info2 p:nth-child(4) {
    font-size: 15px;
    color: #ee0a3b;
}

.g-suolueTu5 .f-info2 p:nth-child(4) i {
    font-style: normal;
}

.g-suolueTu5 .f-info2:hover {
    box-shadow: 0px 0px 10px #cac7c7;
    transform: translateY(-5px);
    transition: 0.3s linear;
}

.g-suolueTu5 {
    margin-bottom: 70px;
}
</style>
