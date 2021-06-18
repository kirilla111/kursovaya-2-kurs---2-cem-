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
    }
  },
  actions: {
    pushCart(context, item){
      context.commit('push',item)
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
