import styled from 'styled-components';
import { Input as AntdInput, Button as AntdButton } from 'antd';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    margin-top: 30%;
    max-width: 80%;
    min-width: 320px;
`;

export const Input = styled(AntdInput)``;

export const Button = styled(AntdButton)`
    &&& {
        margin-top: 12px;
    }
`;
