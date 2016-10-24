import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class IntroTitle extends React.Component {
    render(){
		return(
            <div id="App_homepage_title_container">
                <div id="App_homepage_title_content">
                    <div id="App_homepage_intro_title">
                        <h2>Data Invest is a high-tech company based in Toruń,
                            Poland. We offer cutting edge technologies,
                            including IT Security (DDoS/Application Protection),
                            Big Data and Cloud Solutions.
                        </h2>
                    </div>
                </div>
            </div>
		);
	}
}
