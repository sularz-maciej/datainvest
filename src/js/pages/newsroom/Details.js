import React from "react";

// Lets make our life easy searching for the particular object in a collection, shall we? :D
import { find } from "lodash";

/**
 * This fakes the backend!!!
 * Attach a backend to fetch this kind of data! */
import { news, messages } from "../../backendAPI/server-data";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Details extends React.Component {
    /**
     * In order to gain access to the props we need to pass them to the constructor and the super method
     */
    constructor(props){
        super(props);
        /**
         * I'm assignig slug like that to utilize ES6 Parameter Context Matching
         * likewise entry later on!
         */
        let entry, slug = props.params.slug;

        /**
         * Loads the right collection depending on url param :slug
         */
        switch(props.params.type){
            case "messages":
                entry = find(messages, { slug });
                break;
            default:
                entry = find(news, { slug });
        }

        this.state = { entry }
    }

    /**
     * NOTE:
     * For the sake of saving time I'm on purpose not follwoing good practice here!
     * I'm rendering HTML that technically comes from the backend directly into a
     * component. It is dangerous and SHOULD NEVER hit the production :-)
     */
	render(){
		return(
			<div class="component-page-newsroom-details">
                <h1 class="App_section_text_title">
                    { this.state.title }
                </h1>
                <div class="app_main_center_page_date">{ this.state.entry.datePosted }</div>
                { /* READ THE NOTE ABOVE!!! */ }
                <div  dangerouslySetInnerHTML={{__html: this.state.entry.content }}></div>
            </div>
		);
	}
}
