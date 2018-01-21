import Vue from 'vue'
export default {
    state:{
        shopping: { 87: 5, 88: 5 }
    },
    getters: {
        shoppingSum(state){
            return Object.values(state.shopping).reduce((sum, v) => sum + v, 0);
        }
    },
    mutations: {
        
    }
}