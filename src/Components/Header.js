import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var school = this.props.data.school;
      var major = this.props.data.major;
	  var email = this.props.data.email;
	  var resumeDownload = this.props.data.resumedownload;


      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
	
	
	 <header id="home">
	
		<nav id="nav-wrap">

    
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	     <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
			<li><a className="smoothscroll" href="#home" title="Intro">Home</a></li>
			<li><a className="smoothscroll" href="#about" title="About">About</a></li>
			<li><a className="smoothscroll" href="#resume" title="Resume">Resume</a></li>
			<li><a className="smoothscroll" href="#portfolio" title="Projects">Projects</a></li>
			<li><a className="smoothscroll" href="#testimonials" title="Testimonials">Testimonials</a></li>
			<li><a href="mailto:sharma.manis@northeastern.edu" className="mail" >Say Hello! </a></li>
			<li><a href={resumeDownload} target="_blank"  size="sm" className="btn btn-primary btn--stroke btn--small" ><i className="fa fa-download"></i>Download Resume</a></li>

		</ul>
       
		</nav>
		
		  <div className="row banner">
         <div className="banner-text">
            <h2 className="responsive-headline">Manisha Sharma</h2>
			
			
			
    <h3>I {occupation} <span>{major} </span>from <span>{school}</span>. {description}</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

	   
		 
        

    </header> 
	
	
    );
  }
}

export default Header;
