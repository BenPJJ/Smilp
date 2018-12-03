const BASEURL = "https://www.easy-mock.com/mock/5c009e29494e234c09016313/example/test/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo: BASEURL,
    getGoodsInfo: BASEURL,
    registerUser:  LOCALURL+'user/register', //用户注册接口
}

// module.exports = URL
export default URL