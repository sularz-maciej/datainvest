import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Sidebar extends React.Component {
    displaySidebar(){
        let items = this.props.menuItems;
        let menuItems = [];

        if(items){
            // Itterate through all menu items
            items.map(
                /**
                 * Arrow function that builds a React list item and pushes it to
                 * the menuItems array that is returned when the map() function
                 * is done.
                 */
                (item) => {
                    let key = item.name + "-" + Date.now();
                    menuItems.push(
                        <li key={key}><Link to={item.url} activeClassName="selected">{item.name}</Link></li>
                    )
                }
            )

            /*
             * Returns an array of React list items, react is smart like that :D
             */
            return menuItems;
        }

        // Should menu items not be passed to the component.
        return;
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
