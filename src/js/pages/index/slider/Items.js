import React from "react";
import { Link } from "react-router";

import { random } from "lodash";

import Item from "./Item";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Items extends React.Component {
    constructor(props){
        super(props);
        let items = [];

        for(let i = 0; i < props.slides.length ; i++){
            let key = "itm" + i + random(9999999);

            if(i === 0) props.slides[i].active = true;
            items.push(<Item key={key} {...props.slides[i]} />);
        }

        this.state = { items }
    }

	render(){
        let indicatorClass = this.props.active ? 'active' : '';
        return(
            <div class="carousel-inner">
                { this.state.items }
            </div>
		);
	}
}
