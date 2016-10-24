import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Item extends React.Component {
	render(){
        let style = {
            backgroundImage: 'url(' + this.props.imagePath + ')'
        }

        /**
         * TODO: Encapsulate the #MenuBlock inside the Slider container so that
         *       it becomes a self contained component. Do not forget that it
         *       relies on external jQuery plugin so consider that as well.
         */
        let itemClass = this.props.active ? 'item active' : 'item'
        let buttonLink = this.props.button.link ? this.props.button.link : "javascript:anchor('#MenuBlock')";

		return(
            <div class={ itemClass } style={ style }>
                <div class="container">
                    <div class="row bottom-caption">
                        <h1 dangerouslySetInnerHTML={{__html: this.props.header }}></h1>
                        <div class="slide-top-spacer"></div>
                        <p class="text-center">
                            <a class="btn btn-default btn-slide"
                                href={ buttonLink }>
                                { this.props.button.text } <span class="cheveron-right-small">&nbsp;</span>
                            </a><br />
                            <span class="btn-slide-caption">&nbsp;</span>
                        </p>
                    </div>
                </div>
            </div>
		);
	}
}
