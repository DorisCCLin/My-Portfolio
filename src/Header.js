import React, { Component } from 'react';
import './style/header.css';

class Header extends Component {
	render() {
		return (
			<div class="navbar">
				<nav
					style={{
						backgroundColor: 'rgba(0,0,0,0)',
						borderBottom: '0.5px solid grey'
					}}
				>
					<div class="nav-wrapper">
						<a
							href="/"
							class="brand-logo"
							style={{ marginLeft: '20px', fontSize: '30px' }}
						>
							DORIS CHIACHING LIN
						</a>
						<ul
							id="nav-mobile"
							class="right hide-on-med-and-down"
							style={{ marginRight: '20px', fontSize: '15px' }}
						>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#skills">Skills</a>
							</li>
							<li>
								<a href="#resume">Resume</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
