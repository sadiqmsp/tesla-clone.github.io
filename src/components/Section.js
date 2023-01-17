import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section( { title ,backgroundImg, description, leftBtn, rightBtn } ) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
          <Content>
              <h1>{title}</h1>
              <p>{description}</p>
          </Content>
        </Fade>
        <Fade bottom>
          <Buttons>
              <ButtonGroup>
                <LeftBtn>{leftBtn}</LeftBtn>
                {rightBtn && <RightBtn>{rightBtn}</RightBtn>}
              </ButtonGroup>
              <DownBtn src='images/down-arrow.svg' />
          </Buttons>
        </Fade>
    </Wrap>
  )
}

export default Section



const Wrap = styled.div`
width:  100vw;
height: 100vh;
background-size: cover;
background-position : center;
background-image: ${ props => `url('${props.bgImage}')` };
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;

`
const Content = styled.div`
text-align:  center;
 padding: 80px 0px
`
const Buttons = styled.div`
text-align: center;
margin: 20px;
`
const ButtonGroup = styled.div`
display: flex;
justify-content: center;
@media(max-width : 480px){
  flex-direction: column;
}
`
const LeftBtn = styled.div `
padding: 10px;
background-color: gray;
width: 200px;
text-align:center;
margin:10px;
color: white;
border-radius: 100px;
cursor: pointer;
`
const RightBtn = styled(LeftBtn)`
background: #fff;
color: #393c41;
`

const DownBtn = styled.img`
width: 50px;
animation: moving 1s linear infinite alternate;
@keyframes moving{
  0% {
    transform: translateY(-3px);
  }
  100%{
    transform: translateY(3px);
  }
}
`