<template>
    <!--活动专区-->

    <div class="container g-suolueTu2">
        <div class="row">
            <div class="col-xs-6 col-md-3 m-left">
                <img src="../../assets/imgs/shouye/index_img_15662636494951.jpg" />
            </div>
            <thumbnail-right></thumbnail-right>
        </div>
    </div>
</template>

<script>
import ThumbnailRight from './thumbnailRight'
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["indexThumbnail2"])
    },
    components:{
        ThumbnailRight
    }
}
</script>

<style>
.g-suolueTu2 .m-left img {
    width: 100%;
    height: 340px;
}
</style>
