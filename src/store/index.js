import Vue from "vue"
import Vuex from "vuex"
import { indexCarousel, indexThumbnail1, indexThumbnail2, indexThumbnail3, indexThumbnail4, oldCarousel, oldJumu3List, oldJumu6List, reAboutList, reRightList, reSwitch1, reSwitch2List, sortList } from '../datas/goodsdata'
Vue.use(Vuex);

let store = new Vuex.Store({
    // 存储数据
    state: {
        indexCarousel,
        indexThumbnail1,
        indexThumbnail2,
        indexThumbnail3,
        indexThumbnail4,
        oldCarousel,
        oldJumu3List,
        oldJumu6List,
        reAboutList,
        reRightList,
        reSwitch1,
        reSwitch2List,
        sortList,
        carData: []
    },
    mutations: {
        // 加入购物车
        addCart(state, data) {
            // 如果商品存在购物车中，加数量，如果商品不再购物车中，加种类
            let boff = true;
            state.carData.forEach((goods) => {
                if (goods.id == data.id) {
                    goods.count++;
                    boff = false;
                }
            })
            if (boff) {
                let goodsData = data;
                // 手动添加
                Vue.set(goodsData, "count", 1);
                state.carData.push(goodsData);
            }
        },
        // 修改购物车数据
        changeNum(state, data) {
            if (data.flag == 1) {
                state.carData[data.index].count--;
                if (state.carData[data.index].count < 1) {
                    state.carData.splice(data.index, 1);
                }
            } else if (data.flag == 2) {
                state.carData[data.index].count++;
            }
        }
    },
    actions: {
        addAction(context, data) {
            context.commit("addCart", data)
        },
        changeAction(context, data) {
            context.commit("changeNum", data)
        }
    },
    getters: {
        totalCount(state) {
            return state.carData.reduce((sum, item) => sum + item.count, 0)
        },
        totalPrice(state) {
            return state.carData.reduce((totalPri, item) => totalPri + item.count * item.price, 0)
        }
    }

})
export default store