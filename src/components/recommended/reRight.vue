<template>
    <div class="col-md-3 col-xs-3 g-right-side">
        <div>
            <img src="../../assets/imgs/hotSall/right-side00.png" alt="" />
        </div>
        <ul>
            <li v-for="item,index in reRightList">
                <a href="hotSall.html"><img :src="item.pic" alt="" /></a>
                <p>
                    <a href="hotSall.html">{{item.title}}</a>
                </p>
                <p>￥{{item.price}}</p>
            </li>

        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["reRightList"])
    }
}
</script>

<style>
/*主体右边栏     热销排行*/

.g-main3 .g-right-side {
    border: 1px solid #d4d4d4;
    text-align: center;
    padding-right: 0px;
    padding-left: 0px;
}

.g-main3 .g-right-side>div {
    width: 100%;
    background: #f3f3f3;
    padding: 20px;
}

.g-main3 .g-right-side>div img {
    width: 98px;
}

.g-main3 .g-right-side ul>li {
    border: 1px solid #d4d4d4;
    padding: 20px;
}

.g-main3 .g-right-side ul>li p,
.g-main3 .g-right-side ul>li p>a {
    font-size: 14px;
    color: #9a9ab4;
    margin-top: 10px;
    text-decoration: none;
}

.g-main3 .g-right-side ul>li img:hover {
    transform: scale(1.1);
    transition: 0.3s;
}

.g-main3 .g-right-side ul>li p {
    color: #fe0000;
    font-size: 16px;
    font-weight: 600;
}
</style>
