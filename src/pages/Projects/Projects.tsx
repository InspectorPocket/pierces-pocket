import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Projects.module.scss';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import Project from "../../components/Projects/Project/Project";
import useFetch from "../../hooks/useFetch";
import ProjectsProps from "../../props/projectsProps";
import Intro from '../../components/Intro/Intro';

const Projects: React.FC<ProjectsProps> = () => {
  const { error, isPending, data: projects } = useFetch('http://localhost:8000/projects');

  const urlId = useParams();
  const [projectActive, setProjectActive] = useState(false);

  // console.log(urlId);

  // console.log('Before: ');
  // console.log(projectActive);
  // if (urlId != null) {
  //   setProjectActive(!projectActive);
  // }
  // console.log('After: ');
  // console.log(projectActive);
  
  // if router has an id
  //    post id through

  return (
    <div className={styles.projects}>

      {/* Projects */}
      { projects && <Intro page="projects" scrollable={true} /> }
      { projects &&
        <div className={styles.projectsPreview}>
          <ProjectOverview projects={projects} />
        </div>
      }
      { projects && 
        <a href="#">
          <p className="mg-t-16 mg-b-16">back to top</p>
        </a>
      }

      {/* Project */}
      {/* { projects && !projectActive && <Project projects={projects} id={0} /> } */}

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
    </div>
  );
};

export default Projects;
