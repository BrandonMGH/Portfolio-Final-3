import React from 'react'
import styled from 'styled-components'
import ContactMeObject from './ContactMeObject.js'
import ContactMeFormBackground from './Images/ContactMeFormBackground.jpg'




export default function ContactMe() {

    const ContactWrapper = styled.section`
    height: 1000px;
    background-image: url(${ContactMeFormBackground});
    background-size: cover;
    background-position: center;
    `

    const ContactSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
    place-items: center; 
     
    `


    const TextWrapper = styled.h1`
    padding-top: 200px; 
    padding-bottom: 50px;  
    display: grid; 
    place-items: center; 
    `
    const imgSize = {
        height: '250px',
        width: '250px'
      };

    return (
        <ContactWrapper>
        <TextWrapper>-CONTACT ME- </TextWrapper>
        <ContactSection>
            {ContactMeObject.Arr.map(properties => (
                <a href={properties.link}>
                        <img style={imgSize} src={properties.image}></img>
                </a>
            ))}
        </ContactSection>
        </ContactWrapper>
    )
}
