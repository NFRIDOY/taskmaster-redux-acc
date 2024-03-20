import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    tasks: [
        // deme 1 data 
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
                'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mir Hussain',
            priority: 'high',
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
            const id = uuidv4()
            state.tasks.push({ id, ...payload })
        },
        updateStatus: (state, { payload }) => {
            // TODO: mutate this
        },
        updateTask: (state, { payload }) => {
            // filter by id
        },
        removeTask: (state, { payload }) => {
            // filter with payload
        }

    }
})

export const { addTask, updateStatus, updateTask, removeTask } = taskSlice.actions

export default taskSlice.reducer;