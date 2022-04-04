import React from 'react';
import * as S from './styled';

export const ChatRoom = ({ users, messages }) => {
    console.log(users, messages);
    return (
        <S.Wrapper>
            <S.SideContainer>
                <S.SideTitle>Online ({users.length}):</S.SideTitle>
                <S.UserContainer>
                    {users.map((user, index) => (
                        <S.User key={index}>{user}</S.User>
                    ))}
                </S.UserContainer>
            </S.SideContainer>
            <S.MainContainer>
                <S.Content>
                    <S.MessageContainer>
                        <S.Message>
                            Hello Hello Hello HelloHello Hello Hello Hello Hello
                            HelloHelloHelloHello Hello
                        </S.Message>
                        <S.MessageLabel>user</S.MessageLabel>
                    </S.MessageContainer>
                    <S.MessageContainer>
                        <S.Message>Hello</S.Message>
                        <S.MessageLabel>user</S.MessageLabel>
                    </S.MessageContainer>
                </S.Content>
                <S.Footer>
                    <S.TextArea placeholder="Type something..." />
                    <S.ButtonContainer>
                        <S.Button type="primary">Send</S.Button>
                    </S.ButtonContainer>
                </S.Footer>
            </S.MainContainer>
        </S.Wrapper>
    );
};
