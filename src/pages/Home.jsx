import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/Github';
import "../styles/Home.css";

export default function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hola! My Name is Melany Gomez </h2>
        <div className='prompt'>
          <p>A learning enthusiast, with passion for learning about data, health, coding, and the brain.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, TailwindCSS, StyledComponents.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Laravel.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, RStudio, and English and Spanish XD</span>
          </li>
        </ol>

      </div>
    </div>
  );
}
