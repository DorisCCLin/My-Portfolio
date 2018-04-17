import React, { Component } from 'react';
import './style/resume.css';

class Resume extends Component {
	render() {
		return (
			<div className="wrapper" id="resume">
				<h5>Resume</h5>
				<div className="row">
					{/* Education Section */}
					<div className="col m6">
						<div className="resume_item">
							<div className="resume_icon">
								<i className="tiny material-icons white-text">
									school
								</i>
							</div>
							<span>education</span>
						</div>

						<div className="resume_out">
							<div className="resume_space" />
						</div>

						<li className="resume_title">
							New York Code and Design Academy
						</li>
						<div className="resume_out">
							<div className="resume_info">
								<span style={{ color: 'red' }}>2018</span>
								<br />
								<span style={{ color: 'grey' }}>
									a 12 weeks full-time coding bootcamp with
									480 hours of in-class instruction and 320
									hours of self-guided project work outside of
									the classroom. Curriculum includes Ruby,
									Rails, JavaScript (ES6), HTML5, SASS, CSS3
									and SQL.
								</span>
							</div>
						</div>
						<li className="resume_title">
							Temple University, School of Theater, Film and Media
							Arts
						</li>
						<div className="resume_out">
							<div className="resume_info">
								<span style={{ color: 'red' }}>
									2009 - 2012
								</span>
								<br />
								<span style={{ color: 'grey' }}>
									Master of Fine Arts (M.F.A.), Film and Media
									Arts
								</span>
							</div>
						</div>
					</div>
					{/* Exprience Section */}
					<div className="col m6">
						<div className="resume_item">
							<div className="resume_icon">
								<i className="tiny material-icons white-text">
									business_center
								</i>
							</div>
							<span>Exprience</span>
						</div>

						<div className="resume_out">
							<div className="resume_space" />
						</div>

						<li className="resume_title">
							Spirit Animal Collective, Full Stack Developer |
							Founder
						</li>
						<div className="resume_out">
							<div className="resume_info">
								<span style={{ color: 'red' }}>
									2014 - present
								</span>
								<br />
								<span style={{ color: 'grey' }} />
							</div>
						</div>
						<li className="resume_title">
							UsBuyShip, Lead Software Engineer| Co-Founder
						</li>
						<div className="resume_out">
							<div className="resume_info">
								<span style={{ color: 'red' }}>
									2013 - 2018
								</span>
								<br />
								<span style={{ color: 'grey' }} />
							</div>
						</div>
						<li className="resume_title">
							Temple University, Webmaster
						</li>
						<div className="resume_out">
							<div className="resume_info">
								<span style={{ color: 'red' }}>
									2010 - 2013
								</span>
								<br />
								<span style={{ color: 'grey' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Resume;
