import React, { useState } from 'react';
import styled from 'styled-components';

//**COMPONENTS **//
import JavascriptSect from './PortfolioSections/JavascriptSect.js'
import NodeSect from './PortfolioSections/NodeSect.js'
import ReactSect from './PortfolioSections/ReactSect.js'
import AllSect from './PortfolioSections/AllSect.js'

export default function Portfolio() {

    //** STATE MANAGEMENT **//

    const [section, setSection] = useState(<AllSect />);


    //** STYLED COMPONENTS **//

    const PortfolioTitle = styled.h1`
    text-align:center; 
    padding: 2.5em 2.5em 2.5em 2.5em; 
    `

    const PortfolioWrapper = styled.section`
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-gap: 1rem;
    place-items:center; 
    margin-bottom: 10em; 

  `


    const PortfolioTile = styled.section`
    border: 5px solid black;  
    display:flex; 
    justify-content: center; 
    align-items: center; 
    opacity: .7;
    transition:  transform 2s;
    width: 350px
   `
    const TileJavascript = styled(PortfolioTile)`
    :hover {
        border: 5px solid orange; 
        color: orange
        cursor: pointer; 
        transform: rotate(360deg);
      }
   `
    const TileNode = styled(PortfolioTile)`
    :hover {
        border: 5px solid green; 
        color: green
        cursor: pointer; 
        transform: rotate(360deg);
      }
   `
    const TileReact = styled(PortfolioTile)`
    :hover {
        border: 5px solid blue; 
        color: blue
        cursor: pointer; 
        transform: rotate(360deg);
      }
   `
    const TileAll = styled(PortfolioTile)`
    :hover {
        border: 5px solid red; 
        color: red
        cursor: pointer; 
        transform: rotate(360deg);
      }
   `
    const TileText = styled.h4`
    padding: 1em 1em 1em 1em 
  }
   
   `

    return (
            <span>
            <PortfolioTitle>-PORTFOLIO-</PortfolioTitle>
            <PortfolioWrapper>
                <TileJavascript onClick={() => setSection(<JavascriptSect/>)}>
                    <TileText>JAVASCRIPT PROJECTS</TileText>
                </TileJavascript >
                <TileNode onClick={() => setSection(<NodeSect/>)}>
                    <TileText>NODE PROJECTS</TileText>
                </TileNode>
                <TileReact onClick={() => setSection(<ReactSect/>)}>
                    <TileText>REACT PROJECTS</TileText>
                </TileReact>
                <TileAll onClick={() => setSection(<AllSect/>)}>
                    <TileText> TOP PROJECTS</TileText>
                </TileAll>
            </PortfolioWrapper>
            <div>
                {section}
            </div>
            </span>
    )
}
