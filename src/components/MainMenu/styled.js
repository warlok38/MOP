import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 200px;
    min-width: 200px;
    height: 100%;
    background-color: #eeeeee;
    padding: 20px;
`;
export const Status = styled.div`
    font-size: 20px;
    line-height: 23px;
    font-weight: bold;
`;
export const Title = styled.div`
    font-size: 14px;
    line-height: 16px;
`;
