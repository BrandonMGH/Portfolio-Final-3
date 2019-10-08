
import React from 'react';
import styled from 'styled-components'
import skillsObject from './skillsobject'

export default function Skills() {

    const SkillsTitle = styled.h1`
    text-align:center; 
    `
    const SkillsObjContainer = styled.section`
    display: grid; 
    justify-content: center; 
 
     
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
