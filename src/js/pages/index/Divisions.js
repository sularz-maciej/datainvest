import React from "react";
import { Link } from "react-router";

import Division from "./divisions/Division";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Divisions extends React.Component {
    render(){
		return(
            <div id="App_homepage_divisions_containter">
                <div id="App_homepage_division_background"></div>
                <div id="App_homepage_divisions_content">
                    <ul id="App_homepage_intro_divisions">
                        <Division {...{ path: 'business/dataspace', imgUrl: 'images/app_logo_data_space.png', description: 'Sophisticated, top-tier 3000 m Data Center located in Toruń, Poland' }}/>
                        <Division {...{ path: 'business/datalab', imgUrl: 'images/app_logo_data_lab.png', description: 'Place where clever data management ideas are born every day' }}/>
                        <Division {...{ path: 'business/dataventures', imgUrl: 'images/app_logo_data_ventures.png', description: 'Corporate venture capital fund searching for bright entrepreneurs with revolutionary ideas' }}/>
                    </ul>
                </div>
            </div>
		);
	}
}
