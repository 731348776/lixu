<template>
    <!--商品详情-->
    <div id="home">
        <p class="row">
            <span class="col-md-3 col-xs-3">所属分类：视觉导航DJ35</span>
            <span class="col-md-3 col-xs-3 col-md-offset-3 col-xs-offset-3">功能：全能清洁(扫吸拖式)</span>
        </p>
        <!--视频-->
        <video controls="controls" style="width: 100%;">
            <source src="../../assets/imgs/hotSall/goods_video_15392216739620.mp4" type="video/mp4">
        </video>
        <!--能看会思考-->
        <div class="m-img">
            <img :src="item.pic" alt="" v-for="item,index in reSwitch1.switchList1" />
        </div>
        <!--注-->
        <div class="g-notes">
            <span style="white-space:normal;">注：</span><br style="white-space:normal;">
            <span style="white-space:normal;">1、以上页面产品图片因显示屏亮度、拍摄灯光等因素而略有不同，请以实物为准。</span><br style="white-space:normal;">
            <span style="white-space:normal;">2、图片中涉及的所有参考对象均为科沃斯品牌普通机器。</span><br style="white-space:normal;">
            <span style="white-space:normal;">3、所有数据均来源于具备国家检测能力并认可的科沃斯实验室，根据具体使用环境可能略有不同。</span><br style="white-space:normal;">
            <span style="white-space:normal;">4、因生产批次不同，产品外观可能略有差异，具体以收到的实物为准。</span><br style="white-space:normal;">
            <span style="white-space:normal;">5、无线电发射设备备案主体编码32201915355861。</span>
            <span style="white-space:normal;"></span>

        </div>
        <!--电子发票说明-->
        <div class="note-title">关于发票</div>
        <div class="note-content">
            <p>1、如需发票请在下单时选择，默认普通发票全部为电子发票，发票抬头默认为“客户”，如需更改抬头，请您在“发票抬头”栏中修改。如需开具增值税专用发票请提供营业执照及公司详细开票资料：公司名称、纳税人识别号、开户行、账号、地址、电话等资料并联系客服开具。</p>
            <p>2、电子发票的取得：买家可在订单详情中下载，或使用买家收货人手机号通过发票通（http://www.fapiao.com）平台注册查询下载。</p>
            <p>3、电子发票与传统纸质发票具有相同的法律效力<br> 国家税务总局公告〔2015〕84号，第三条：增值税电子普通发票的开票方和受票方需要纸质发票的，可以自行打印增值税电子普通发票的版式文件，其法律效力、基本用途、基本使用规定等与税务机关监制的增值税普通发票相同。
            </p>
            <p>4、电子发票查验真伪——国税总局发票查验平台：https://inv-veri.chinatax.gov.cn/</p>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["reSwitch1"])
    }
}
</script>

<style>
.g-main3 #home>p {
    padding-top: 25px;
    padding-bottom: 15px;
    padding-left: 25px;
    color: #a699a6;
}

.g-main3 #home>p span {
    padding-left: 0px;
    padding-right: 0px;
}



/*注*/

.g-main3 #home .g-notes {
    margin-bottom: 30px;
    font-size: 16px;
    color: #333333;
}





/*电子发票*/

.g-main3 #home .note-title {
    font-size: 24px;
    color: #253746;
    padding: 20px 20px;
    background: #efefef;
    margin-bottom: 15px;
}

.g-main3 #home .note-content {
    padding-left: 20px;
    font-size: 16px;
}
</style>
