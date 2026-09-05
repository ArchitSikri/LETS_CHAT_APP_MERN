import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { setMessages } from "../redux/MsgSlice";

const useGetRealTimeMessage = () => {
    const {socket} = useSelector(store=>store.socket);
    const {messages} = useSelector(store=>store.message);
    const dispatch = useDispatch();
    useEffect(()=>{
        socket?.on("newmsg", (newMessage)=>{
            dispatch(setMessages([...(messages || []), newMessage]));
        });
        return () => socket?.off("newmsg");
    }, [socket, messages, dispatch]);
};
export default useGetRealTimeMessage;