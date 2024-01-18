import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionsCreators.ts";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // increment(state, action: PayloadAction<number>) {
        //     state.count += action.payload
        // }
        // usersFetching(state) {
        //     state.isLoading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // }

    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false
                state.error = ''
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
        // builder.addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // })
        // builder.addCase(fetchUsers.pending.type, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(fetchUsers.rejected.type, (state, action: PayloadAction<string>) => {
        //     state.isLoading = false
        //     state.error = payload.action
        // })

        // ------------------------------------------------------------------------------------------

        // [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // },
        // [fetchUsers.pending.type]: (state) => {
        //     state.isLoading = true
        // },
        // [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
        //     state.isLoading = false
        //     state.error = payload.action
        // }
    }
})

export default userSlice.reducer