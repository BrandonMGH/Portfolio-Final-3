import React from 'react'
import styled from 'styled-components';
import sectionObject from './SectionObject/SectionObject.js';

//** Images **//

export default function AllSect() {

    const PortfolioTileWrapper = styled.section`
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
    place-items: center; 
    text-align: center;  
    `

    const PortfolioTileTitle = styled.h3`
    background-image: url(${props => props.imageInput});
    background-size: cover;
    background-position: center;
    height: 250px; 
    display:flex;
    justify-content: center; 
    align-items: center; 
    margin-top: 1em; 
    color: white; 
    
    `


    return (
        <PortfolioTileWrapper>
            {sectionObject.All.map(properties => (
                <span key={properties.keyValue}>
                    <PortfolioTileTitle imageInput={properties.projectImg} >{properties.projectTitle}</PortfolioTileTitle>
                    <p>{properties.projectDescription}</p>
                    <p><b>Project Type:</b> {properties.projectType}</p>
                    <p><b>My Responsibility:</b>{properties.projectResponsibility}</p>
                    <button>Project Link</button>
                    <button>GitHub Link</button>

                </span>

            ))}
        </PortfolioTileWrapper>
    )
}
