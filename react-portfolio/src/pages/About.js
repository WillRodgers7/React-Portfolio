import React from "react";


function About() {
	return (
		<div>
	<div className="container">
	<div className="card border-0 shadow my-5">
		<div className="card-body p-5">
			
			<header>About Me</header>
			<br></br>
			<hr></hr>
			<br></br>
			<div className="block">
				<img
					src="../Responsive-Portfolio/assets/pics/Will.jpeg"
					width="150px"
					height="250px"
					alt="A handsome man"
					id="profilePic"></img>
				
				<p>
					Hello, my name is William Rodgers, I am 28 years old and currently
					live in Temecula California. I graduated with a Bachelor's from San Diego State
					University about five years ago and have been working in the retail
					sector since then. I am currently a branch manager in San Diego
					with two stores that I manage. I recently graduated University of California, Los Angeles Coding Bootcamp and
					and am very interested and passionate about front end development. I am passionate about web design and aim to join 
					a team that values creativity, innovation and user interaction on the web.
					
					<br></br>
					<br></br>
					<a href="https://www.instagram.com/willrodgers7/">Instagram</a>
					<br></br>
					<a href="https://www.linkedin.com/in/william-rodgers-a548491ba/"> LinkedIn</a>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
				</p>
				{/* <div  style="height: 100;"></div> */}
			</div>
		</div>
	</div>
</div>

{/* <!-- Footer --> */}
<footer className="footer">
	&copy;copywright
</footer>
</div>
);
}


export default About;