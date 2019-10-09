import React, { useState } from 'react';
import styled from 'styled-components';

//**COMPONENTS **//
import AllSect from './PortfolioSections/AllSect.js'
import JavascriptSect from './PortfolioSections/JavascriptSect.js'
import NodeSect from './PortfolioSections/NodeSect.js'
import ReactSect from './PortfolioSections/ReactSect.js'

export default function Portfolio() {

    const [section, setSection] = useState(<AllSect />);

    const SkillsTitle = styled.h1`
    text-align:center; 
    `

    const PortfolioWrapper = styled.section`
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    place-items:center; 
  `


   const PortfolioTile = styled.section`
    border: 3px solid black; 
    width:100px; 
    height: 100px; 
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
   background-color: orange; 
 
   `
   const TileNode = styled(PortfolioTile)`
   background-color: Green;
   `
   const TileReact = styled(PortfolioTile)`
   background-color: Blue; 
   `
   const TileAll = styled(PortfolioTile)`
   background-color: Red; 
   `

  
    return (
        <>
        <SkillsTitle>-PORTFOLIO-</SkillsTitle>
        <PortfolioWrapper>
            <TileJavascript onClick={() => setSection(<JavascriptSect />)} >
                Javascript
            </TileJavascript >
            <TileNode onClick={() => setSection(<NodeSect />)}>
                Node
            </TileNode>
            <TileReact onClick={() => setSection(<ReactSect />)}>
                React
            </TileReact>
            <TileAll onClick={() => setSection(<AllSect />)}>
                All
            </TileAll>
        </PortfolioWrapper>
        <div>
            {section}
        </div>
        </>
    )
}
