import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        
    }
})

export default taskSlice.reducer;