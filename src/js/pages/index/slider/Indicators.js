import React from "react";
import { Link } from "react-router";

import { random } from "lodash";

import Indicator from "./Indicator";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Indicators extends React.Component {
    constructor(props){
        super(props);
        let indicators = [];

        for(let i = 0; i < props.noOfSlides; i++){
            let key = "sld" + i + random(9999999);
            let attrs = {
                key: key,
                sliderId: props.sliderId,
                slideNo: i
            }

            if(i === 0) attrs.active = true;
            indicators.push(<Indicator {...attrs} />);
        }

        this.state = { indicators }
    }

	render(){
        let indicatorClass = this.props.active ? 'active' : '';
        return(
            <ol class="carousel-indicators">
                { this.state.indicators }
            </ol>
		);
	}
}
