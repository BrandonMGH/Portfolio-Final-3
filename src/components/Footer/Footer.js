import React from 'react'
import styled from 'styled-components'

export default function Footer() {

    const FooterWraper = styled.section`
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: #320d6d;
    `
    const FooterText = styled.h6`
    color: white; 
    padding: 50px; 
    `
   
    return (
        <FooterWraper>
             <FooterText>Brandon Harris @ 2019</FooterText>
        </FooterWraper>
    )
}
