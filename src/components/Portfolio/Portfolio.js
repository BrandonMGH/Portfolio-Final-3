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
    width: 350px
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
   `
    const TileJavascript = styled(PortfolioTile)`
    :hover {
        border: 5px solid orange; 
        color: orange
        cursor: pointer; 
        animation: shake 2s;
        animation-iteration-count: infinite;
      }
   `
    const TileNode = styled(PortfolioTile)`
    :hover {
        border: 5px solid green; 
        color: green
        cursor: pointer; 
        animation: shake 2s;
        animation-iteration-count: infinite;
      }
   `
    const TileReact = styled(PortfolioTile)`
    :hover {
        border: 5px solid blue; 
        color: blue
        cursor: pointer; 
        animation: shake 2s;
        animation-iteration-count: infinite;
      }
   `
    const TileAll = styled(PortfolioTile)`
    :hover {
        border: 5px solid red; 
        color: red
        cursor: pointer; 
        animation: shake 2s;
        animation-iteration-count: infinite;
      }
   `
    const TileText = styled.h4`
    padding: 1em 1em 1em 1em 
    text-align: center;  
  }
   
   `

    return (
            <span>
            <PortfolioTitle>- PORTFOLIO -</PortfolioTitle>
            <PortfolioWrapper>
                <TileJavascript onClick={() => setSection(<JavascriptSect/>)}>
                    <TileText>JS PROJECTS</TileText>
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
