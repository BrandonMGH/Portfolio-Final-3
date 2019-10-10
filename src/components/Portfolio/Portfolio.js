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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    place-items:center; 
    margin-bottom: 10em; 

  `


    const PortfolioTile = styled.section`
    border: 3px solid black;  
    display:flex; 
    justify-content: center; 
    align-items: center; 
    opacity: .7;
    :hover {
        opacity: 1;
        cursor: pointer;
      }
   `
    const TileJavascript = styled(PortfolioTile)`
    border: 5px solid orange; 
    color: orange
 
   `
    const TileNode = styled(PortfolioTile)`
   border: 5px solid green; 
    color: green
   `
    const TileReact = styled(PortfolioTile)`
   border: 5px solid blue; 
    color: blue
   `
    const TileAll = styled(PortfolioTile)`
   border: 5px solid red; 
    color: red
   `
    const TileText = styled.h4`
    color: ${props => props.color ? props.color : "black"};
    padding: 1em 1em 1em 1em 
  }
   
   `

    return (
        <>
            <PortfolioTitle>-PORTFOLIO-</PortfolioTitle>
            <PortfolioWrapper>
                <TileJavascript onClick={() => setSection(<JavascriptSect/>)}>
                    <TileText color="orange">JAVASCRIPT PROJECTS</TileText>
                </TileJavascript >
                <TileNode onClick={() => setSection(<NodeSect/>)}>
                    <TileText color="green">NODE PROJECTS</TileText>
                </TileNode>
                <TileReact onClick={() => setSection(<ReactSect/>)}>
                    <TileText color="blue">REACT PROJECTS</TileText>
                </TileReact>
                <TileAll onClick={() => setSection(<AllSect/>)}>
                    <TileText color="red"> TOP PROJECTS</TileText>
                </TileAll>
            </PortfolioWrapper>
            <div>
                {section}
            </div>
        </>
    )
}
