import React from "react";

export default class Home extends React.Component{
		render(){
			return(
				<button onClick={this.props.triggerupdate}>click me!</button>
				);
		}
}