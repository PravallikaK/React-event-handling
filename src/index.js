import React from "react";
import ReactDOM from "react-dom";

import Home from "./home";


class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			count : 0
		}
		this.updatecounter= this.updatecounter.bind(this);
	}
	updatecounter(){
		this.setState({count: this.state.count + 3});
	}
	render(){
		return(
			<div>
			<span>{this.state.count}</span>
			<Home triggerupdate ={this.updatecounter}/>
			</div>
			);
	}
}

ReactDOM.render( <App />,document.getElementById("root"));