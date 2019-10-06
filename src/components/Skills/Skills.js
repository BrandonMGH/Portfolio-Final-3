
import React from 'react';
import styled from 'styled-components'
import skillsObject from './skillsobject'

export default function Skills() {

    const SkillsTitle = styled.h1`
    text-align:center; 
    `


    return (
        <div>
            <SkillsTitle> -SKILLS- </SkillsTitle>
            {skillsObject.map(properties => (
                <img key={properties.key} src={properties.image} />
                
            ))}
     

        </div>
    )
}
