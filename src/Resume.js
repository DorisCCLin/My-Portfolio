import React, { Component } from 'react';
import './style/resume.css';

class Resume extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<div
					className="container"
					id="resume"
					style={{
						marginTop: '10vh',
						marginBottom: '20vh'
					}}
				>
					<div className="row">
						<div className="col s5" />
						<div className="col s2">
							<h5
								style={{
									textAlign: 'center',
									borderTop: '3px solid darkturquoise',
									paddingTop: '20px',
									fontSize: '20px',
									fontFamily: "'Oswald', sans-serif",
									fontWeight: '600',
									marginBottom: '30px'
								}}
							>
								RESUME
							</h5>
						</div>
						<div className="col s5" />
					</div>
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
							<ul className="resume_intent">
								<li className="resume_title">
									New York Code and Design Academy
								</li>
							</ul>
							<div className="resume_out">
								<div className="resume_info">
									<span style={{ color: 'darkturquoise' }}>
										2018
									</span>
									<br />
									<span
										style={{
											color: 'dimgrey',
											fontWeight: '200'
										}}
									>
										a 12 weeks full-time coding bootcamp
										with 480 hours of in-class instruction
										and 320 hours of self-guided project
										work outside of the classroom.
										Curriculum includes Ruby, Rails,
										JavaScript (ES6), HTML5, SASS, CSS3 and
										SQL.
									</span>
								</div>
							</div>
							<li className="resume_title">
								Temple University, School of Theater, Film and
								Media Arts
							</li>
							<div className="resume_out">
								<div
									className="resume_info"
									style={{
										borderLeft: '2px solid transparent'
									}}
								>
									<span style={{ color: 'darkturquoise' }}>
										2009 - 2012
									</span>
									<br />
									<span
										style={{
											color: 'dimgrey',
											fontWeight: '200'
										}}
									>
										Master of Fine Arts (M.F.A.), Film and
										Media Arts
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
								<div
									className="resume_space"
									style={{
										borderLeft: '2px solid transparent'
									}}
								/>
							</div>

							<li className="resume_title">
								Spirit Animal Collective, Full Stack Developer |
								Founder
							</li>
							<div className="resume_out">
								<div
									className="resume_info"
									style={{
										borderLeft: '2px solid transparent'
									}}
								>
									<span style={{ color: 'darkturquoise' }}>
										2014 - present
									</span>
									<br />
									<a
										href="http://www.spiritanimal.tv/"
										target="blank"
									>
										<i className="tiny material-icons grey-text">
											link
										</i>
									</a>
								</div>
							</div>
							<li className="resume_title">
								UsBuyShip, Lead Software Engineer | Co-Founder
							</li>
							<div className="resume_out">
								<div
									className="resume_info"
									style={{
										borderLeft: '2px solid transparent'
									}}
								>
									<span style={{ color: 'darkturquoise' }}>
										2013 - 2018
									</span>
									<br />
									<a
										href="http://www.usbuyship.com/"
										target="blank"
									>
										<i className="tiny material-icons grey-text">
											link
										</i>
									</a>
								</div>
							</div>
							<li className="resume_title">
								Temple University, Webmaster
							</li>
							<div className="resume_out">
								<div
									className="resume_info"
									style={{
										borderLeft: '2px solid transparent'
									}}
								>
									<span style={{ color: 'darkturquoise' }}>
										2010 - 2013
									</span>
									<br />
									<span style={{ color: 'dimgrey' }} />
								</div>
							</div>
						</div>
					</div>
					<div style={{ textAlign: 'center' }}>
						<a
							href="/files/DorisCCLIn_Resume2018_APR_web.pdf"
							class="waves-effect waves-light btn-large darkturquoise"
							style={{ backgroundColor: 'darkturquoise' }}
						>
							Full Resume
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Resume;
