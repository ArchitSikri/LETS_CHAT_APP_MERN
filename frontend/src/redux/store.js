import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice" ;
import messageReducer from './MsgSlice';
import socketReducer from './SocketSlice';

const store = configureStore({
    reducer : {
        user : userReducer,
        message : messageReducer,
        socket : socketReducer
    }
});

export default store;



