


//burada reducerımızı oluşturduk.

const countReducer =(state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return 0
        default:
            return state
    }
}
export { countReducer }
