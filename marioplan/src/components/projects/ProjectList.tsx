import React, { FC } from 'react'
import {ProjectSummary} from './ProjectSummary'

export const ProjectList: FC = () => {
  return (
    <div className="project-list section">  
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  )
}
