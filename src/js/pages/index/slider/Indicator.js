import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Indicator extends React.Component {
	render(){
        let indicatorClass = this.props.active ? 'active' : '';
        return(
            <li data-target={ "#" + this.props.sliderId } data-slide-to={ this.props.slideNo } class={ indicatorClass } ></li>
		);
	}
}
