import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Division extends React.Component {
	render(){
		return(
            <li>
                <p>
                    <Link to={ this.props.path }>
                        <img src={ this.props.imgUrl } /><br /><br />
                        { this.props.description }
                    </Link>
                </p>
            </li>
		);
	}
}
