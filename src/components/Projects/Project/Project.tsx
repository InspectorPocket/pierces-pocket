import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProject } from '../../../api/projects';

import styles from './Project.module.scss';

interface ProjectProps {
  setCurrentProjectId: any;
}

const Project: React.FC<ProjectProps> = ({setCurrentProjectId}) => {

  const { projectId } = useParams();
  const project = getProject(projectId);

  useEffect(() => {
    setCurrentProjectId(project!.index);
  }, [JSON.stringify(project!.index)]);

  return (
    <div className={styles.Project}>
      <h2>{project!.title}</h2>
      <p>{project!.description}</p>
    </div>
  )
};

export default Project;
