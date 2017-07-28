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


// defines a single style that will be applied to "Hello World" text
var styles = ReactNative.StyleSheet.create({
	text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80
	}
});


// the below is a JavaScript class
// PropertyFinderApp extends React.Component -- this is the basic 
// building block of the React UI
// Components contain: 
//    - immutable/unchangeable properties
//		- mutable state variables and expose a method for rendering
//		- hello world basic app only requires a render method
// React Native components are lightweight equivalent to UIKit classes
// 		- so the framework takes care of transforming the tree of
//		React components into the required native UI
class PropertyFinderApp extends React.Component {
	render() {
		return React.createElement(ReactNative.Text, {style: styles.text}, "Hello World!");
	}
}


// AppRegistry defines the entry point to the application and provides the root component
ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });




