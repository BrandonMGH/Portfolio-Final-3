import React from 'react'
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import codingbackground from "./Images/codingbackground.jpg"

export default function Title() {

    const Wrapper = styled.h1`
    padding: 10em;
    background-image: url(${codingbackground});
    background-size: cover;
    background-position: center;
    
  `;

  const Title = styled.h1`
  text-align: center;
  color: white; 
 
  
  `

  const TitleSub = styled.h2`
  text-align: center;
  color: white; 
  
  `
    return (
    
    <Wrapper>
        {/* <Bounce Top><img src={AstroBearLogo} className=" AstroBearLogo"></img></Bounce> */}
        <Bounce Top><Title>Brandon Harris</Title></Bounce>
        
        <Bounce Bottom><TitleSub>Full Stack Web Developer</TitleSub></Bounce>
       
      </Wrapper>
      
        
    )
}
