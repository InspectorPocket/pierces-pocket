import React from 'react';
import styles from './NextProject.module.scss';

interface NextProjectProps {
  projectId?: number;
  projectTitle?: string;
}

const NextProject: React.FC<NextProjectProps> = ({projectId, projectTitle}) => {
  return (
    <div className={styles.NextProject}>
      <h6>Next Project</h6>
      { projectId &&
        // <h4>{projectId + 1}</h4>
        <h4>{projectTitle}</h4>
      }
    </div>
  )
};

export default NextProject;
