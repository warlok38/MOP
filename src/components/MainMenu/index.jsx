import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

export const MainMenu = () => {
    return (
        <S.Wrapper>
            <S.Status>
                <Link to="/react-spring">react spring</Link>
            </S.Status>
            <Link to="/drag">
                <S.Status>drag</S.Status>
            </Link>
            <Link to="/link2">
                <S.Status>Ссылка 2</S.Status>
            </Link>
        </S.Wrapper>
    );
};
