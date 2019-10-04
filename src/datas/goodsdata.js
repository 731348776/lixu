// 首页数据
let indexCarousel = [
    { id: 1, pic: require("../assets/imgs/shouye/banner1.jpg") },
    { id: 2, pic: require("../assets/imgs/shouye/banner2.jpg") },
    { id: 3, pic: require("../assets/imgs/shouye/banner3.jpg") }
]
let indexThumbnail1 = [
    { "id": 1, "pic": require("../assets/imgs/shouye/s2.jpg") },
    { "id": 2, "pic": require("../assets/imgs/shouye/s1.jpg") },
    { "id": 3, "pic": require("../assets/imgs/shouye/s3.jpg") },
    { "id": 4, "pic": require("../assets/imgs/shouye/s4.jpg") },
    { "id": 5, "pic": require("../assets/imgs/shouye/s5.jpg") },
    { "id": 6, "pic": require("../assets/imgs/shouye/s6.jpg") }
]
let indexThumbnail2 = [
    { "id": 1, "pic": require("../assets/imgs/shouye/b-1.png"), "title": "地宝T5 Plus", "descp": "以旧换新 高配新品", "price": "2999" },
    { "id": 2, "pic": require("../assets/imgs/shouye/b-2.png"), "title": "地宝DN520", "descp": "以旧换新 高配新品", "price": "2699" },
    { "id": 3, "pic": require("../assets/imgs/shouye/b-3.png"), "title": "窗宝W880", "descp": "以旧换新 高配新品", "price": "2499" },
    { "id": 4, "pic": require("../assets/imgs/shouye/b-4.png"), "title": "地宝DJ65", "descp": "视觉导航新品 全面升级", "price": "1999" }
]
let indexThumbnail3 = [
    { "id": 1, "pic": require("../assets/imgs/shouye/d1.png"), "title": "T5 Max", "descp": "重磅新品 革新升级", "price": "2899" },
    { "id": 2, "pic": require("../assets/imgs/shouye/d2.png"), "title": "DJ35", "descp": "热销爆款 能看慧思考", "price": "1699" },
    { "id": 3, "pic": require("../assets/imgs/shouye/d3.png"), "title": "DN55", "descp": "激光扫描 全局规划", "price": "2399" },
    { "id": 4, "pic": require("../assets/imgs/shouye/d4.png"), "title": "N5 Fun", "descp": "视觉导航 规划升级", "price": "1899" },
    { "id": 5, "pic": require("../assets/imgs/shouye/d5.png"), "title": "T5 Max", "descp": "重磅新品 革新升级", "price": "2899" },
    { "id": 6, "pic": require("../assets/imgs/shouye/d6.png"), "title": "DJ35", "descp": "热销爆款 能看慧思考", "price": "1699" },
    { "id": 7, "pic": require("../assets/imgs/shouye/d7.png"), "title": "DN55", "descp": "激光扫描 全局规划", "price": "2399" },
    { "id": 8, "pic": require("../assets/imgs/shouye/d8.png"), "title": "N5 Fun", "descp": "视觉导航 规划升级", "price": "1899" }
]
let indexThumbnail4 = [
    { "id": 1, "pic": require("../assets/imgs/shouye/index_img_15077185925579.png"), "title": "边刷" },
    { "id": 2, "pic": require("../assets/imgs/shouye/index_img_15077185955670.png"), "title": "抹布" },
    { "id": 3, "pic": require("../assets/imgs/shouye/index_img_15077185985284.png"), "title": "滤材" },
    { "id": 4, "pic": require("../assets/imgs/shouye/index_img_15595435905496.png"), "title": "滚刷" }
]
// 以旧换新页数据
let oldCarousel = [
    { id: 1, pic: require("../assets/imgs/old_new/banner01.png") },
    { id: 2, pic: require("../assets/imgs/old_new/banner02.png") }
]
let oldJumu3List = [
    { id: 1, pic: require("../assets/imgs/old_new/l-1.jpg") },
    { id: 2, pic: require("../assets/imgs/old_new/l-2.jpg") },
    { id: 3, pic: require("../assets/imgs/old_new/l-3.jpg") },
]
let oldJumu6List = [
    { id: 1, "say": "清洁智能大提升" },
    { id: 2, "say": "解决了家里闲置的旧电器" },
    { id: 3, "say": "毛发克星，做精致的铲屎官" },
    { id: 4, "say": "毛发克星，做精致的铲屎官" },
]

