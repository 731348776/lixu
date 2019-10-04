<template>
    <!--分享到-->
    <div class="share">
        <p>分享到</p>
        <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </p>

        <p>收藏商品</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/*分享*/

.g-main1 .share {
    margin-top: 50px;
    margin-bottom: 80px;
}

.g-main1 .share p {
    float: left;
}

.g-main1 .share p:first-child,
.g-main1 .share p:last-child {
    font-size: 18px;
    /*border: 1px solid red;*/
    margin-top: 2px;
}

.g-main1 .share span:nth-child(2),
.g-main1 .share span:nth-child(3),
.g-main1 .share span:nth-child(4),
.g-main1 .share span:nth-child(5),
.g-main1 .share span:nth-child(6),
.g-main1 .share span:nth-child(1) {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url(../../assets/imgs/hotSall/share.png);
    background-position: 0px 0px;
    margin-left: 10px;
    margin-top: 5px;
}

.g-main1 .share span:nth-child(2) {
    background-position: -20px 0px;
}

.g-main1 .share span:nth-child(3) {
    background-position: -40px 0px;
}

.g-main1 .share span:nth-child(4) {
    background-position: -60px 0px;
}

.g-main1 .share span:nth-child(5) {
    background-position: -80px 0px;
}

.g-main1 .share span:nth-child(6) {
    background-position: -100px 0px;
    margin-left: 30px;
}
</style>
