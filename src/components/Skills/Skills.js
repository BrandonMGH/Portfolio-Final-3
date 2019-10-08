
import React from 'react';
import styled from 'styled-components'
import skillsObject from './skillsobject'

export default function Skills() {

    const SkillsTitle = styled.h1`
    text-align:center; 
    `
    const SkillsObjContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
    place-items:center; 
 
     
    `
    const SkillsObjectElement = styled.section`
    display: inline; 
    `


    return (
        <div>
            <SkillsTitle> -SKILLS- </SkillsTitle>
            <SkillsObjContainer>
            {skillsObject.map(properties => (
              <img key={properties.key} src={properties.image} />
            ))}
           </SkillsObjContainer>

        </div>
    )
}
