import React from 'react'
import styled from 'styled-components';
import AstroBearLogoInverse from './AstroBearLogoInverse.png'


export default function AboutMe() {

    const SubjectHeader = styled.h1`
    text-align: center;
    padding: 50px; 
    color: black; 
    margin-top: 25px;
    
  `;
    return (
        <div>
            <SubjectHeader>- ABOUT ME - </SubjectHeader>
                <img src={AstroBearLogoInverse} className="AboutMeImg" alt="me" />
                <p className="AboutMe">I am a Full Stack Web Developer with a certificate of completion from the UC San Diego Bootcamp Extension Course.  I specialize in the creation of dynamic websites that emphasize ease of use and timely responsiveness</p>
        </div>
    )
}
