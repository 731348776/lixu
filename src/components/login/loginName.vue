<template>
    <div class="login-box active" id="home">
        <input type="text" placeholder="用户名/手机号" id="username" ref="name" @keyup="handle1" />
        <input type="password" placeholder="登录密码" id="pwd" ref="pwd" @keyup="handle2" />
        <input type="button" value="登录" @click="handle" :class="{'u-loactive':isshow1||isshow2}" />
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
    data() {
        return{
            isshow1:false,
            isshow2:false
        }
    },
    methods: {
        handle() {
            let n1 = this.$refs.name.value;
            let p1 = this.$refs.pwd.value;
            // 本地缓存
            this.$local.save("user", {
                login: true,
                userName: n1
            })
            // 跳转到上一页
            this.$router.back();
        },
        handle1() {
            this.isshow1 = true;
        },
        handle2() {
            this.isshow2 = true;
        }
    }
}
</script>

<style>
.m-login .tab-content .login-box input.u-loactive {
    background: #ee0a3b;
    color: #fff;
}
</style>
