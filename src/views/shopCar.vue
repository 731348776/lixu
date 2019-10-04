<template>
    <div class="g-shop-car">
        <!-- 头部导航条 -->
        <header-nav></header-nav>
        <!--  -->
        <section class="container cartMain">
            <car-content></car-content>
            <!-- 热卖商品推荐 -->
            <car-hotshop></car-hotshop>
        </section>
    </div>
</template>

<script>
import HeaderNav from '../components/headerNav'
import CarContent from '../components/shopCar/carContent'
import CarHotshop from '../components/shopCar/carHotshop'

export default {
    components: {
        HeaderNav,
        CarContent,
        CarHotshop
    },
}
</script>

<style>
.g-shop-car {
    background: #efefef;
}

input[type="checkbox"] {
    display: none;
}

label {
    display: inline-block;
    z-index: 1;
    border: 1px solid #b8b8b8;
    margin-left: 10px;
    border-radius: 1px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    color: white;
    font-size: 12px;
}

label.mark {
    /* // background: url(../imgs/carts/mark1.png) no-repeat -1px -1px; */
    background: #ee0a3b;
    border: none;
}

a:hover {
    color: #ff873e;
    text-decoration: underline;
}

.cartMain {
    margin-top: 60px;
    padding-left: 0px;
    padding-right: 0px;
}
</style>
