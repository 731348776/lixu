<template>
    <div class="container-fluid register">
        <div class="row ">
            <div class="col-md-4 col-xs-4 col-md-offset-4 col-xs-4 g-box">
                <img src="imgs/shouye/logo_dark.png" alt="" />
                <h3>注册科沃斯账号</h3>
                <div class="m-namebox">
                    <p><input type="text" id="uname" placeholder="请输入用户名" /></p>
                    <p>
                        <span>!</span>
                        <span id="unameInfo">用户名字母开头，字母数字下划线，5-16字节</span>
                    </p>
                </div>
                <div class="m-telbox">
                    <p><input type="text" id="tel" placeholder="请输入11位手机号" /></p>
                    <p>
                        <span>!</span>
                        <span>请输入11位手机号</span>
                    </p>
                </div>
                <div class="m-pwdbox">
                    <p>
                        <input type="text" id="pwd" placeholder="请输入图片验证码" />
                        <span id="code-Random">SRVP</span>
                    </p>
                    <p>
                        <span>!</span>
                        <span>验证码不正确</span>
                    </p>
                </div>
                <input type="button" id="registerBtn" value="立即注册" />
                <p>
                    <input type="checkbox" id="checkBtn" /> 我已阅读并同意
                    <a href="#">会员注册协议</a>
                </p>
                <span>
                    已有账号？
                    <a href="login.html">立即登录</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.register {
    padding: 50px 0px;
}

.register .g-box {
    padding: 50px 0px;
    text-align: center;
    box-shadow: 0px 0px 10px grey;
    border-radius: 10px;
}

.register .g-box img {
    margin-bottom: 30px;
}

.register .g-box h3 {
    font-size: 28px;
    color: #666666;
    margin-bottom: 30px;
}

.register .g-box .input {
    height: 50px;
    color: #666666;
    font-size: 14px;
    padding: 17px 15px;
    border: 1px solid #e0e0e0;
}

.register .g-box .dot {
    display: inline-block;
    background: #ee0b3c;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    margin-right: 5px;
}

.register .g-box .tips {
    font-size: 12px;
    color: #666666;
}

.register .g-box .p {
    text-align: left;
}

.register .g-box .p span:nth-child(1) {
    display: inline-block;
    background: #ee0b3c;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    margin-right: 5px;
}

.register .g-box .p span:nth-child(2) {
    font-size: 12px;
    color: #666666;
}

.register .g-box .m-namebox {
    padding: 0px 20px;
}

.register .g-box .m-namebox input {
    height: 50px;
    color: #666666;
    font-size: 14px;
    padding: 17px 15px;
    border: 1px solid #e0e0e0;
    width: 100%;
}

.register .g-box .m-namebox p:nth-child(2) {
    text-align: left;
    display: none;
}

.register .g-box .m-namebox p:nth-child(2) span:nth-child(1) {
    display: inline-block;
    background: #ee0b3c;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    margin-right: 5px;
}

.register .g-box .m-namebox p:nth-child(2) span:nth-child(2) {
    font-size: 12px;
    color: #666666;
}

.register .g-box .m-telbox {
    padding: 0px 20px;
}

.register .g-box .m-telbox input {
    height: 50px;
    color: #666666;
    font-size: 14px;
    padding: 17px 15px;
    border: 1px solid #e0e0e0;
    width: 100%;
}

.register .g-box .m-telbox p:nth-child(2) {
    text-align: left;
    display: none;
}

.register .g-box .m-telbox p:nth-child(2) span:nth-child(1) {
    display: inline-block;
    background: #ee0b3c;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    margin-right: 5px;
}

.register .g-box .m-telbox p:nth-child(2) span:nth-child(2) {
    font-size: 12px;
    color: #666666;
}

.register .g-box .m-pwdbox {
    padding: 0px 20px;
}

.register .g-box .m-pwdbox p:nth-child(1) {
    text-align: left;
}

.register .g-box .m-pwdbox p:nth-child(1) input {
    height: 50px;
    color: #666666;
    font-size: 14px;
    padding: 17px 15px;
    border: 1px solid #e0e0e0;
    width: 60%;
}

.register .g-box .m-pwdbox p:nth-child(1) span {
    display: inline-block;
    width: 35%;
    height: 50px;
    border: 1px solid #e0e0e0;
    float: right;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    font-style: italic;
    color: #ee0b3c;
}

.register .g-box .m-pwdbox p:nth-child(2) {
    text-align: left;
    margin-bottom: 20px;
    display: none;
}

.register .g-box .m-pwdbox p:nth-child(2) span:nth-child(1) {
    display: inline-block;
    background: #ee0b3c;
    color: white;
    font-size: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    margin-right: 5px;
}

.register .g-box .m-pwdbox p:nth-child(2) span:nth-child(2) {
    font-size: 12px;
    color: #666666;
}

.register .g-box input[type="button"] {
    width: 92%;
    font-size: 18px;
    background: #e0e0e0;
    margin-bottom: 20px;
    height: 50px;
    line-height: 50px;
    border: none;
    color: #666666;
}

.register .g-box .a a {
    text-decoration: none;
    color: black;
    font-weight: 700;
}

.register .g-box .a a:hover {
    color: #ee0b3c;
}

.register .g-box p:nth-child(7) {
    text-align: left;
    padding: 0px 20px;
    margin-bottom: 50px;
}

.register .g-box p:nth-child(7) a {
    text-decoration: none;
    color: black;
    font-weight: 700;
}

.register .g-box p:nth-child(7) a:hover {
    color: #ee0b3c;
}

.register .g-box span a {
    text-decoration: none;
    color: black;
    font-weight: 700;
}

.register .g-box span a:hover {
    color: #ee0b3c;
}
</style>
