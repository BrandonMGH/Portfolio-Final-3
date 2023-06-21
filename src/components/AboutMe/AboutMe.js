import React from 'react'
import styled from 'styled-components';
import AstroBearLogoInverse from './AstroBearLogoInverse.png'


export default function AboutMe() {


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
            <>
            <AboutMeHeader>- ABOUT ME - </AboutMeHeader>
            <AboutMeInfo src={AstroBearLogoInverse} />
            <AboutMeParagraph>I am a Full Stack Web and Cloud Developer with a background in developing technical solutions in the consumer privacy space, committed to nurturing long lasting relationships and life-long learning. Proficient in the creation of backend microservices and frontend UI/UX applications for use in generating user-friendly experiences. Effective at working with people from different backgrounds in an Agile environment with the intention of achieving a specific goal or objective</AboutMeParagraph>
            </>
    )
}
