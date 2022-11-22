import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProject } from '../../../api/projects';


// import styles from '../../../pages/Projects/Projects.module.scss'
import styles from './Project.module.scss';
import '../../../sass/_layout/_mg_pd.scss';
import colours from "../../../sass/_foundation/_colours.module.scss";
import panelWidth from '../../../sass/_foundation/_panelWidth.module.scss';

import ProjectIntro from '../ProjectIntro/ProjectIntro';
import Circle from '../../Circles/Circle/Circle';
import NextProject from '../../Content/NextProject/NextProject';
import LineText from '../../Content/LineText/LineText';
import Image from '../../Content/Image/Image';
import CardText from '../../Content/CardText/CardText';
import Video from '../../Content/Video/Video';

interface ProjectProps {
  setCurrentProjectId: any;
  setNextProject: Function;
  projects: any;
}

const Project: React.FC<ProjectProps> = ({setCurrentProjectId, projects, setNextProject}) => {

  // Main Variables
  const { projectId } = useParams();
  const project = getProject(projectId || '');
  const imgUrl: string = `${projectId}/`;

  // Outro Component
  const outro = document.getElementById('project_outro');
  if (outro) outro.innerHTML = project?.outro.split('\n').join('<br>') || '';

  // Progress Bar
  let [progressBar, setprogressBar] = useState(0);
  function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  } 
  const calculatePagination = () => {
    setprogressBar(percentage(Number(project?.index) + 1, projects!.length));
  }

  // Scroll to Top
  const {ref: topRef} = ScrollToTop<HTMLDivElement>()
  function ScrollToTop<T extends HTMLElement>() {
    const topRef = useRef<T>(null)
    // if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth' });
    return {ref: topRef}
  }

  // Use Effects
  useEffect(() => {
    setCurrentProjectId(project!.index);
  }, [JSON.stringify(project!.index)]);

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      calculatePagination();
    }
    cleanup = false;
  }, [project]);

  return (
    <div ref={topRef} className={styles.project__wrapper}>

      <ProjectIntro imgUrl={projectId! + '/'} title={project!.title} vocation={project!.description} software={project!.software} colour={project!.colour} />

      <div className={styles.project}>
        {/* Content */}
        { project && project.resources.map((resource) => (
          <div className={`${styles.project__section} ${resource.class}`}>
            <h3 className={resource.titleClass}>{resource.name}</h3>
            { resource.content?.map((section) => {
              if (section.component === 'lineText') {
                return <LineText font={section.font} content={section.content} />
              }
              if (section.component === 'cardText') {
                return <CardText content={section.content || ''} colour={section.colour} />
              }
              if (section.component === 'image') {
                if (!section.src2) {
                  return <Image src={`${projectId}/${section.src}`} alt={section.alt!} margin={section.margin} />
                }
                if (section.src2) {
                  return <Image src={`${projectId}/${section.src}`} src2={`${projectId}/${section.src2}`} alt={section.alt!} alt2={section.alt2!} margin={section.margin} />
                }
              }
              if (section.component === 'video') {
                return <Video type={section.videoType} src={section.src} title={section.title} />
              }
              if (section.component === 'paragraph' && !section.link) {
                return <p className={section.margin} dangerouslySetInnerHTML={{__html: section.content!
                    .split('\n').join('<br>') || ''}}
                  ></p>
              }
              if (section.component === 'paragraph' && section.link) {
                return <p className={section.margin} dangerouslySetInnerHTML={{__html: section.content!
                    .split('<a/>').join(`<a href="${section.link.url}" style="background-image: linear-gradient(to right, ${project.colour} 0%, ${project.colour} 100%); background-image: linear-gradient(to right, ${project.colour}8c 0%, ${project.colour}8c 100%);" target="_blank" >${section.link.content}<a/>`) || ''}}
                  ></p>
              }
            })}
          </div>
        ))}

        {/* Outro */}
        <div className={`${styles.project__outro} z-1`}>
          <p id='project_outro' />
        </div>

        {/* Next Project */}
        <div className={`${styles.project__nextProject}`}>
          <NextProject project={project} projects={projects} setNextProject={setNextProject} />

          {/* Pagination */}
          <div className={`${styles.project__pagination} ${panelWidth.panelHeight}`}>
            <h6 className={`${styles.project__pagination__number}`}>{project!.index + 1}</h6>
            <span className={`${styles.project__pagination__bar}`}>
              <span style={{width: `${progressBar}%`}} />
            </span>
            <h6 className={`${styles.project__pagination__number}`}>{projects!.length}</h6>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Project;
