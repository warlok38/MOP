import React from 'react';
import * as S from './styled';

export const Auth = ({
    roomId,
    userName,
    roomChangeHandler,
    userChangeHandler,
    onEnter,
}) => {
    return (
        <S.Wrapper>
            <S.Input
                placeholder="ROOM ID"
                value={roomId}
                onChange={roomChangeHandler}
            />
            <S.Input
                placeholder="Enter your name"
                value={userName}
                onChange={userChangeHandler}
            />
            <S.Button onClick={onEnter} disabled={!roomId || !userName}>
                Join
            </S.Button>
        </S.Wrapper>
    );
};
