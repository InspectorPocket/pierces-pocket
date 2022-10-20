import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProject } from '../../../api/projects';


import projectStyles from '../../../pages/Projects/Projects.module.scss'
// import styles from './Project.module.scss';
import '../../../sass/_layout/_mg_pd.scss';
import colours from "../../../sass/_foundation/_colours.module.scss";

import ProjectIntro from '../ProjectIntro/ProjectIntro';
import Circle from '../../Circles/Circle/Circle';
import NextProject from '../../Content/NextProject/NextProject';
import LineText from '../../Content/LineText/LineText';
import Image from '../../Content/Image/Image';
import CardText from '../../Content/CardText/CardText';

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
  let brand: any = {
    ai: true,
    xd: true,
    react: true,
    graphic: false
  }

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
    if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth' });
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
    <div ref={topRef} className={projectStyles.project__wrapper}>

      <ProjectIntro imgUrl={projectId! + '/'} title={project!.title} vocation={project!.description} brand={brand} />

      <div className={projectStyles.project}>
        {/* Content */}
        { project && project.resources.map((resource) => (
          <div className={resource.class}>
            <h3 className={resource.titleClass}>{resource.name}</h3>
            {/* TODO replace these with specific classes so it can be made responsive */}
            <Circle
              colour={resource.circle?.colour}
              opacity={resource.circle?.opacity}
              width={resource.circle?.width}
              height={resource.circle?.height}
              transform={resource.circle?.transform}
              top={resource.circle?.top}
            />
            { resource.content?.map((section) => {
              if (section.component === 'lineText') {
                return <LineText spacing={section.spacing} font={section.font} content={section.content} />
              }
              if (section.component === 'cardText') {
                return <CardText spacing={section.spacing} content={section.content || ''} colour={section.colour} />
              }
              if (section.component === 'image') {
                if (!section.src2) {
                  return <Image src={`${projectId}/${section.src}`} alt={section.alt!} margin={section.margin} />
                }
                if (section.src2) {
                  return <Image src={`${projectId}/${section.src}`} src2={`${projectId}/${section.src2}`} alt={section.alt!} alt2={section.alt2!} margin={section.margin} />
                }
              }
              if (section.component === 'paragraph') {
                // TODO Add ability to add inline links
                return <p className={section.margin} dangerouslySetInnerHTML={{__html: section.content!
                    .split('\n').join('<br>') || ''}}
                  ></p>
              }
            })}
          </div>
        ))}

        {/* Outro */}
        <div className={`${projectStyles.project__outro} pd-t-40 pd-b-32 z-1`}>
          <Circle
            colour={colours.grey1}
            transform={'translateX(-50%)'}
            width={'200vw'}
            height={'150%'}
          />
          <p id='project_outro' />
        </div>

        {/* Next Project */}
        <div className={`${projectStyles.project__nextProject}`}>
          <NextProject project={project} projects={projects} setNextProject={setNextProject} />

          {/* Pagination */}
          <div className={`${projectStyles.project__pagination}`}>
            <h6 className={`${projectStyles.project__pagination__number}`}>{project!.index + 1}</h6>
            <span className={`${projectStyles.project__pagination__bar}`}>
              <span style={{width: `${progressBar}%`}} />
            </span>
            <h6 className={`${projectStyles.project__pagination__number}`}>{projects!.length}</h6>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Project;
