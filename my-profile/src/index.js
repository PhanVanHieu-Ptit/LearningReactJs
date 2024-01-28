import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App(){
  const skills = [
    { skill:'HTML+CSS',
      level:'advanced',
      color:'#2662EA'
    },
    { skill:'JavaScript',
      level:'advanced',
      color:'#EFD81D'
    },
    { skill:'Web design',
      level:'beginner',
      color:'#C3DCAF'
    },
    { skill:'Git and GitHub',
      level:'intermediate',
      color:'#E84F33'
    },
    { skill:'React',
      level:'advanced',
      color:'#60DAF8'
    },
   
  ];
  return (
    <div className="card">
    <Avatar/>
    <div className="data">
    <Intro/>
    <SkillList skills={skills}/>
    </div>
    </div>
  )
}

function Avatar(){
  return <img className='avatar' src='avatar.avif' alt='Hieu Phan'/>
}

function Intro(){
  return <div className='step'>
    <h1>Hieu Phan</h1>
    <p>Frontend developer with one year experience</p>
  </div>
}

function SkillList({skills}){
  return <div className='skill-list'>
    {skills.map(skill=>(
      <Skill skill={skill.skill}
      color={skill.color}
      level={skill.level}/>
    ))}
  </div>
}

function Skill({skill, color, level}){
  return <div className='skill' style={{backgroundColor:color}}>
  <span>{skill }</span>
  <span>
    {level==='beginner'&&"⚛️"}
    {level==='intermediate'&&"💼"}
    {level==='advanced'&&"🤑"}
  </span>
  </div>
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

