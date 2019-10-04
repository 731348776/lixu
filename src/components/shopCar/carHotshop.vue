<template>
    <div class="g-Hotgoods">
        <h1>热门商品</h1>
        <div class="row m-Hotgoods">
            <div class="col-xs-6 col-md-3">
                <div>
                    <img src="../../assets/imgs/carts/h1.png" alt="" />
                </div>

                <p>地宝DJ35&nbsp;视觉导航</p>
                <p>￥1699</p>
                <a href="#">加入购物车</a>
            </div>
            <div class="col-xs-6 col-md-3">
                <div>
                    <img src="../../assets/imgs/carts/h2.png" alt="" />
                </div>
                <p>地宝DJ35&nbsp;视觉导航</p>
                <p>￥1699</p>
                <a href="#">加入购物车</a>
            </div>
            <div class="col-xs-6 col-md-3">
                <div>
                    <img src="../../assets/imgs/carts/h3.png" alt="" />
                </div>
                <p>地宝DJ35&nbsp;视觉导航</p>
                <p>￥1699</p>
                <a href="#">加入购物车</a>
            </div>
            <div class="col-xs-6 col-md-3">
                <div>
                    <img src="../../assets/imgs/carts/h4.png" alt="" />
                </div>
                <p>地宝DJ35&nbsp;视觉导航</p>
                <p>￥1699</p>
                <a href="#">加入购物车</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.g-Hotgoods {
    height: 500px;
    /* background: red; */
    padding-left: 0px;
    padding-right: 0px;
}

.g-Hotgoods h1 {
    color: #333333;
    background: white;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    padding-left: 20px;
}

.g-Hotgoods .m-Hotgoods {
    padding: 30px 20px;
    background: white;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: -8px;
    margin-bottom: 65px;
}

.g-Hotgoods .m-Hotgoods>div {
    text-align: center;
    border: 1px solid #dddddd;
    padding: 15px;
    margin-right: 10px;
    width: 24%;
}

.g-Hotgoods .m-Hotgoods>div:last-child {
    margin-right: 0px;
}

.g-Hotgoods .m-Hotgoods>div img {
    margin-bottom: 20px;
}

.g-Hotgoods .m-Hotgoods>div p {
    font-size: 16px;
    color: #333333;
    margin-bottom: 10px;
}

.g-Hotgoods .m-Hotgoods>div p:nth-child(3) {
    color: #ee0a3b;
    font-weight: 600;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 8px;
}

.g-Hotgoods .m-Hotgoods>div a {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 130px;
    color: white;
    background: #ee0a3b;
    font-size: 18px;
    text-decoration: none;
}

.g-Hotgoods .m-Hotgoods>div img:hover {
    transform: scale(1.1);
    transition: .3s linear;
}
</style>
