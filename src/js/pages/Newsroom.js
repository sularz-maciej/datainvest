import React from "react";

import Sidebar from "../components/Sidebar";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Newsroom extends React.Component {
    /*
     * Set the constructor - that is where we should define state object.
     */
    constructor(){
        // ES6 class constructors MUST call super if they are subclasses.
        super();

        this.state = {
            sidebarMenu: [
                { name: 'News', url: 'newsroom/news' },
                { name: 'Messages', url: 'newsroom/messages' }
            ]
        };
    }

	render(){
		return(
            <div id="App_section_container" class="component-page-newsroom">
                <div id="App_section_content">
                        <div id="App_section_text">
                            { this.props.children }
                        </div>
                        <Sidebar menuItems={ this.state.sidebarMenu } />
                    </div>
                </div>
		);
	}
}
