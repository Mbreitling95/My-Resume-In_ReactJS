import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//https://stackoverflow.com/story/mbreitling95
/*  Start JSON Models Section */

var bio =   {
  name: "Matthew Breitling",
  role: "Front End Web Developer",
  welcomeMessage: "Welcome to my Bio page, please contact me if you want more information",
  bioPic: "./images/Profile_Pic.jpg",

  skills: ["HTML & HTML5", "CSS & CSS3", 
    "Javascript", "JQuery ", "Knockout JS", "React JS (This site is made with React)"
  ],

  contacts: [
    ["Mobile", "903-588-4139"],
    ["Email", "Mbreitling95@gmail.com"],
    ["Github", "Mbreitling95"],
    ["StackOverflow", "Mbreitling95"],
    ["Location", "Winnsboro TX"]
  ]
};

const JobsModel = [{
    employer: "Breitling Consulting",
    title: "Web Developer",
    position: "Subcontracter",
    location: "Primarily Remote Access",
    dates: "spring of 2014 to summer of 2017",
    description: "Web Development of internal edit forms and the associated HTML CSS JS/JQuery and SQLServer files. "
  }, {
    employer: "Breitling Consulting",
    title: "Front End Web Developer",
    position: "Subcontracter",
    location: "Winnsboro, Texas",
    dates: "03/10/17- 04/15/17",
    description: "Design and Development of the Front-End HTML and CSS for a Vendor Login Page"
}];

var projects = [{ 
    title: "Responsive Login/Signup SPA",
    dates: "Spring 2017",
    description: "Redesign and Development of new Responsive SPA for Clients Vendor Login/Signup site.",
    images: ["./images/Responsive-SPA.png", "./images/Responsive-SPA-Cropped2.png"]  
  } 
  ];



var onlineCourses = [
  {
    title: "Responsive Web Design Fundamentals",
    school: "Udacity",
    dates: "03/14/17-03/20/17",
    url: "https://www.udacity.com/courses/ud893/"
  }, 
  {
    title: "JavaScript Basics",
    school: "Udacity",
    dates: "03/21/17-04/05/17",
    url: "https://www.udacity.com/courses/ud804/"
  },
  {
    title: "Intro to HTML and CSS",
    school: "Udacity",
    dates: "Completed June 2017",
    url: "https://www.udacity.com/courses/ud304/"
  },
  {
    title: "Intro to JQuery",
    school: "Udacity",
    dates: "Completed June 2017",
    url: "https://www.udacity.com/courses/ud245/"
  },
  {
    title: "Intro to JavaScript",
    school: "Udacity",
    dates: "Completed June 2017",
    url: "https://www.udacity.com/courses/ud803/"
  },
  {
    title: "Object-Oriented JavaScript (by Hack Reactor)",
    school: "Udacity",
    dates: "Completed June 2017",
    url: "https://www.udacity.com/courses/ud015/"
  },
  {
    title: "HTML5 Canvas",
    school: "Udacity",
    dates: "Completed June 2017",
    url: "https://www.udacity.com/courses/ud292/"
  },
  {
    title: "ES6 - JavaScript Improved",
    school: "Udacity",
    dates: "Completed July 2017",
    url: "https://www.udacity.com/courses/ud356/"
  },
  {
    title: "JavaScript Design Patterns",
    school: "Udacity",
    dates: "Completed July 2017",
    url: "https://www.udacity.com/courses/ud989/"
  },
];


/*  End JSON Models Section  */


/*  Start Components Section  */


/* Child Components of <HeaderSection> [3]*/

function NameTitle(props) {
  return (
    <span>
      <h1 id="name">{props.name}</h1>
      <h2  className="white-text inline-block">| {props.role}</h2><hr/>
    </span>
  );
}

function TopContacts(props) {
  return (
    <ul id="topContacts" className="flex-box">
      {props.contacts.map(contact => <li className="flex-item">
        <span className="orange-text">{contact[0]} :</span>
        <span className="white-text">{contact[1]}</span></li>)}
    </ul>
  );
}

function Skills(props) {
  return (
    <div>
      <span className="welcome-message">{props.welcomeMessage}</span>
      <img src={props.bioPic} alt="My Face" className="biopic" />
      <h3 id="skills-h3">Skills at a Glance:</h3>
      <ul id="skills" className="flex-column">
        {props.skills.map(skill => <li className="flex-item">
          <span className="white-text">{skill}</span><hr/></li>)}
      </ul>
    </div>
  );
} 
// End

/* Child Component of <WorkSection> [3]*/
function WorkEntry(props) {
  return (
    <div className="work-entry">
      <div>{props.job.title} at 
      <span className="orange-text" >
      {props.job.employer}</span> 
      as a {props.job.position}
      </div>
      
      <div className="date-text">{props.job.dates}</div>
      <div className="location-text">{props.job.location}</div>
      <p><br/>{props.job.description}</p>
    </div>
  );
}
// End

/* Child Component of <ProjectSection> [3]*/
function ProjectEntry(props) {
  return (
    <div className="work-entry">
      <span className="welcome-message orange-text" >{props.project.title}:</span>
      <div>{props.project.description}<span className="location-text">{props.project.dates}</span></div>
      <br/>
      <img src={props.project.images[1]} alt="Screenshot of Project" className="project-img" style={{display: "none"}}/>
    </div>
  );
}
// End

/* Child Component of <CourseSection> [3]*/
function OnlineCourse(props) {
  return (
    <div className="work-entry">
      <div>{props.course.title}: at  <a href={props.course.url} > {props.course.school}</a></div>
      <div className="location-text" >{props.course.dates}</div>
    </div>
  );
}
// End



/* Child Components of <App> [2]*/
class HeaderSection extends Component {
  render() {
    return (
    <div id="header" className="center-content clear-fix">
      <NameTitle  
          name={this.props.bio.name} 
          role={bio.role} />
      <TopContacts 
          contacts={bio.contacts} />
      <Skills 
          skills={this.props.bio.skills} 
          bioPic={this.props.bio.bioPic} 
          welcomeMessage={this.props.bio.welcomeMessage} />  
    </div>
    );
  }
}

function WorkSection(props) {
  return (
    <div id="WorkSection" className="grey">
            <h2>Work Experience</h2>
            {props.jobs.map(job => <WorkEntry job={job} />)}
          </div>
  );
}
         
function ProjectSection(props) {
  return (
      <div id="ProjectSection">
        <h2>Projects</h2>
        {props.projects.map(project => <ProjectEntry project={project} />)}
      </div>
  );
}

function CourseSection(props) {
  return (
      <div id="CourseSection" className="grey">
          <h2>Online Classes</h2>
          {props.onlineCourses.map(course => <OnlineCourse course={course} />)}
      </div>
  );
}

function FooterSection(props) {
  return (
      <div id="lets-connect" className="orange center-text">
        <h2 className="dark-gray">Let's Connect</h2>
        <ul id="footerContacts" className="flex-box">
          {props.contacts.map(contact => <li className="flex-item">
            <span className="black-text">{contact[0]}:</span>
            <span className="white-text">{contact[1]}</span></li>)}
        </ul>
      </div>
  );
}
// End

/*  Complete SPA [1] */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main">
          <HeaderSection bio={bio}   />

          <WorkSection jobs={JobsModel}  />

          <ProjectSection  projects={projects} />

          <CourseSection onlineCourses={onlineCourses} />

          <FooterSection contacts={bio.contacts}  />
        </div>
      </div>
    );
  }
}
// End


export default App;
