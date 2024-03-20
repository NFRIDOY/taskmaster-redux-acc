import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [
        {
            title: "Task",
            email: "nf@gmail.com"
        }
    ],
}

export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            // TODO: mutate this
            // state.tasks = state.tasks.push(payload)
            state.tasks.push(payload)
        },
        updateTask: (state, { payload }) => {
            // filter by id
        },
        deleteTask: (state, { payload }) => {
            // filter with payload
        }

    }
})

export const { addTask, updateTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer;