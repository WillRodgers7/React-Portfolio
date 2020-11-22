import React from "react";
import workDay from "./images/workDay copy.png";
import codeQuiz from "./images/codeQuiz copy.png";
import codeRefractor from "./images/codeRefractor copy.png";
import passwordGenerator from "./images/passwordGenerator copy.png";
import ultimatePubcrawl from "./images/ultimatePubcrawl copy.png";
import readMe from "./images/readMe.jpeg";
import noteTaker from "./images/Notes copy.jpeg";
import mindful from "./images/mindful.jpeg";
import budget from "./images/budget.jpeg";


function Portfolio() {
	return (
<div>

			<div className="container">
				<div className="card border-0 shadow my-5">
					<div className="card-body p-5">
						<header>Portfolio</header>
						<br />
						<hr />
						<br />
                                {/* Project 1 */}
						<div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
										<img className='workDay'src={workDay}  alt="Work Day Application"/>

											<a href="https://willrodgers7.github.io/Day-Planner/" className="Portbtn1">Work Day</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                {/* Project 2 */}
                        <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
											<img className='codeQuiz'src={codeQuiz}  alt="Code Quiz Application"/>

											<a href="https://willrodgers7.github.io/Code-Quiz/" className="Portbtn1">Code Quiz</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                {/* Project 3 */}
                        <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
											
											<img className='codeRefractor'src={codeRefractor}  alt="Code Refractor Application"/>

											<a href="https://willrodgers7.github.io/Code-Refractor1/" className="Portbtn1">Code Refractor</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                {/* Project 4 */}
                        <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
											<img className='passwordGenerator'src={passwordGenerator}  alt="Password Generator Application"/>

											<a href="https://willrodgers7.github.io/Password-Generator/" className="Portbtn1">Password Generator</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                {/* Project 5 */}
                        <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
										<img className='ultimatePubcrawl'src={ultimatePubcrawl}  alt="Pub Crawl Application"/>

											<a href="https://willrodgers7.github.io/Ultimate-Pub-Crawl/" className="Portbtn1">Ultimate Pub Crawl</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                {/* Project 6 */}
                        <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
										<img className='readMe'src={readMe}  alt="Read Me Generator"/>
											

											<a href="https://willrodgers7.github.io/ReadMe-Generator/" className="Portbtn1">Read Me Generator</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                {/* Project  7*/}
                                <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
										<img className='noteTaker'src={noteTaker}  alt="Note Taker Application"/>

											<a href="https://github.com/WillRodgers7/Note-Taker" className="Portbtn1">Note Taker</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                                        {/* Project 8 */}
                                                        <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
											<img className ="cardone"/>
											<img className='mindful'src={mindful}  alt="Mindful Application"/>

											<a href="https://lit-depths-25209.herokuapp.com/index" className="Portbtn1">Mindful</a>
										</div>
									</div>
								</div>
							</div>
						</div>
                                                        {/* Project 9 */}
                                                        <div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-4">
									<div className="card text-center">
										<div className="card-body">
										<img className='budget'src={budget}  alt="Code Refractor Application"/>

											<a href="https://mighty-mountain-68135.herokuapp.com/" className="Portbtn1">Progressive Budget</a>
										</div>
									</div>
								</div>
							</div>
						</div>


















					</div>
				</div>
			</div>

			<footer className="footer">&copy;copywright</footer>
</div>
	);
}
export default Portfolio;