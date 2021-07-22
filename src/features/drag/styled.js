import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
`;

export const Ball = styled(animated.div)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    color: #fff;
    background-color: #1d1d1d;
    border-radius: 50%;
    cursor: grab;
    touch-action: none;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    will-change: transform;
`;
