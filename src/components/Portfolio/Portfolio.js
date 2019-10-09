import React from 'react'
import styled from 'styled-components';

export default function Portfolio() {

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
            <TileJavascript>
                test
            </TileJavascript>
            <TileNode>
                test
            </TileNode>
            <TileReact>
                test
            </TileReact>
            <TileAll>
                test
            </TileAll>
        </PortfolioWrapper>
        </>
    )
}
