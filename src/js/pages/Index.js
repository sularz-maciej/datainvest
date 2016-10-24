import React from "react";
import { Link } from "react-router";

import CookieConsent from "./index/CookieConsent";
import Divisions from "./index/Divisions";
import Featured from "./index/Featured";
import Intro from "./index/Intro";
import IntroTitle from "./index/IntroTitle";
import Slider from "./index/Slider";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Index extends React.Component {
	render(){
		return(
            <div class="component-page-index">
                <div id="App_homepage_background_container">
                    <div class="slide-top-container">
                        <Slider />
                    </div>
                    <a name="#MenuBlock"></a>
                    <IntroTitle />
                    <Divisions />
                </div>
                <Intro />
                <Featured />
                <CookieConsent />
            </div>
		);
	}
}
