import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 15px;
    border-radius: 15px;
    border: 0;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin: 5px;
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }
`