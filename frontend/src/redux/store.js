import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice" ;
import messageReducer from './MsgSlice';

const store = configureStore({
    reducer : {
        user : userReducer,
        message : messageReducer
    }
});

export default store;



