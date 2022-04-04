import styled from 'styled-components';
import { Button as AntdButton, Input as AntdInput } from 'antd';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 200px) 2fr;
    height: fit-content;
    border-radius: 5px;
    border: 1px solid #bebebe;
`;

export const SideContainer = styled.div`
    padding: 16px;
    max-width: 200px;
    background-color: #eeeeee;
    border-right: 1px solid #e0e0e0;
    border-radius: 5px 0 0 5px;
`;

export const SideTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`;

export const UserContainer = styled.div`
    display: grid;
    row-gap: 8px;
    margin-top: 8px;
`;

export const User = styled.div`
    padding: 8px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 2px 5px 0 rgba(1, 1, 1, 0.1);
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Content = styled.div`
    display: grid;
    row-gap: 16px;
    padding: 16px;
`;

export const MessageContainer = styled.div``;

export const Message = styled.div`
    padding: 8px;
    max-width: fit-content;
    background-color: darkcyan;
    color: #fff;
    border-radius: 10px;
    font-size: 16px;
    line-height: 19px;
`;

export const MessageLabel = styled.div`
    margin-left: 4px;
    font-size: 12px;
    line-height: 18px;
    color: #797979;
`;

export const Footer = styled.div`
    padding: 16px;
    position: relative;
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #bebebe;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 16px;
`;

export const Button = styled(AntdButton)``;

export const TextArea = styled(AntdInput.TextArea)``;
