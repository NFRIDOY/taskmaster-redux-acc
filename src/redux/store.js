import { configureStore } from "@reduxjs/toolkit"
import taskSlice from "./features/tasks/taskSlice";

// // export but not default 
export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
})
// // not exported 
// const store = configureStore({
//     reducer: {},
// })

// // export is default
export default store;