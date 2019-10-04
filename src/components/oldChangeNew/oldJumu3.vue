<template>
    <div class="jumbotron g-juImg3">
        <div class="Container">
            <el-carousel :interval="4000" type="card" height="755px">
                <el-carousel-item v-for="item,index in oldJumu3List" :key="index">
                    <h3 class="medium"><img :src="item.pic" alt="..." /></h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["oldJumu3List"])
    }
}
</script>

<style>
.g-juImg3 {
    width: 100%;
    background-image: url(../../assets/imgs/old_new/sxh_bg.jpg);
    background-size: cover;
    background-position: center;
    height: 1060px;
    background-repeat: no-repeat;
    padding-top: 280px;
}

.g-juImg3 .el-carousel__item h3 {
    box-sizing: border-box;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
    padding: 20px 40px;
    width: 525px;
    height: 755px;
}

.g-juImg3 .el-carousel__item h3 img {
    width: 100%;
    height: 100%;
}

.g-juImg3 .el-carousel__mask {
    width: 0;
    background-color: transparent;
}

.g-juImg3 .el-carousel__item,
.el-carousel__mask {
    left: 100px;
}

.g-juImg3 .el-carousel__item:nth-child(2n) {
    background-color: transparent;
}

.g-juImg3 .el-carousel__item:nth-child(2n+1) {
    background-color: transparent;
}
</style>
