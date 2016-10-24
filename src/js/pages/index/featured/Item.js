import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Featured extends React.Component {
	render(){
		return(
            <div class="App_homepage_news_single">
                <h2>
                    <Link to={ this.props.path } title={ this.props.title }>
                        { this.props.title }
                    </Link>
                </h2>
                <p>
                    { this.props.content }
                </p>
                <span class="App_homepage_news_single_date">{ this.props.datePosted }</span>
            </div>
		);
	}
}
