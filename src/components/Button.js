import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
    /* 공통스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    padding: 0 16px;
    line-height: 40px;
    font-size: 16px;
    background: #339af0;
    &:hover {
        background: #1c7ed6;
    }
    & + & {
        margin-left: 10px;
    }
`
//이 컴퍼넌트의 이름은 Button
//StyleButton은 그냥 Button컴퍼넌트 안에 있는 애임!
const Button = ({children, onClick}) => {
    return (
        <StyleButton onClick={onClick}>{children}</StyleButton>
    );
};

export default Button;