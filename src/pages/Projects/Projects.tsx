import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './Projects.module.scss';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import Project from "../../components/Projects/Project/Project";
import useFetch from "../../hooks/useFetch";
import ProjectsProps from "../../props/projectsProps";
import Intro from '../../components/Intro/Intro';
// import Icon from "../../components/Icon/Icon";

const Projects: React.FC<ProjectsProps> = () => {
  const { error, isPending, data: projects } = useFetch('http://localhost:8020/projects');

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
      { projects && <Intro page="projects" /> }
      { projects &&
        <ProjectOverview projects={projects} />
      }

      {/* { projects && 
        <a href="#">
          <p className="mg-t-16 mg-b-16">back to top</p>
        </a>
      } */}

      {/* Project */}
      {/* { projects && !projectActive && <Project projects={projects} id={0} /> } */}

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
    </div>
  );
};

export default Projects;
