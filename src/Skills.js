import React, { Component } from 'react';

class Skills extends Component {
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
				<div className="animated fadeInUp" id="skills">
					<div className="row">
						<div className="col s5" />
						<div className="col s2">
							<h5
								style={{
									width: '50%',
									textAlign: 'center',
									borderTop: '3px solid darkturquoise',
									paddingTop: '20px',
									fontSize: '20px',
									fontFamily: "'Oswald', sans-serif",
									fontWeight: '600',
									marginBottom: '30px'
								}}
							>
								SKILLS
							</h5>
						</div>
						<div className="col s5" />
					</div>
					<div className="row">
						<img
							src="/images/css.png"
							style={{
								width: '10vw',
								minWidth: '100px'
							}}
						/>
						<img
							src="/images/html5.png"
							style={{
								width: '10vw',
								minWidth: '100px'
							}}
						/>
						<img
							src="/images/js.png"
							style={{
								width: '10vw',
								minWidth: '100px'
							}}
						/>
						<img
							src="/images/react.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
						<img
							src="/images/redux.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
						<img
							src="/images/heroku.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
					</div>
					<div className="row">
						<img
							src="/images/github.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
						<img
							src="/images/node.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
						<img
							src="/images/express.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
						<img
							src="/images/ruby.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
						<img
							src="/images/rails.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
						<img
							src="/images/mongoDB.png"
							style={{ width: '10vw', minWidth: '100px' }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
