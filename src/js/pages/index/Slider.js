import React from "react";
import { Link } from "react-router";

import Item from "./slider/Item";
import Items from "./slider/Items";

import Indicators from "./slider/Indicators";

import { slides } from "../../backendAPI/server-data";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Slider extends React.Component {
    constructor(){
        super();

        this.state = {
            sliderId: 'myCarousel',
            slides
        }
    }

    render(){
		return(
            <div id={ this.state.sliderId } class="carousel slide" data-interval="5000" data-wrap="true" data-ride="carousel">
                <Indicators sliderId={ this.state.sliderId } noOfSlides={ this.state.slides.length } />
                <Items slides={ this.state.slides } />
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <img src="images/arrow-left.png" />
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <img src="images/arrow-right.png" />
                </a>
            </div>
		);
	}
}
