import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import ImgList from './Components/ImgList';

import Unsplash from 'unsplash-js';

// const unsplash = new Unsplash({
// 	applicationId: process.env.APP_ID,
// 	secret: process.env.APP_SECRET,
// 	callbackUrl: process.env.CALLBACK_URL
// });

// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//   "public"
// ]);

// location.assign(authenticationUrl);

// unsplash.auth.userAuthentication(query.code)
//   .then(toJson)
//   .then(json => {
//     unsplash.auth.setBearerToken(json.access_token);
//   });

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
		// unsplash.photos
		// 	.listPhotos(2, 15, 'latest')
		// 	.then(toJson => toJson.json())
		// 	.then(json => {
		// 		this.setState({ imgs: json.data });
		// 	})
		// 	.catch(err => {
		// 		console.log('Error happened during fetching!', err);
		// 	});
		fetch(
			'https://api.unsplash.com/photos/?client_id=d3cfd3b8997abcd4c3fbe668a6c654a71412bcc7512710f116a76e7b095bfad8'
		)
			.then(toJson => toJson.json())
			.then(json => {
				this.setState({ imgs: json });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	render() {
		console.log('state:' + this.state.imgs);
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
