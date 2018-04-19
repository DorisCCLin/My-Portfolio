import React, { Component } from 'react';
import './style/video.css';

class Video extends Component {
	render() {
		return (
			<div>
				<div className="iframe-wrapper">
					<iframe
						src="https://player.vimeo.com/video/211005567?autoplay=1&loop=1&autopause=0&background=1"
						frameborder="0"
						webkitallowfullscreen
						mozallowfullscreen
						allowfullscreen
					/>
				</div>
				<div className="iframe-wrapper-front" />
				<div className="video-text">
					<div className="slidingVertical">Hi! I am Doris</div>
					<div className="slidingVertical">I am a web developer</div>
					<div className="slidingVertical">I am also a filmmaker</div>
					<div className="slidingVertical">
						I'd love to have a chat with you
					</div>

					<div className="opacity">
						<a
							className="btn-floating btn-large black animated infinite pulse"
							href="#about"
						>
							<i className="material-icons">details</i>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Video;
