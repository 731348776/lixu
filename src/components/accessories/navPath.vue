<template>
    <!--路径导航-->
    <div class="container g-select">
        <ol class="breadcrumb">
            <li>
                <a href="index.html">首页</a>
            </li>
            <li>
                <a href="parts.html">配件</a>
            </li>
        </ol>
        <!--功能选择-->
        <ul class="first">
            <li>功能选择:</li>
            <li>
                <a href="#">不限</a>
            </li>
            <li>
                <a href="hotSall.html">地宝系列</a>
            </li>
            <li>
                <a href="#">窗宝系列</a>
            </li>
            <li>
                <a href="#">沁宝系列</a>
            </li>
            <li>
                <a href="#">管家机器人系列</a>
            </li>
        </ul>
        <!--类目选择-->
        <ul class="second">
            <li>类目选择:</li>
            <li>
                <a href="#">不限</a>
            </li>
            <li>
                <a href="#">边刷</a>
            </li>
            <li>
                <a href="#">滚刷</a>
            </li>
            <li>
                <a href="#">过滤</a>
            </li>
            <li>
                <a href="#">抹布</a>
            </li>
            <li>
                <a href="#">清洁液</a>
            </li>
            <li>
                <a href="#">滤芯</a>
            </li>
            <li>
                <a href="#">更多</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/*路径导航*/

.g-select .breadcrumb {
    background: transparent;
    padding-top: 30px;
}

.g-select .breadcrumb li a {
    font-size: 17px;
    color: #333333;
    text-decoration: none;
}

.g-select .breadcrumb li a:hover {
    color: #ee0a3b;
}


/*选择*/

.li {
    font-size: 17px;
    color: #333333;
    float: left;
    padding: 15px 20px;
}

.a {
    color: #333333;
    text-decoration: none;
}

.g-select {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 20px;
}

.g-select .first {
    overflow: hidden;
    border: 1px dashed #333333;
    margin-bottom: 0px;
}

.g-select .first li {
    font-size: 17px;
    color: #333333;
    float: left;
    padding: 15px 20px;
}

.g-select .first li a {
    font-size: 13px;
    color: #333333;
    text-decoration: none;
}

.g-select .first li a:hover {
    color: #ee0a3b;
}

.g-select .first li:nth-child(2) a {
    color: #ee0a3b;
}

.g-select .second {
    overflow: hidden;
    border: 1px dashed #333333;
    margin-bottom: 0px;
    margin-left: 0px;
}

.g-select .second li {
    font-size: 17px;
    color: #333333;
    float: left;
    padding: 15px 20px;
}

.g-select .second li a {
    font-size: 13px;
    color: #333333;
    text-decoration: none;
}

.g-select .second li a:hover {
    color: #ee0a3b;
}

.g-select .second li:nth-child(2) a {
    color: #ee0a3b;
}
</style>
