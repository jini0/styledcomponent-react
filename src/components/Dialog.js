import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';

//트렌지션설정
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

//*scss처럼 작성해주면됨!
//어두운배경 div
//div니까 return 안에 <div></div>대신에 <DarkBackground></DarkBackground>에 넣어주면 됨!
const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.7);

    animation: ${fadeIn} 0.25s;
    animation-fill-mode: forwards;
`;
//컨텐츠블럭
const DialogBlock = styled.div`
    width: 320px;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
    h3 {
        margin: 0;
        font-size: 24px;
    }
    p {
        font-size: 18px;
    }
    animation: ${slideUp} 0.5s;
    animation-fill-mode: forwards;
`;

//버튼그룹
const ButtonGroup = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;      

`;

// 변경될 수 있는 것들은 다 props로 주자!
const Dialog = ({title, children, confirmText, cancelText, visible, onConfirm, onCancel}) => {
    //!visible -> visible가 false면!(true가 아니면) => false면 null을 부름! (return은 함수의 끝이라서!!!!)
    if(!visible) return null;
    // visible얘가 true면 return을 불러주고,
    //true면 자동적으로 여기 밑에를 return해줌 -> else안적어줘도 됨!
    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button onClick={onCancel}>{cancelText}</Button>
                    <Button onClick={onConfirm}>{confirmText}</Button>
                    {/* <Button></Button>태그 안에 취소 삭제 적어줘도 되지만 -> 나중에 변경할 수도 있으니까 props로 다 주기!!
                    그래서 App.js에서 <Button></Button>안에 props로 주기위해 cancelText와 confirmText를 주자!! */}
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
};

export default Dialog;