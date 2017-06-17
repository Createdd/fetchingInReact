import React, { Component } from 'react';
import './App.css';
import ImgList from './Components/ImgList';

import cred from './cred.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
		fetch('https://api.unsplash.com/photos/?client_id=' + cred.APP_ID)
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
					</div>
				</div>
				<div className="main-content">
					<ImgList data={this.state.imgs} />
				</div>
			</div>
		);
	}
}
