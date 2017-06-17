import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';
import cred from './cred.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	performSearch = query => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${cred.APP_ID}`
			)
			.then(data => {
				this.setState({ imgs: data.data.results });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					<ImgList data={this.state.imgs} />
				</div>
			</div>
		);
	}
}
