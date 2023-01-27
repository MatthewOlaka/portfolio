import React from 'react'
import { ProjectsContainer, H2, H2Span, Padding, Span } from './ProjectsElements';


const Projects = ({ id, number, title }) => {

    return (

        <ProjectsContainer id={id}>
            <Padding>
                {/* eslint-disable-next-line */}
                <H2><Span>{number} /</Span> {title}<H2Span></H2Span></H2>
            </Padding>
        </ProjectsContainer>
    )
}

export default Projects