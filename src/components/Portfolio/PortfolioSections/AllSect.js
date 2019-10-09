import React from 'react'
import sectionObject from './SectionObject/SectionObject.js';

export default function AllSect() {
    console.log(sectionObject.All)
    return (
        <div>
            {sectionObject.All.map(properties => (
              <span key={properties.keyValue}>
                  <h1 >{properties.projectTitle}</h1>
              </span>
              
            ))}
        </div>
    )
}
