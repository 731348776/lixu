<template>
    <div class="g-allGoods">
        <ul class="m-allGoodsList">
            <li>
                <div class="u-left">
                    <p>
                        <a href="hotSall.html">扫地机器人-地宝</a>
                    </p>
                    <p>
                        <a href="javascript:;">T5</a>
                        <a href="javascript:;">Max</a>
                        <a href="javascript:;">DJ65</a>
                        <a href="hotSall.html">DJ35</a>
                        <a href="javascript:;">DG70</a>
                    </p>
                    <p>></p>
                </div>
                <pop-list></pop-list>
            </li>
            <li>
                <div class="u-left">
                    <p>
                        <a href="javascript:;">擦窗机器人-窗宝</a>
                    </p>
                    <p>
                        <a href="javascript:;">W880</a>
                        <a href="javascript:;">W836</a>
                        <a href="javascript:;">W950</a>

                    </p>
                    <p>></p>
                </div>
            </li>
            <li>
                <div class="u-left">
                    <p>
                        <a href="javascript:;">净化机器人-沁宝</a>
                    </p>
                    <p>
                        <a href="javascript:;">A660</a>
                        <a href="javascript:;">AA30</a>
                    </p>
                    <p>></p>
                </div>
            </li>
            <li>
                <div class="u-left">
                    <p>
                        <a href="javascript:;">管家机器人-悠尼</a>
                    </p>
                    <p>
                        <a href="javascript:;">UNIBOT</a>
                        <a href="javascript:;">净化模块</a>
                    </p>
                    <p>></p>
                </div>
            </li>
            <li>
                <div class="u-left">
                    <p>
                        <a href="javascript:;">配件专区</a>
                    </p>
                    <p>
                        <a href="javascript:;">边刷</a>
                        <a href="javascript:;">抹布</a>
                        <a href="javascript:;">滚刷</a>
                        <a href="javascript:;">滤材</a>
                    </p>
                    <p>></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import PopList from './popList'
export default {
    components: {
        PopList
    }
}
</script>

<style>
.g-allGoods {
    position: relative;
}

.g-allGoods .m-allGoodsList {
    position: absolute;
    /* top: 49px; */
    left: 0px;
    height: 360px;
    z-index: 99;
    /* display: block; */
}

.g-allGoods .m-allGoodsList>li {
    height: 72px;
    position: relative;
}

.g-allGoods .m-allGoodsList>li .u-left {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 290px;
    padding: 10px 20px 0px 20px;
    background: #f7f8fa;
}

.g-allGoods .m-allGoodsList>li .u-left>p:nth-child(1) {
    margin: 5px;
    float: left;
    width: 80%;
}

.g-allGoods .m-allGoodsList>li .u-left>p:nth-child(1) a {
    color: #283a4a;
    font-size: 16px;
}

.g-allGoods .m-allGoodsList>li .u-left>p:nth-child(2) a {
    color: #7b7d7e;
    font-size: 14px;
}

.g-allGoods .m-allGoodsList>li .u-left>p:nth-child(2) {
    float: left;
}

.g-allGoods .m-allGoodsList>li .u-left>p:nth-child(3) {
    float: right;
    margin-top: -20px;
    font-size: 20px;
}

.g-allGoods .m-allGoodsList>li .u-left>p a:hover {
    color: #ee0a3b;
    text-decoration: none;
}
</style>
