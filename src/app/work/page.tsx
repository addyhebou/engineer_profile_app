'use client';
import Image from 'next/image';
import styles from './work.module.scss';
import { Job, JOBS, PORTFOLIO_PROJECTS, PortfolioProject } from '../constants';
import SkillTag from '../components/SkillTag';
import { useState } from 'react';
import RedPortfolioCover from '../../../public/portfolio_project_photos/red_cover.svg';
import BluePortfolioCover from '../../../public/portfolio_project_photos/blue_cover.svg';
import OceanPortfolioCover from '../../../public/portfolio_project_photos/ocean_cover.svg';
import Link from 'next/link';

export default function Work() {
  function ProjectCard({ project }: { project: PortfolioProject }) {
    const PortfolioCover =
      project.cover === 'red'
        ? RedPortfolioCover
        : project.cover === 'blue'
        ? BluePortfolioCover
        : OceanPortfolioCover;
    return (
      <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <div className={styles.projectCard}>
          <Image
            src={PortfolioCover}
            alt={project.name}
            width={350}
            height={350}
          />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className={styles.skills}>
            {project.skills.map((skill, index) => (
              <SkillTag key={index} name={skill} type="secondary" />
            ))}
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <main className={styles.main}>
          <h2>Work Projects</h2>
          <div className={styles.projectsGrid}>
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
