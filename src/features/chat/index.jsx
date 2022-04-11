import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import socket from '../../socket';
import reducer from '../../reducer';
import { Auth } from './components/Auth';
import { ChatRoom } from './components/ChatRoom';
import * as S from './styled';

export const Chat = () => {
    const [roomId, setRoomId] = useState();
    const [userName, setUserName] = useState();
    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: [],
    });
    const onLogin = async (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
        const { data } = await axios.get(`/rooms/${obj.roomId}`);
        dispatch({
            type: 'SET_DATA',
            payload: data,
        });
    };

    const roomChangeHandler = (e) => {
        setRoomId(e.target.value);
    };
    const userChangeHandler = (e) => {
        setUserName(e.target.value);
    };

    const onEnter = () => {
        const obj = {
            roomId,
            userName,
        };
        axios.post('/rooms', obj);
        onLogin(obj);
    };

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        });
    };

    const addMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        });
    };

    useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers);
        socket.on('ROOM:NEW_MESSAGE', addMessage);
    }, []);

    return (
        <S.Wrapper>
            {!state.joined ? (
                <Auth
                    roomId={roomId}
                    userName={userName}
                    roomChangeHandler={roomChangeHandler}
                    userChangeHandler={userChangeHandler}
                    onEnter={onEnter}
                />
            ) : (
                <ChatRoom {...state} onAddMessage={addMessage} />
            )}
        </S.Wrapper>
    );
};
