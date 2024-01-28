import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App(){
  return (
    <div className="card">
    <Avatar/>
    <div className="data">
    <Intro/>
    <SkillList/>
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

function SkillList(){
  return <div className='skill-list'>
    <Skill skill="Reactjs" emoji="⚛️" color='red'/>
    <Skill skill="HTML+CSS" emoji="⚛️" color='orangered'/>
    <Skill skill="Javascript" emoji="⚛️" color='yellow'/>
    <Skill skill="Typescript" emoji="⚛️" color='orange'/>
  </div>
}

function Skill(props){
  return <div className='skill' style={{backgroundColor:props.color}}>
  <span>{props.skill}</span>
  <span>{props.emoji}</span>
  </div>
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

