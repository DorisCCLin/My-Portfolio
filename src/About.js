import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div
				className="container"
				style={{ marginTop: '10vh', marginBottom: '20vh' }}
			>
				<h5 id="about" style={{ textAlign: 'center' }}>
					About Me
				</h5>
				<div>
					<p>
						I am a full stack engineer with strong design and
						front-end development skills. Recently I’m participating
						Web Development Intensive Coding Bootcamp at New York
						Code + Design Academy to resharpen my skills in HTML,
						CSS, JavaScript, Ruby on Rails, React.js and Node.js. I
						was also a "Grow with Google Challenge Scholarship”
						recipient. In which, I learned using Java and XML to
						develop Android mobile applications.
					</p>
					<p>
						Currently, I’m working at Spirit Animal Collective<i className="tiny material-icons grey-text">
							link
						</i>, a media production company I started in 2014,
						where I produce videos and develop websites for clients.
						I obtained my master’s degree in film and media arts at
						Temple University, where I learned as a filmmaker while
						keeping my passion in visual arts, design and
						technology.
					</p>
					<p>
						I’m a problem-solving enthusiast and always in search of
						new experiences and adventures as a lifelong student of
						the world. I'm now looking for new opportunities in full
						stack development. If you'd like to start a
						conversation, please email me: doriscclin@gmail.com
					</p>
				</div>
			</div>
		);
	}
}

export default About;
