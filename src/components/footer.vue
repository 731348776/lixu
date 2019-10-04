<template>
    <div class="site-footer">
        <div class="container">
            <div class="footer-service">
                <ul class="row">
                    <li class="col-xs-6 col-md-3">
                        <span><img src="../assets/imgs/footer/f-icon_01.jpg" alt="" /></span>
                        <b>官方品质保证</b>
                    </li>
                    <li class="col-xs-6 col-md-3">
                        <span><img src="../assets/imgs/footer/f-icon_02.jpg" alt="" /></span>
                        <b>7天无理由退货</b>
                    </li>
                    <li class="col-xs-6 col-md-3">
                        <span><img src="../assets/imgs/footer/f-icon_03.jpg" alt="" /></span>
                        <b>全场满99包邮</b>
                    </li>
                    <li class="col-xs-6 col-md-3">
                        <span><img src="../assets/imgs/footer/f-icon_04.jpg" alt="" /></span>
                        <b>售后网点 全国覆盖</b>
                    </li>
                </ul>
            </div>
            <div class=" footer-links">

                <div class="row f-main-info">
                    <div class="col-xs-6 col-md-6">
                        <div class="row">
                            <dl class="col-xs-3 col-md-3">
                                <dt>购物相关</dt>
                                <dd>
                                    <a target="_blank" href="javascript:;">购物指南</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">支付方式</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">配送方式</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">官翻机专区</a>
                                </dd>
                            </dl>
                            <dl class="col-xs-3 col-md-3">
                                <dt>售后支持</dt>
                                <dd>
                                    <a target="_blank" href="javascript:;">售后服务政策</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">退换货政策</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">常见问题</a>
                                </dd>
                            </dl>
                            <dl class="col-xs-3 col-md-3">
                                <dt>关注我们</dt>
                                <dd>
                                    <a target="_blank" href="javascript:;">新浪微博</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">会员制度</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">加入我们</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">廉洁监督</a>
                                </dd>
                            </dl>
                            <dl class="col-xs-3 col-md-3">
                                <dt>关于我们</dt>
                                <dd>
                                    <a target="_blank" href="javascript:;">关于科沃斯</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">社会责任</a>
                                </dd>
                                <dd>
                                    <a target="_blank" href="javascript:;">联系我们</a>
                                </dd>
                            </dl>
                        </div>

                    </div>

                    <div class="col-xs-2 col-md-2 col-xs-offset-1 col-md-offset-1 f-qrcode ">
                        <img src="../assets/imgs/shouye/footer_qrcode.png">
                    </div>
                    <div class="col-xs-2 col-md-2 col-xs-offset-1 col-md-offset-1 f-contact">
                        <p class="tel">400-886-8888</p>
                        <p class="service-time">周一至周日 9:00-20:00</p>
                        <p class="contact-btn">
                            <button type="button" class="u-btn openChatBox">
                                <span class="glyphicon glyphicon-headphones"></span>在线客服</button>
                        </p>
                    </div>
                </div>
                <div class="f-copyright">
                    <p>
                        Copyright ©2014-2019 科沃斯机器人版权所有
                        <a target="_blank" href="javascript:;">苏ICP备14049145号-1</a>&nbsp;&nbsp;ICP证：苏B1-20140152
                        <img src="../assets/imgs/shouye/szicbok.gif" alt="" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
ul,
li,
ol,
dl,
dt,
dd {
    list-style: none;
}

.site-footer {
    background: #eff0f0;
}

.footer-service ul {
    height: 160px;
    border-bottom: 1px solid #f5f5f5;
}

.footer-service ul li {
    line-height: 160px;
    text-align: center;
    font-size: 18px;
    color: #616161;
}

.footer-service ul li b {
    margin-left: 12px;
    font-weight: normal;
}

.footer-service {
    margin-bottom: 50px;
}

.site-footer .footer-links .f-main-info dl dt {
    font-size: 17px;
    margin-bottom: 25px;
}

.site-footer .footer-links .f-main-info dl dd a {
    font-size: 13px;
    color: #757575;
}

.site-footer .footer-links .f-main-info dl dd {
    margin-bottom: 15px;
}

.site-footer .footer-links .f-contact .tel {
    font-size: 23px;
    color: #ee0a3b;
}

.site-footer .footer-links .f-contact .service-time {
    font-size: 13px;
    color: #757575;
}

.site-footer .footer-links .f-contact button {
    width: 100%;
    height: 35px;
    border: 1px solid #ee0a3b;
    background: white;
    font-size: 13px;
    color: #ee0a3b;
}

.site-footer .footer-links .f-contact button:active,
.site-footer .footer-links .f-contact button:hover {
    background: #ee0a3b;
    color: white;
}

.site-footer .footer-links .f-contact button span {
    margin-right: 12px;
}

.site-footer .f-copyright {
    text-align: center;
}

.site-footer .f-copyright p {
    font-size: 14px;
    color: #aca0a0;
}

.site-footer .f-copyright p a {
    color: #757586;
}

.site-footer .f-copyright p img {
    width: 35px;
    height: 45px;
    margin-left: 20px;
}

.site-footer a {
    text-decoration: none;
}

.site-footer .footer-links .f-main-info dl dd a:hover,
.site-footer .f-copyright p a:hover {
    color: #ee0a3b;
    text-decoration: none;
}

.site-footer .footer-links .f-main-info dl dd a:active,
.site-footer .f-copyright p a:active {
    color: #ee0a3b;
    text-decoration: none;
}
</style>
