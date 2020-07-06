import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
		<h1 style = {{color:"White"}}> Get in touch!</h1>

        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
			<h1 style = {{color:"White"}}> Send me an Email:</h1>

		   <div className="email-form span-4 m-span-12" align = "center">
				  <form action="MAILTO:sharma.manis@northeastern.edu" method="post" encType="text/plain" >
					
					  <input type="text" name="name" placeholder="Name" ></input> 
					  <input type="text" name="mail" placeholder="Email id"></input>
					  <textarea type="text" name="comment" placeholder="Your message." rows="5"></textarea>
					  <input type="submit" value="Send"></input>
				  </form>
			</div>

         <ul className="copyright">
              <li>Design Template by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout ! Check them out :) </a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
