import React from "react";
import Image from "next/image";
import styles from "../../styles/landingpage/Skills.module.css";
import SkillsItem from "./SkillsItem";

const Skills = ({
  skills_title,
  skills_description,
  tools_title,
  tools_description,
}) => {
  return (
    <div id="skills">
      <div className={styles.skills_content}>
        <div className={styles.col_1}>
          <div className={styles.skill_detail}>
            <div>
              <span>Stacks</span>
            </div>
            <h2>{skills_title}</h2>
            <p>{skills_description}</p>
            <div className={styles.skill_list}>
              <ul>
                <SkillsItem
                  alt="html"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg"
                />
                <SkillsItem
                  alt="css3"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg"
                />
                <SkillsItem
                  alt="javascript"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
                />
                <SkillsItem
                  alt="reactjs"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg"
                />
                <SkillsItem
                  alt="nodejs"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg"
                />
                <SkillsItem
                  alt="expressjs"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original-wordmark.svg"
                />
                <SkillsItem
                  alt="monggodb"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original-wordmark.svg"
                />
                <SkillsItem
                  alt="redux"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg"
                />
                <SkillsItem
                  alt="nextjs"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nextjs/nextjs-original-wordmark.svg"
                />
                <SkillsItem
                  alt="PHP"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/php/php-original.svg"
                />
                <SkillsItem
                  alt="Wordpress"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/wordpress/wordpress-plain-wordmark.svg"
                />
                <SkillsItem
                  alt="Bootstrap"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original-wordmark.svg"
                />
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.col_2}>
          <div className={styles.skills_img}>
            <Image
              src="/uploads/undraw_slider.svg"
              alt="html"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
      <div className={styles.tools_content}>
        <div className={styles.col_1}>
          <div className={styles.tools_detail}>
            <div>
              <span>{tools_title}</span>
            </div>
            <p>{tools_description}</p>
            <div className={styles.tools_list}>
              <ul>
                <SkillsItem
                  alt="VS Code"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original-wordmark.svg"
                />
                <SkillsItem
                  alt="Git"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original-wordmark.svg"
                />
                <SkillsItem
                  alt="Postman"
                  src="https://media.slid.es/uploads/327261/images/5065937/pm-logo-vert.png"
                />
                <SkillsItem
                  alt="Figma"
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.col_2}>
          <div className={styles.tools_img}>
            <Image
              src="/uploads/undraw_software_engineer_re_tnjc.svg"
              alt="html"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
