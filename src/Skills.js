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
					<h5>Skills</h5>
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
