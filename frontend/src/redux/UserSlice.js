import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
     name : "user",
     initialState : {
        authUser : {
            _id: "auth123",
            fullName: "Current User",
            profilePhoto: "https://i.pravatar.cc/150?img=12"
        }, // Dummy auth user for UI demonstration
        otherUsers : null,
        selectedUser : null,
        onlineUsers : null
     },
     reducers : {
        setAuthUser : (state , action) => {
            state.authUser = action.payload;
        },
        setOtherUsers : (state , action) => {
            state.otherUsers = action.payload;
        },
        setSelectedUser : (state , action) => {
            state.selectedUser = action.payload;
        },
        setOnlineUsers : (state , action) => {
            state.onlineUsers = action.payload;
        }
    }
})

export const {setAuthUser, setOtherUsers, setSelectedUser, setOnlineUsers} = userSlice.actions;
export default userSlice.reducer;