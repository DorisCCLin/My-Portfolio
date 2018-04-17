import React, { Component } from 'react';

class Portfolio extends Component {
	render() {
		return (
			<div
				className="container"
				style={{
					textAlign: 'center',
					marginTop: '10vh',
					marginBottom: '20vh'
				}}
			>
				<h5>Portfolio</h5>
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
									An application that allows users to collect
									feedback and get result analytics by sending
									email surveys.
								</p>
								<div>
									<a>
										<img
											src="images/github-btn_w.png"
											class="btn-floating btn-medium waves-effect waves-light black"
											style={{ marginRight: '10px' }}
										/>
									</a>
									<a class="btn-floating btn-medium waves-effect waves-light black">
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
									AUXcord is an application for music-lovers
									to keep track of concerts.
								</p>
								<div>
									<a>
										<img
											src="images/github-btn_w.png"
											class=" btn-floating btn-medium waves-effect waves-light black"
											style={{ marginRight: '10px' }}
										/>
									</a>
									<a class="btn-floating btn-medium waves-effect waves-light black">
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
		);
	}
}

export default Portfolio;
