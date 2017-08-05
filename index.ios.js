/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// Enables Strict Mode to improve error handling and disable some JS to make JS better
'use strict';


// loads react module and react-native module 
// these moduls are assigned o variables called React and ReactNative
var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');


// defines a single style that will be applied to "Hello World" text
var styles = ReactNative.StyleSheet.create({
	text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80
	},
	container: {
		flex: 1
	}
});



// This constructs a navigation controller, applies a style, and sets the initial route to the HelloWorld component
class PropertyFinderApp extends React.Component {
	render() {
		return (
			<ReactNative.NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Property Finder',
					component: SearchPage,
				}}/>
		);
	}
}



// AppRegistry defines the entry point to the application and provides the root component
ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });




