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
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${cred.APP_ID}`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
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
					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}
