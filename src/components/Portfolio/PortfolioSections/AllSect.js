import React from 'react'
import styled from 'styled-components';
import sectionObject from './SectionObject/SectionObject.js';

//** Images **//

export default function AllSect() {

    const PortfolioTileWrapper = styled.section`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 1rem;
    place-items: center; 
    text-align: center; 
    `


    return (
        <PortfolioTileWrapper>
            {sectionObject.All.map(properties => (
                <span key={properties.keyValue}>
                    <h3 >{properties.projectTitle}</h3>
                    <p>{properties.projectDescription}</p>
                    <p><b>Project Type:</b> {properties.projectType}</p>
                    <p><b>My Responsibility:</b></p>

                </span>

            ))}
        </PortfolioTileWrapper>
    )
}
