import React from 'react'
import styled from 'styled-components';
import sectionObject from './SectionObject/SectionObject.js';

//** Images **//

export default function AllSect() {

    const PortfolioTileWrapper = styled.section`
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2rem;
    place-items: center; 
    padding-bottom: 50px; 
    `
    const PortfolioTileElement = styled.section`
    border-radius: 50px;
    transition: 0.3s;
    :hover {
        box-shadow: 15px 15px 15px 15px rgba(0,0,0,0.2);
      }
    padding: 2em 2em 2em 2em;

    `

    const PortfolioTileImage = styled.section`
    background-image: url(${props => props.imageInput});
    background-size: cover;
    background-position: center;
    height: 250px; 
    display:flex;
    place-items: center; 
    margin-top: 1em;  
    border: 3px solid black;
    margin-bottom: 20px; 
    `
    return (
        <PortfolioTileWrapper>
            {sectionObject.All.map(properties => (
                <PortfolioTileElement key={properties.keyValue}>
                    <PortfolioTileImage imageInput={properties.projectImg} ></PortfolioTileImage>
                    <h3>{properties.projectTitle}</h3>
                    <p>{properties.projectDescription}</p>
                    <p><b>Project Type:</b> {properties.projectType}</p>
                    <p><b>My Responsibility:</b>{properties.projectResponsibility}</p>
                    <button>Project Link</button>
                    <button>GitHub Link</button>
                </PortfolioTileElement>
            ))}
        </PortfolioTileWrapper>
    
    )
}
