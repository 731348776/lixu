<template>
    <!--详细参数-->
    <table class="table table-hover" id="profile2">
        <tr>
            <th colspan="2" class="section-hd">详细参数</th>
        </tr>
        <tbody>
            <tr v-for="item,index in reSwitch2List">
                <td>{{item.title1}}</td>
                <td>{{item.title2}}</td>
            </tr>
           
        </tbody>
    </table>
</template>

<script>
import {mapState} from "vuex"
export default {
computed:{
    ...mapState(["reSwitch2List"])
}
}
</script>

<style>
/*详细参数*/

.g-main3 #profile2.table th {
    padding: 15px 20px;
    font-size: 17px;
    border: 1px solid #dddddd;
}

.g-main3 #profile2.table td {
    border: 1px solid #dddddd;
    padding: 15px 20px;
}

.g-main3 #profile2.table {
    border: 1px solid red;
}

.g-main3 #profile2.table td:first-child {
    text-align: right;
    width: 30%;
}

.g-main3 #profile2.table td:last-child {
    width: 70%;
}
</style>
