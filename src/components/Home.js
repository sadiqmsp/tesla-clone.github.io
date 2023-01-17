import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <>
        <Container>
            <Section title='Model-s' backgroundImg='images/model-s.jpg' description='Order Online for Touchless Delivery' rightBtn='Existing Inventory' leftBtn='Custom Order' />
            <Section title='Model-y' backgroundImg='images/model-y.jpg' description='Order Online for Touchless Delivery' rightBtn='Existing Inventory' leftBtn='Custom Order' />
            <Section title='Model-3' backgroundImg='images/model-3.jpg' description='Order Online for Touchless Delivery' rightBtn='Existing Inventory' leftBtn='Custom Order' />
            <Section title='Model-x' backgroundImg='images/model-x.jpg' description='Order Online for Touchless Delivery' rightBtn='Existing Inventory' leftBtn='Custom Order' />
            <Section title='Low Cost Solar Panels in America' backgroundImg='images/solar-panel.jpg' description='Money Back Guarantee' rightBtn='Existing Inventory' leftBtn='Custom Order' />
            <Section title='Solar Panels for Roof' backgroundImg='images/solar-roof.jpg' description='Solar roof cost less than New Roof plus Solar panels' rightBtn='Existing Inventory' leftBtn='Custom Order' />
            <Section title='Accessories' backgroundImg='images/accessories.jpg' leftBtn='Shop Now' />
        </Container>
    </>
  )
}

export default Home


const Container = styled.div`
width: 100vw;
height: 100vh;
`