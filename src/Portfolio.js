import React, { Component } from 'react';

class Portfolio extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<div
					className="container"
					style={{
						textAlign: 'center',
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
								PORTFOLIO
							</h5>
						</div>
						<div className="col s5" />
					</div>

					<div className="row">
						<div class="col m6">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img
										class="activator"
										src="images/gibbon.png"
									/>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">
										Gibbon<i class="material-icons right">
											close
										</i>
									</span>
									<p>
										An application that allows users to
										collect feedback and get result
										analytics by sending email surveys.
									</p>
									<br />
									<div>
										<a
											href="https://github.com/DorisCCLin/Gibbon-app"
											target="blank"
										>
											<img
												src="images/github-btn_w.png"
												class="btn-floating btn-medium waves-effect waves-light black"
												style={{ marginRight: '10px' }}
											/>
										</a>
										<a
											href="https://gibbonproject.herokuapp.com/"
											target="blank"
											class="btn-floating btn-medium waves-effect waves-light black"
										>
											<i class="material-icons white-text">
												link
											</i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col m6">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img
										class="activator"
										src="images/AUXcord.png"
									/>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">
										AUXcord<i class="material-icons right">
											close
										</i>
									</span>
									<p>
										AUXcord is an application for
										music-lovers to keep track of concerts.
									</p>
									<br />
									<div>
										<a
											href="https://github.com/DorisCCLin/AUXcord"
											target="blank"
										>
											<img
												src="images/github-btn_w.png"
												class=" btn-floating btn-medium waves-effect waves-light black"
												style={{ marginRight: '10px' }}
											/>
										</a>
										<a
											href="https://auxcord.herokuapp.com/"
											target="blank"
											class="btn-floating btn-medium waves-effect waves-light black"
										>
											<i class="material-icons white-text">
												link
											</i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
