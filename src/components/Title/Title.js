import React from 'react'
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import codingbackground from "./Images/codingbackground.jpg"

export default function Title() {

    const Wrapper = styled.h1`
    padding-top: 10em;
    padding-bottom: 10em;
    background-image: url(${codingbackground});
    background-size: cover;
    background-position: center;
    
  `;

  const Title = styled.h1`
  text-align: center;
  color: white; 
  @media (min-width: 700px) {
    text-align: center;
    padding-left: .5em; 
    padding-right: .5em; 
}
@media (min-width: 400px) {
  text-align: center;
  padding-left: .5em; 
  padding-right: .5em; 
}

  `

  const TitleSub = styled.h2`
  text-align: center;
  color: white; 
  @media (min-width: 700px) {
    text-align: center;
    padding-left: .5em; 
    padding-right: .5em; 
}
@media (min-width: 300px) {
  text-align: center;
  padding-left: .5em; 
  padding-right: .5em; 
}
  
  `
    return (
    
    <Wrapper>
        <Bounce Top><Title>Brandon Harris</Title></Bounce>
        
        <Bounce Bottom><TitleSub>Full Stack Web Developer</TitleSub></Bounce>
       
      </Wrapper>
      
        
    )
}