// 热门商品推荐数据
let reAboutList = [
    { "id": 1, "pic": require("../assets/imgs/hotSall/about3.png"), "title1": "边刷", "title2": "一对", "title3": "地宝", "price": "24" },
    { "id": 2, "pic": require("../assets/imgs/hotSall/about2.png"), "title1": "边刷", "title2": "一对", "title3": "地宝", "price": "24" },
    { "id": 3, "pic": require("../assets/imgs/hotSall/about3.png"), "title1": "边刷", "title2": "一对", "title3": "地宝", "price": "24" },
    { "id": 4, "pic": require("../assets/imgs/hotSall/about4.png"), "title1": "边刷", "title2": "一对", "title3": "地宝", "price": "24" },
]
let reRightList = [
    { "id": 1, "pic": require("../assets/imgs/hotSall/right-side01.png"), "title": "地宝DJ35&nbsp;视觉导航", "price": "1399" },
    { "id": 2, "pic": require("../assets/imgs/hotSall/right-side02.png"), "title": "地宝DN555&nbsp;高端新品", "price": "1999" },
    { "id": 3, "pic": require("../assets/imgs/hotSall/right-side03.png"), "title": "地宝DD35&nbsp;智控扫拖", "price": "1189" },
    { "id": 4, "pic": require("../assets/imgs/hotSall/right-side04.png"), "title": "地宝魔镜S&nbsp;扫拖一体", "price": "899" }
]
let reSwitch1 = {
    switchList1: [
        { "id": 1, "pic": require("../assets/imgs/hotSall/main3.jpg") },
        { "id": 2, "pic": require("../assets/imgs/hotSall/20190314150708_51687.gif") },
        { "id": 3, "pic": require("../assets/imgs/hotSall/20181020135537_73819.jpg") },
        { "id": 4, "pic": require("../assets/imgs/hotSall/20190314150922_62491.gif") },
        { "id": 5, "pic": require("../assets/imgs/hotSall/20181020135538_46081.jpg") },
        { "id": 6, "pic": require("../assets/imgs/hotSall/20181020135538_34956.jpg") },
        { "id": 7, "pic": require("../assets/imgs/hotSall/20181020135538_47167.jpg") },
        { "id": 8, "pic": require("../assets/imgs/hotSall/20190314150948_87343.gif") },
        { "id": 9, "pic": require("../assets/imgs/hotSall/20181020135539_79189.jpg") },
        { "id": 10, "pic": require("../assets/imgs/hotSall/20181020135539_66763.jpg") },
        { "id": 11, "pic": require("../assets/imgs/hotSall/20181020135539_77193.jpg") },
        { "id": 12, "pic": require("../assets/imgs/hotSall/20190314151007_52396.gif") },
        { "id": 13, "pic": require("../assets/imgs/hotSall/20181020135540_35780.jpg") },
        { "id": 14, "pic": require("../assets/imgs/hotSall/20181020135540_37475.jpg") },
        { "id": 15, "pic": require("../assets/imgs/hotSall/20181020135540_25831.jpg") },
        { "id": 16, "pic": require("../assets/imgs/hotSall/20190314151026_12037.gif") },
        { "id": 17, "pic": require("../assets/imgs/hotSall/20181020135541_43608.jpg") },
        { "id": 18, "pic": require("../assets/imgs/hotSall/20181020135541_89629.jpg") },
        { "id": 19, "pic": require("../assets/imgs/hotSall/20181020135541_79917.jpg") }
    ],
    switchList2: [

    ]
}
let reSwitch2List = [
    { "id": 1, "title1": "功能", "title2": "全能清洁(扫吸拖式) " },
    { "id": 2, "title1": "续航时间", "title2": "100分钟及以上(120平米以上) " },
    { "id": 3, "title1": "机身大小", "title2": "8cm~9cm" },
    { "id": 4, "title1": "产品名", "title2": "DJ35" },
    { "id": 5, "title1": "型号", "title2": "DJ35 " },
    { "id": 6, "title1": "产品颜色", "title2": "莹贝白 " },
    { "id": 7, "title1": "电池容量(mAh)", "title2": "2600mAh " },
    { "id": 8, "title1": "定时功能", "title2": "有 " },
    { "id": 9, "title1": "边刷", "title2": "有 " },
    { "id": 10, "title1": "尘盒容积（L）", "title2": "0.45L" },
    { "id": 1, "title1": "是否有遥控器", "title2": "有 " },
    { "id": 1, "title1": "产品净重(Kg)", "title2": "4.2" },
    { "id": 1, "title1": "产品尺寸 (mm)", "title2": "355*351*82" }
]

