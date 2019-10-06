import React from 'react'
import styled from 'styled-components';
import AstroBearLogoInverse from './AstroBearLogoInverse.png'


export default function AboutMe() {

    const AboutMeWrapper = styled.wrapper`
    justify-content: center; 
    `

    const AboutMeHeader = styled.h1`
    text-align: center;
    padding: 50px; 
    color: black; 
    margin-top: 25px;
    
  `;

    const AboutMeParagraph = styled.p`
  text-align: center;
  padding: 50px; 
  color: black; 
  margin-top: 25px;
  `

    const AboutMeInfo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  height: 250px;
  width: 250px; `

    return (
        <AboutMeWrapper>
            <AboutMeHeader>- ABOUT ME - </AboutMeHeader>
            <AboutMeInfo src={AstroBearLogoInverse} />
            <AboutMeParagraph>I am a Full Stack Web Developer with a certificate of completion from the UC San Diego Bootcamp Extension Course.  I specialize in the creation of dynamic websites that emphasize ease of use and timely responsiveness</AboutMeParagraph>
        </AboutMeWrapper>
    )
}
