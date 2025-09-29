'use client';
import Image from 'next/image';
import styles from './experience.module.scss';
import { useState } from 'react';
import SkillTag from '../components/SkillTag';
import { Job, JOBS } from '../constants';

export default function Experience() {
  function ExpandableExperienceCard({ job }: { job: Job }) {
    const [expanded, setExpanded] = useState(false);

    return (
      <div
        className={`${styles.experienceCard} ${
          expanded ? styles.expanded : ''
        }`}
        onClick={() => setExpanded((prev) => !prev)}
        style={{ cursor: 'pointer' }}
      >
        <h3>
          {job.startDate} – {job.endDate}
        </h3>
        <div className={styles.experienceHeader}>
          <h3>
            {job.role} • {job.company}
          </h3>
          <div
            className={styles.experienceDetails}
            style={{
              maxHeight: expanded ? 300 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: expanded ? 1 : 0,
              transitionProperty: 'max-height, opacity',
            }}
          >
            <ul>
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            <div className={styles.skillTags}>
              {job.skills.map((skill) => (
                <SkillTag key={skill} name={skill} type="primary" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <main className={styles.main}>
          <h2>Professional Experience</h2>
          {JOBS.map((job, index) => (
            <ExpandableExperienceCard key={index} job={job} />
          ))}
        </main>
      </div>
    </div>
  );
}
