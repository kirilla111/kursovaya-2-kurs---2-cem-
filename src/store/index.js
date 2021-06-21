import { createStore } from 'vuex'

export default createStore({
  state: {
    cart_info: [],
    signed: false
  },
  mutations: {
    push(state, item){
      state.cart_info.push(item);
    },
    sign(state){
      state.signed = !state.signed;
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
    cart: state =>{
      return state.cart_info;
    },
    sign: state =>{
      return state.signed;
    }
  }
})
