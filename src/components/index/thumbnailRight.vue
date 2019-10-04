<template>
    <div class="col-xs-6 col-md-9 m-right">
        <div class="row">
            <div class="col-xs-6 col-md-3 f-info" v-for="item,index in indexThumbnail2">
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
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["indexThumbnail2"])
    }
}
</script>

<style>
.g-suolueTu2 .m-right .f-info {
    width: 23%;
    height: 340px;
    background: white;
    margin-right: 17px;
}

.g-suolueTu2 .m-right .f-info:last-child {
    margin-right: 0px;
}

.g-suolueTu2 .m-right .f-info p {
    text-align: center;
}

.g-suolueTu2 .m-right .f-info p img {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
}

.g-suolueTu2 .m-right .f-info p:nth-child(2) a {
    margin-bottom: 12px;
    font-size: 15px;
    color: #263746;
}

.g-suolueTu2 .m-right .f-info p:nth-child(3) {
    font-size: 15px;
    color: #828282;
    margin-bottom: 25px;
}

.g-suolueTu2 .m-right .f-info p:nth-child(4) {
    font-size: 15px;
    color: #ee0a3b;
}

.g-suolueTu2 .m-right .f-info p:nth-child(4) i {
    font-style: normal;
}

.g-suolueTu2 .m-right .f-info:hover {
    box-shadow: 0px 0px 10px #cac7c7;
    transform: translateY(-5px);
    transition: 0.3s linear;
}
</style>
