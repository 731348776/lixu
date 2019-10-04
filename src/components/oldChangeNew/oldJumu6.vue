<template>
    <div class="container-fluid g-jumu6">
        <img src="../../assets/imgs/old_new/20180716135641_64781.gif" />
        <div class="container m-userSay">
            <h1>去年用户怎么说</h1>
            <div class="u-say">
                <p v-for="item,index in oldJumu6List">
                    <img src="../../assets/imgs/old_new/dot.png" alt="" />
                    <span>{{item.say}}</span>
                    <img src="../../assets/imgs/old_new/01.png" class="showImg" />
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["oldJumu6List"])
    }
}
</script>

<style>
.g-jumu6 {
    position: relative;
    height: 700px;
}

.g-jumu6>img {
    width: 100%;
    height: 700px;
    position: absolute;
    top: 0px;
    left: 0px;
}

.g-jumu6 .m-userSay {
    position: absolute;
    top: 0px;
    left: 10%;
    text-align: center;
}

.g-jumu6 .m-userSay {
    /*border: 1px solid red;*/
    padding-top: 65px;
}

.g-jumu6 .m-userSay>h1 {
    font-size: 45px;
    margin-bottom: 110px;
}

.g-jumu6 .m-userSay .u-say {
    position: relative;
}

.g-jumu6 .m-userSay .u-say p {
    font-size: 18px;
    text-align: left;
    position: absolute;
}

.g-jumu6 .m-userSay .u-say p span {
    margin-bottom: 20px;
}

.g-jumu6 .m-userSay .u-say p>img:nth-child(1) {
    width: 39px;
    height: 39px;
}

.g-jumu6 .m-userSay .u-say p>img:nth-child(3) {
    display: none;
    left: 40px;
    z-index: 999;
}

.g-jumu6 .m-userSay .u-say p:nth-child(1) {
    left: 40%;
    top: 0px;
}

.g-jumu6 .m-userSay .u-say p:nth-child(2) {
    left: 10%;
    top: 70px;
}

.g-jumu6 .m-userSay .u-say p:nth-child(3) {
    left: 55%;
    top: 150px;
}

.g-jumu6 .m-userSay .u-say p:nth-child(4) {
    left: 20%;
    top: 200px;
}
</style>
