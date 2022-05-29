import React from 'react';
import styles from './Project.module.scss';
import ProjectsProps from "../../../props/projectsProps";
import { RouteComponentProps, useLocation } from "react-router-dom";

let _pProps: ProjectsProps;

interface ProjectProps {
  projects?: typeof _pProps[];
  id?: number;
  title?: string;
}

interface LocationState {
  project: {
    body: string;
    date: string;
    id: number;
    img: string;
    title: string;
    vocation: string;
  }
}

const Project: React.FC<ProjectProps> = () => {
  
  const imgUrl: string = '/images/';

  const location = useLocation<LocationState>();
  const from = location.state.project || { from: { pathname: "/projects" } };

  return (
    <div className={styles.Project}>
      <div>
        <img src={ (imgUrl + from.img) } />
      </div>
      <p>{from.id}</p>
    </div>
  )
};

export default Project;
