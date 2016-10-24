import React from "react";

import { capitalize } from "lodash";

import Featurette from "./components/Featurette";

/**
 * This fakes the backend!!!
 * Attach a backend to fetch this kind of data!
 */
import { news, messages } from "../../backendAPI/server-data";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class List extends React.Component {

    getEntries(){
        let urlParams = this.props.params;

        /**
         * TODO: This is the second time that similar switch was used accross
         *       the app! It's time to extract it to some sort of helpers/utils
         *       class, isn't it? :D
         */
        switch(urlParams.type){
            case "messages":
               return messages;
               break;
            default:
               return news;
        }
    }

	render(){
		return(
			<div class="component-page-newsroom-news">
                <h1 class="App_section_text_title">{ capitalize( this.props.params.type ) }</h1>
                { this.getEntries().map((entry) => {
                    let key = entry.id + "-" + Date.now();

                    /**
                     * NOTE: I'm using ES6 spread operator. If we wanted to sort
                     *       the array we could do it right after fetching it
                             from the API. I assumed that we receieve it sorted
                             by date in newer to older ordrer.
                     */
                    return <Featurette {...entry} key={key} />

                    // TODO: Implement pagination
                }) }
            </div>
		);
	}
}
