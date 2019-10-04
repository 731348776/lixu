<template>
    <div class="login-box" id="profile">
        <input type="text" placeholder="请输入11位手机号" id="tel" />
        <p>
            <input type="password" placeholder="请输入手机验证码" id="telPwd" />
            <input type="button" value="发送验证码" />
        </p>

        <input type="button" value="登录" />
        <p>
            <a href="register.html">立即注册</a>|
            <a href="#">忘记密码</a>
        </p>
        <h4>
            <span></span>其它登录方式
            <span></span>
        </h4>
        <div class="icon-login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/*手机号码登录*/

.m-login #profile p:nth-child(2) input[type="password"] {
    width: 70%;
    float: left;
}

.m-login #profile p:nth-child(2) input[type="button"] {
    width: 30%;
    float: left;
    background: #ededed;
    color: #888888;
    line-height: 50px;
}
</style>
