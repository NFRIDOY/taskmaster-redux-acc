import { configureStore } from "@reduxjs/toolkit"

// // export but not default 
export const store = configureStore({
    reducer: {},
})
// // not exported 
// const store = configureStore({
//     reducer: {},
// })

// // export is default
export default store;