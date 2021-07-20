import React from 'react';
import * as S from './styled';

export const NoMatch = () => {
    return (
        <S.Wrapper>
            <S.Status>404</S.Status>
            <S.Title>Страница не найдена</S.Title>
        </S.Wrapper>
    );
};
