import request from "../router/axios.js";

// 1.最新的商品信息
export const newestProductList = () => {
    return request({
        url: '/product/newest',
        method: 'get',
        data: null
    })
}