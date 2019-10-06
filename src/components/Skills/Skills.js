
import React from 'react';
import skillsObject from './skillsobject'

export default function Skills() {

    return (
        <div>
            <h1> Skills </h1>
            <ul>
            {skillsObject.map(properties => (
          <li>{properties.title}</li>
        ))}
          </ul>
        </div>
    )
}
