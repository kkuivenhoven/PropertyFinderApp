'use strict';

// called a "destructuring assignment" -- this allows you to extract multiple object properties and assign them to variables using a single statement
// thus as a result, the rest of your code can drop the Reac prefix
// i.e. instead of ReactNative.StyleSheet, can just refer directly to
// it using StyleSheet
import React, { Component } from 'react'
import {
	StyleSheet,
	Text, 
	TextInput,
	View, 
	TouchableHighlight,
	ActivityIndicator,
	Image
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
				flowRight: {
					flexDirection: 'row',
					alignItems: 'center',
					alignSelf: 'stretch'
				},
				buttonText: {
					fontSize: 18,
					color: 'white',
					alignSelf: 'center'
				},
				button: {
					height: 36,
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#48BBEC',
					borderColor: '#48BBEC',
					borderWidth: 1,
					borderRadius: 8,
					marginBottom: 10,
					alignSelf: 'stretch',
					justifyContent: 'center'
				},
				searchInput: {
					height: 36,
					padding: 4,
					marginRight: 5,
					flex: 4,
					fontSize: 18,
					borderWidth: 1,
					borderColor: '#48BBEC',
					borderRadius: 8,
					color: '#48BBEC'
				},
		image: {
			width: 217,
			height: 138
		}
});


// this doesn't depend on SearchPage thus it's implemented as a free funciton rather than a method
// first creates the query string based on the parameters in data and then
// transforms the data into name=value pairs separated by ampersands
// last it calls the Nestoria API to return the property listings
function urlForQueryAndPage(key, value, pageNumber) {
	const data = {
		country: 'uk',
		pretty: '1',
		encoding: 'json',
		listing_type: 'buy',
		action: 'search_listings',
		page: pageNumber,
	};
	data[key] = value;

	const querystring = Object.keys(data)
		.map(key => key + '=' + encodeURIComponent(data[key]))
		.join('&');

	return 'https://api.nestoria.co.uk/api>' + querystring;
}


// TouchableHighlight is a React Native component that becomes transparent and reveals the underlay color when tapped
class SearchPage extends Component {
	constructor(props){
		super(props);
		//component now has a state variable with searchString set to initial value of 'london'
		this.state = {
			searchString: 'london',
			//isLoading keeps track of whether a query is in progress
			isLoading: false,
		};
	}
  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }

	// will eventually run the query
	// sets isLoading so the UI can show the new state
	_executeQuery = (query) => {
		console.log(query);
		this.setState({ isLoading: true });
	};

	// configures and initiates the search query 
	// should kick off when the Go button is pressed
	_onSearchPressed = () => {
		const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
		this._executeQuery(query);
	};

	render() {
		// ternary if statement optionally adds an activity indicator, depending on the components isLoading state
		const spinner = this.state.isLoading ?
			<ActivityIndicator size='large'/> : null;
		console.log('SearchPage.render');
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Search for houses to buy!
				</Text>
			  <Text style={styles.description}>
			  		Search by place-name, postcode or search near you location.
			  </Text>

				<View style={styles.flowRight}>
					<TextInput style={styles.searchInput} value={this.state.searchString} onChange={this.onSearchTextChanged.bind(this)} placeholder='Search via name or postcode'/>
					<TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._onSearchPressed}>
						<Text style={styles.buttonText}>Go</Text>
					</TouchableHighlight>
				</View>

				  <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
				  	<Text style={styles.buttonText}>Location</Text>
				  </TouchableHighlight>
				
					<Image source={require('./Resources/house.png')} style={styles.image}/>
					{spinner}


			</View>
		);
	}
}


// this exports toe SearchPage class, which permits its use in other files
module.exports = SearchPage;
