import React from 'react'
import styled from 'styled-components'
import ContactMeObject from './ContactMeObject.js'
export default function ContactMe() {

    const ContactWrapper = styled.section`
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
    place-items: center; 
    `


    const IconWrapper = styled.section`
   object-fit:cover 
    `

    return (
        <ContactWrapper>
            {ContactMeObject.Arr.map(properties => (
                <a href={properties.link}>
                    <IconWrapper>
                        <img src={properties.image}></img>
                    </IconWrapper>
                </a>
            ))}
        </ContactWrapper>
    )
}
