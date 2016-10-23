import React from "react";

// Lets make our life easy searching for the particular object in an array, shall we? :D
import { find } from "lodash";

/**
 * This fakes the backend!!!
 * Attach a backend to fetch this kind of data!
 */
import { news, messages } from "../../backendAPI/server-data";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Details extends React.Component {
    componentWillMount(){
        /*
         * componentWillMount() is invoked immediately before mounting occurs.
         * It is called before render(), therefore setting state in this method
         * will not trigger a re-rendering. Avoid introducing any side-effects or
         * subscriptions in this method.
         *
         * This is the only lifecycle hook called on server rendering. Generally,
         * we recommend using the constructor() instead.
         *
         * Source:
         * https://facebook.github.io/react/docs/react-component.html#componentwillmount
         */

         /**
          * This is only for the sake of the simplicity. It would have to be
          * handled diferentely in case of AJAX! The component would not re-render
          * if the data was fetched via AJAX
          */

         this.state = this.getEntryDetails();
    }

    getEntryDetails(){
        /**
         * Hit the API here and fetch the details with AJAX we will fake it ;-)
         */

         let urlParams = this.props.params;

         switch(urlParams.type){
             case "messages":
                return find(messages, { slug: urlParams.slug });
                break;
             default:
                return find(news, { slug: urlParams.slug });
         }

         // Should things go worng returns an empty object.
         return {};
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
                <div class="app_main_center_page_date">{ this.state.datePosted }</div>
                { /* READ THE NOTE ABOVE!!! */ }
                <div  dangerouslySetInnerHTML={{__html: this.state.content }}></div>
            </div>
		);
	}
}
