import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class SectionSidebar extends React.Component {
    displaySidebar(){
        let items = this.props.menuItems;
        let menuItems = [];

        if(items){
            items.map(
                (item) => {
                    let key = item.name + "-" + Date.now();
                    menuItems.push(<li key={key}><Link to={item.url} activeClassName="selected">{item.name}</Link></li>)
                }
            )

            return menuItems;
        }


    }

	render(){
		return(
            <div id="App_section_sidebar">
                <ul class="App_section_menu">
                    { this.displaySidebar() }
                </ul>
            </div>
		);
	}
}
