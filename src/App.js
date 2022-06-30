import './App.css';
import styled from 'styled-components';       // styled를 입힌 component를 만들거임
import Button from './components/Button';
import Dialog from './components/Dialog';
import { useState } from 'react';
import Box from './components/Box';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid black;
  padding: 10px;
`;

//styled. 뒤엔 쓸 html태그 적어주면 됨 / 그리고 그 안에는 css속성들 써주면 됨
//div로 만들어 줄거면 -> styled.div   / styled.section -> section
//`백틱` 템플릿리터럴 구문
// || or은 true를 찾으면 그만둠 -> 왼쪽에 애가 true면 오른쪽까지 실행 안됨
// const Circle = styled.section`    
//   width: 100px;
//   height: 100px;
//   // background: black;
//   background: ${props => props.color || 'black'};
//   // props(객체)에 값이 정해져 있으면 props.color(color속성?)의 색상이 지정되고 / 색지정한게 없으면 black으로 
//   border-radius: 50%;
// `;

function App() {
  const [ dialog, setDialog ] = useState(false);
  const onClick = () => {
    setDialog(true);
    console.log(dialog);
  }
  const onCancel = () => {
    setDialog(false);
    console.log('취소');
  }
  const onConfirm = () => {
    setDialog(false);
    console.log('확인');
  }
  return (
    <>
      <AppBlock>
        {/* <Circle color="blue"/>
        <Circle color="pink"/>
        <Circle /> */}

        <Button>button1</Button>
        <Button>button2</Button>
        <Button onClick={onClick}>button3</Button>
      </AppBlock>
      <Dialog title="정말로 삭제하시겠습니까?"
      confirmText="삭제" cancelText="취소"
      visible={dialog}
      onCancel={onCancel}
      onConfirm={onConfirm}
      >
        데이터를 삭제하시겠습니까?
      </Dialog>
      {/* visible={dialog} -> true/false로 하겠다! -> true면 나타나고 false면 안나타나게 할거! */}
      <Box />
    </>
  );
}

export default App;
