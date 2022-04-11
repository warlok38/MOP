import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'antd';
import socket from '../../../../socket';
import * as S from './styled';

export const ChatRoom = ({
    users,
    messages,
    userName,
    roomId,
    onAddMessage,
}) => {
    const [messageValue, setMessageValue] = useState('');
    const messagesRef = React.useRef(null);

    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: messageValue,
        });
        onAddMessage({
            userName,
            text: messageValue,
        });
        setMessageValue('');
    };

    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);

    return (
        <S.Wrapper>
            <S.SideContainer>
                <S.SideTitle>Комната:&nbsp;{roomId}</S.SideTitle>
                <hr />
                <S.SideTitle>Online ({users.length}):</S.SideTitle>
                <S.UserContainer>
                    {users.map((user, index) => (
                        <Tooltip title={user}>
                            <S.User key={index}>{user}</S.User>
                        </Tooltip>
                    ))}
                </S.UserContainer>
            </S.SideContainer>
            <S.MainContainer>
                <S.Content ref={messagesRef}>
                    {messages.map(({ text, userName }, index) => (
                        <S.MessageContainer key={index}>
                            <S.Message>{text}</S.Message>
                            <S.MessageLabel>{userName}</S.MessageLabel>
                        </S.MessageContainer>
                    ))}
                </S.Content>
                <S.Footer>
                    <S.TextArea
                        placeholder="Type something..."
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                        rows={3}
                    />
                    <S.ButtonContainer>
                        <S.Button type="primary" onClick={onSendMessage}>
                            Send
                        </S.Button>
                    </S.ButtonContainer>
                </S.Footer>
            </S.MainContainer>
        </S.Wrapper>
    );
};
