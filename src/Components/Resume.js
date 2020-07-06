import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em> <span>&bull;</span><em className="string">{education.gpa}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
		if(skills.level === "100%"){
        return  <li key={skills.name}><span style={{backgroundColor: '#5cb85c', width : '100%'}} className={className} > Proficient</span><em>{skills.name}</em></li>
		}
		if(skills.level === "75%"){
        return <li key={skills.name}><span style={{backgroundColor: '#a4d46c', width : '75%'}} className={className}  >Advanced</span><em>{skills.name}</em></li>
		}
		if(skills.level === "50%"){
        return <li key={skills.name}><span style={{backgroundColor: '#f0ad4e', width : '50%'}} className={className}  >Intermediate</span><em>{skills.name}</em></li>
		}
		if(skills.level === "25%"){
        return <li key={skills.name}><span style={{backgroundColor: '#d9534f', width : '25%'}} className={className}  >Beginner</span><em>{skills.name}</em></li>
		}
	  }
	  )
	  
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
	   
   </section>
    );
  }
}

export default Resume;
