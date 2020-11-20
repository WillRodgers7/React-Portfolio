import React from "react";


function Contact() {
	return (
<div>
    <div className="container">
			<div className="card border-0 shadow my-5">
				<div className="card-body p-5">
					
                    
					<header>Contact Me</header>
					<hr></hr>
					<br></br>
					<br></br>
					<form className="block form-horizontal">
						
						<div className="form-group">
							<label for="exampleFormControlInput1">Name</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="Your name here"
							/>
						</div>
		
						<br></br>
						<br></br>
		
						
						<div className="form-group">
							<label for="exampleFormControlInput1">Email</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="name@example.com"
							/>
						</div>
		
						<br></br>
						<br></br>
		
						
						<div className="form-group">
							<label for="exampleFormControlTextarea1">Message</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
							></textarea>
						</div>
		
						<br></br>
						<br></br>
		
						
						<div className="btn-group-toggle" data-toggle="buttons">
							<label>
								<button
									className="btn btn-secondary active"
									onClick="window.location.reload();"
								>
									Submit
								</button>
							</label>
						</div>
					</form>
				</div>
                
				</div>
			</div>



		
		<footer className="footer">
			&copy;copywright
		</footer>
</div>
);
}


export default Contact;