// 全网配件数据
let sortList = [
    { "id": 1, "pic": require("../assets/imgs/parts/640.jpg"), "price": "10", "title": "过滤海帕 1个 地宝魔镜/魔镜S/灵犀系列配件 高效过滤网HEPA", "descp": "适用于地宝魔镜/魔镜S/灵犀/天天/幻影/CR120/CR121/CR540", "sale": "41069", "comment": "10871" },
    { "id": 2, "pic": require("../assets/imgs/parts/641.png"), "price": "24", "title": "边刷 1对 魔镜/魔镜S/灵犀专用配件", "descp": "适用于地宝魔镜/魔镜S/灵犀/天天/CR120/CR121/CR540", "sale": "24629", "comment": "10517" },
    { "id": 3, "pic": require("../assets/imgs/parts/642.png"), "price": "80", "title": "滚刷 1个 地宝DD35/朵朵S/朵朵/DE3配件", "descp": "适用于地宝DD35/DD33/朵朵/晶晶/随心/朵朵S/DR95/天E/芯E/DT8系列/DM8系列/DR9系", "sale": "21711", "comment": "15399" },
    { "id": 4, "pic": require("../assets/imgs/parts/643.png"), "price": "12", "title": "抹布 1块 地宝魔镜系列专用配件（老版本）", "descp": "适用于老版本的地宝魔镜S/金睿/灵犀", "sale": "21477", "comment": "5413" },
    { "id": 5, "pic": require("../assets/imgs/parts/644.png"), "price": "20", "title": "抹布 1块 地宝朵朵/晶晶/随心/朵朵S配件 （带包角）干湿分离渗水抹布", "descp": "适用于地宝朵朵（老版本）/晶晶/随心/朵朵S（老版本）/天E/芯E/DT8系列", "sale": "20440", "comment": "6011" },
    { "id": 6, "pic": require("../assets/imgs/parts/645.png"), "price": "24", "title": "边刷 1对 地宝DJ35/DD35/朵朵S/倾城/DK3/DK4系列配件", "descp": "适用于地宝DJ35、DD35、DD33、DE35、DE33、DD35E、DD56、DG36、DB35、D36E、DM86、TCR360、 D36A、D36B、D36C、D36F、DB53、DM81、DT85、DT83、BFD-yv、BFD-yt、DT85G、DT87G、DN650、 DR92、DR95、DW700、DG710、DG711、DG716、DR98、DK33、DK35、DK36、DK39、DK41、DK43", "sale": "12719", "comment": "7713" },
    { "id": 7, "pic": require("../assets/imgs/parts/646.png"), "price": "1", "title": "魔术贴 1片 地宝朵朵/朵朵S/晶晶/DR95/倾城专用配件", "descp": "适用于地宝DT85G\DT85\DT83\DR92\DR95\DW700\DG710", "sale": "11438", "comment": "2157" },
    { "id": 8, "pic": require("../assets/imgs/parts/647.png"), "price": "2", "title": "过滤海绵 1个 科沃斯扫地机器人地宝DD35/DJ35/DN55专用配件", "descp": "预计9月下旬到货，适用于地宝DD35,DD33,DD56,DD35E,DJ35", "sale": "11010", "comment": "3923" },
    { "id": 9, "pic": require("../assets/imgs/parts/648.png"), "price": "12", "title": "抹布 1块 地宝魔镜S/灵犀（WIFI版）专用配件自渗水拖地布", "descp": "适用于带WIFI功能的地宝魔镜S/灵犀/金睿", "sale": "9992", "comment": "3365" },
    { "id": 10, "pic": require("../assets/imgs/parts/649.png"), "price": "100", "title": "窗宝清洁液 2L装-1瓶 窗宝全系列专用配件", "descp": "适用于窗宝全系，产品保质期为2年", "sale": "9726", "comment": "2469" },
    { "id": 11, "pic": require("../assets/imgs/parts/650.png"), "price": "3.5", "title": "过滤海绵 1块 地宝朵朵/朵朵S/DW700系列配件", "descp": "适用于地宝DT85/DT83/BFD-yv-GW(天e）/BFD-yt-US（芯e）/朵朵S/DW700", "sale": "9087", "comment": "3757" },
    { "id": 12, "pic": require("../assets/imgs/parts/651.png"), "price": "6", "title": "初级滤网 1个 魔镜/灵犀/魔镜S系列配件 初效过滤网", "descp": "适用于地宝魔镜/天天/幻影/魔镜S/灵犀/金睿", "sale": "7998", "comment": "3574" },
    { "id": 13, "pic": require("../assets/imgs/parts/652.png"), "price": "20", "title": "滚刷盖板 1个 地宝朵朵/朵朵S系列配件（老版本、配合非浮动式滚刷使用）", "descp": "适用于地宝DT85/DT83/BFD-yv-GW(天e）/BFD-yt-US（芯e）/DT85G（老版本、配合非浮动式滚刷使用）", "sale": "7099", "comment": "3767" },
    { "id": 14, "pic": require("../assets/imgs/parts/653.png"), "price": "60", "title": "抹布 3块 地宝倾城/朵朵S（新版）/DE35/DE55/DE53配件", "descp": "适用于地宝倾城/倾心/DG716/小睿/DW700/朵朵（新版）/朵朵S（新版）/DE35/DE33/DE55/DE53", "sale": "6885", "comment": "4455" },
    { "id": 15, "pic": require("../assets/imgs/parts/654.png"), "price": "12", "title": "抹布 1块 地宝琉璃/莹石/魔钻/CEN66/新版可可/DL3系列抹布", "descp": "适用于地宝琉璃/莹石/魔钻/CEN66系列/新版可可/魔戒/布丁/DG800/DG801/DG805/DL33/DL35", "sale": "6779", "comment": "1682" }

]
module.exports = { indexCarousel, indexThumbnail1, indexThumbnail2, indexThumbnail3, indexThumbnail4, oldCarousel, oldJumu3List, oldJumu6List, reAboutList, reRightList, reSwitch1, reSwitch2List, sortList }