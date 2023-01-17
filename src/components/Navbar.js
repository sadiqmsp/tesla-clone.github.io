import React, { useState } from 'react'
import styled from  'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux'
function Navbar() {
  const [show, setShow] = useState(false);
  const cars =  useSelector(selectCars);
  return (
    <>
      <Container>
          <a href='#'>
            <img src="images/logo.svg" alt="Logo" />
          </a>
          <Menu>
              {cars.map( (car, index) =>{
                return <a key={index} href="/">{car}</a>
              })}
          </Menu>
          <RightMenu>
              <RightMenuLink>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
              </RightMenuLink>

            <CustomMenu  onClick={() =>{ setShow(true) }}/>

            <BurgerNavMenu dekha={show}>
              <CustomClose onClick={() =>{setShow(false)}} />
              {cars.map( (car, index) =>{
                return <li><a href="/"key={index}>{car}</a></li>
              })}
              <li><a href="/">Existing Inventory</a></li>
              <li><a href="/">Used Inventory</a></li>
              <li><a href="/">Trade Inventory</a></li>
              <li><a href="/">Cyber Truck</a></li>
              <li><a href="/">Roadaster</a></li>
              <li><a href="/">Roof Panels</a></li>
              <li><a href="/">Solar Panels</a></li>
              <li><a href="/">Semi</a></li>
              <li><a href="/">Powerwall</a></li>
              <li><a href="/">Commerical Energy</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Investor Relations</a></li>
              <li><a href="/">Find Us</a></li>
              <li><a href="/">Shop</a></li>
              <li><a href="/">Tesla Account</a></li>
            </BurgerNavMenu>
          </RightMenu>

      </Container>
    </>
  )
}

export default Navbar



const Container = styled.div`
min-height: 60px;
padding: 5px;
position: fixed;
display: flex;
align-items: center;
z-index: 1;
justify-content: space-between;
top: 0;
left: 0;
right: 0;
`

const Menu = styled.div`
 display: flex;
align-items: center;
justify-content: center;
flex: 1;

@media(max-width : 768px){
  display: none;
}
`

const RightMenu = styled.div`
 display: flex;
align-items: center;
margin-right: 0 10px;
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
margin: 0 10px;
`
const RightMenuLink = styled.div`
@media(max-width : 490px){
  display:none
}
`
const BurgerNavMenu = styled.div`
position: fixed;
width: 300px;
top: 0;
bottom:0;
right:0;
background-color: #fff;
list-style: none;
overflow-y: scroll;
padding: 20px;
transform: ${ props => props.dekha ? 'translateX(0)' : 'translateX(100%)'};
transistion: transform 0.2s ease-in;
li{
  padding: 15px 0;
  border-bottom: 1px solid #aaa;
}
`

const CustomClose = styled(CloseIcon)`
float: right;
cursor: pointer;
`