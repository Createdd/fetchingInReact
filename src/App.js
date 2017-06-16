import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import ImgList from './Components/ImgList';

export default class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
						<SearchForm />
					</div>
				</div>
				<div className="main-content">
					<ImgList />
				</div>
			</div>
		);
	}
}
