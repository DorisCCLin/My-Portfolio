import React, { Component } from 'react';
import './style/footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer" id="contact">
				<div className="row">
					<div className="col s12" style={{ marginTop: '5vh' }}>
						<a
							href="https://www.linkedin.com/in/doris-cc-lin/"
							target="blank"
						>
							<img
								src="images/linkedIn.png"
								className="contactIcon"
							/>
						</a>
						<a href="https://github.com/DorisCCLin" target="blank">
							<img
								src="images/github-btn_w.png"
								className="contactIcon"
							/>
						</a>
						<a href="mailto:doriscclin@gmail.com">
							<img
								src="images/email.png"
								className="contactIcon"
							/>
						</a>
					</div>
				</div>
				<hr
					style={{
						border: '0',
						height: '1px',
						background: '#333'
					}}
				/>
			</div>
		);
	}
}

export default Footer;
