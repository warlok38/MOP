import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

export const MainMenu = () => {
    return (
        <S.Wrapper>
            <Link to="/chat">
                <S.Status>Чат</S.Status>
            </Link>
            <S.Status>
                <Link to="/react-spring">react spring</Link>
            </S.Status>
            <Link to="/drag">
                <S.Status>drag</S.Status>
            </Link>
        </S.Wrapper>
    );
};
