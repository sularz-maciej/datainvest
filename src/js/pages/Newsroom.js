import React from "react";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Newsroom extends React.Component {
	render(){
		return(
            <div class="component-page-newsroom">
                {this.props.children}
            </div>
		);
	}
}
