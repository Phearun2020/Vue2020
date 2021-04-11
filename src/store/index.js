import { reactive } from 'vue'

const state = reactive({
    counter: 0
})

const methods = {
    decreaseCounter() {
        state.counter--
    },
    increaseCounter() {
        state.counter++
    }
}

export default {
    state,
    methods
}