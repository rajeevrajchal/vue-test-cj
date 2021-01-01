export default {
    state: {
        isCloseSmallView: false,
        isFullScreenSmallView:false
    },
    mutations: {
        changeIsCloseSmallView(state,payload) {
            if(state.isFullScreenSmallView){
                state.isFullScreenSmallView = false
            }
            state.isCloseSmallView = payload
        },
        changeIsFullScreenSmallView(state) {
            state.isFullScreenSmallView = !state.isFullScreenSmallView
        }
    },
    actions: {
        setIsCloseSmallView({commit}, payload) {
            commit('changeIsCloseSmallView',payload)
        },
        setIsFullScreenSmallView({commit}) {
            commit('changeIsFullScreenSmallView')
        },
    },
}