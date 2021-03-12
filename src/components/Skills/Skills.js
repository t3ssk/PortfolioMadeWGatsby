import React from 'react'
import * as components from 'react-icons/fa'
import { useStaticQuery, graphql } from "gatsby"
import * as styles from './Skills.module.scss'
import {Heading} from '../UI/Heading/Heading'

const getData = graphql`
  {
    allStrapiSkills {
      nodes {
        SkillDescription
        SkillIcon
        SkillName
        id
      }
    }
  }
`

export const Skills = () => {
    const data =useStaticQuery(getData)
    const skills = data.allStrapiSkills.nodes.sort((a, b)=>a.id - b.id)
    const skillsMap = skills.map(item=>{
        const SpecificSkill = components[item.SkillIcon]
        return (
          <div key={item.id} className={styles.Skill}>
            <div className={styles.Icon}><SpecificSkill/></div>
            <h4>{item.SkillName}</h4>
            <p>{item.SkillDescription}</p>
          </div>
        )})
    return (
      <section
        id="schopnosti"
        className={styles.Skills__container}
      >
        <Heading>02 Schopnosti</Heading>
        <div className={styles.Skills__list}>{skillsMap}</div>
      </section>
    )
}
