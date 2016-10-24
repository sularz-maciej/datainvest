import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Intro extends React.Component {
    render(){
		return(
            <div id="App_homepage_intro_containter">
                <div id="App_homepage_intro_content">
                    <h3>
                        We believe that data acquisition, processing and
                        management become an ultimate source of competitive
                        advantage. We want to be with you at the forefront
                        of this revolution.
                    </h3>
                    <Link to="company/overview" id="App_homepage_intro_link">
                        Get to know more about Data Invest &gt;
                    </Link>
                </div>
            </div>
		);
	}
}
