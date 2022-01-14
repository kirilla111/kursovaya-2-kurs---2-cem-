import { createStore } from 'vuex'

export default createStore({
  state: {
    cart_info: [],
    signed: false,
    userLogin: "",
    courierSigned: false,
    courierLogin: "",
  },
  mutations: {
    push(state, item){
      state.cart_info.push(item);
    },
    sign(state){
      state.signed = !state.signed;
    },
    userSignLogin(state, login){
      state.userLogin = login;
    },
    courierSign(state, login){
      state.courierSigned = true;
      state.courierLogin = login;
    },
    saveCart(state,vals){
      state.cart_info = vals;
    },
    clear(state){
      state.cart_info = [];
    }
  },
  actions: {
    pushCart(context, item){
      context.commit('push',item)
    },
    saveCart(context, vals){
      context.commit('saveCart',vals)
    }
  },
  modules: {
  },
  getters:{
    id: state => {
      return state.id;
    },
    userLogin: state => {
      return state.userLogin;
    },
    cart: state =>{
      return state.cart_info;
    },
    sign: state =>{
      return state.signed;
    },
    courierSign: state =>{
      return state.courierSigned;
    },
    courierLogin: state =>{
      return state.courierLogin;
    }
  }
})
