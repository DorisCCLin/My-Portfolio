import React, { Component } from 'react';
import './style/header.css';

class Header extends Component {
	render() {
		return (
			<div class="navbar">
				<nav
					className="animated fadeInUp"
					style={{
						backgroundColor: 'rgba(0,0,0,0)',
						height: '100%'
					}}
				>
					<div class="nav-wrapper">
						<a
							href="/"
							class="brand-logo"
							style={{
								marginLeft: '20px',
								marginTop: '10px'
							}}
						>
							<img
								src="images/logo.png"
								style={{ width: '80px' }}
								className="animated fadeInUp"
							/>
						</a>
						<ul
							id="nav-mobile"
							class="right hide-on-med-and-down"
							style={{
								marginRight: '20px',
								marginTop: '15px'
							}}
						>
							<li>
								<a className="menu" href="#about">
									about
								</a>
							</li>
							<li>
								<a className="menu" href="#skills">
									skills
								</a>
							</li>
							<li>
								<a className="menu" href="#resume">
									resume
								</a>
							</li>
							<li>
								<a className="menu" href="#contact">
									contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
