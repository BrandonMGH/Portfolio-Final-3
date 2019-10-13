import React from 'react';
import styled from 'styled-components'
import ContactMeObject from './ContactMeObject.js'
import ContactMeFormBackground from './Images/ContactMeFormBackground.jpg'




export default function ContactMe() {



    const ContactWrapper = styled.section`
    background-image: url(${ContactMeFormBackground});
    background-size: cover;
    background-position: center;
    padding-top: 200px;
    padding-bottom: 200px; 
    text-align: center; 
    `

    const ContactSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
    place-items: center; 
     
    `

    const TextWrapper = styled.h1`
    padding-bottom: 50px;  
    display: grid; 
    place-items: center; 
    color: white; 
    `
    const LinkText = styled.h3`
    padding-bottom: 50px;  
    display: grid; 
    place-items: center; 
    color: white; 
    :hover {
        
        color: blue
        cursor: pointer; 
      }
    `

    const imgSize = {
        height: '300px',
        width: '300px'
    };


    return (

        <ContactWrapper>
            <TextWrapper>-CONTACT ME- </TextWrapper>
            <ContactSection>
                {ContactMeObject.Arr.map(properties => (
                    <a key={properties.key} href={properties.link}>
                        <img style={imgSize} src={properties.image}></img>
                        <LinkText>{properties.text}</LinkText>
                    </a>
                ))}
                
            </ContactSection>
        </ContactWrapper>
    )
}
