import React from "react";

import { random } from "lodash";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class LocaleSwitch extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

        let defaultLocales = [
            {
                locale: 'pl-PL',
                language: 'Polski'
            },
            {
                locale: 'en-EN',
                language: 'English'
            }
        ]

        /**
         * Allows us to pass all the locales as a parameter.
         * Sets defaults otherwise
         */
        this.state.locales = props.locales || defaultLocales;
    }

    handleLanguageChange(locale, e){
        /**
         * TODO: Implement this at some point?
         *
         * NOTE: Here are some ideas how to approach translation
         *       1. Use some sort of react l10n or i18n library.
         *       2. Extract the text into an object, divide into components and
         *          load appropriate language based off of the selected locale...
         *
         *       DO NOT FORGET ABOUT CURRENCY AND DATE localization ;-)
         */

         let translation = {
             'pl-PL': {
                 message: `Rozmawiamy po polsku, huh?`
             },
             'en-EN': {
                 message: `Yay! Now we're talking in English!`
             }
         }

         // Handle highlighting selected language
         e.preventDefault();
         let $span = $( e.target ).parent();
         let $container = $span.parent();
         $container.find( 'span' ).removeClass( 'selected' );
         $span.addClass('selected');

         // Demonstrate point no. 2 described above.
         console.log(translation[locale].message);
    }

	render(){
        /**
         * TODO: Itterate through all the locales and generate the below
         *       automaticaly. Perhaps extract each span into a component?
         */
		return(
            <div id="App_locale_switch">
                <span>
                    <a href="#" onClick={ (evt) => this.handleLanguageChange('pl-PL', evt) }>Polski</a>
                </span>
                <span class="selected">
                    <a href="#" onClick={ (evt) => this.handleLanguageChange('en-EN', evt) }>English</a>
                </span>
            </div>
		);
	}
}
