import React from 'react';
import styles from './SkillTag.module.scss';

interface Props {
  name: string;
  type: 'primary' | 'secondary';
}
function SkillTag({ name, type }: Props) {
  return <div className={`${styles.skillTag} ${styles[type]}`}>{name}</div>;
}

export default SkillTag;
