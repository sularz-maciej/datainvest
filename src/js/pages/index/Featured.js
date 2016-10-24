import React from "react";
import { Link } from "react-router";

import { take, random } from "lodash";

import Item from "./featured/Item";

import { featured } from "../../backendAPI/server-data";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Featured extends React.Component {
    constructor(){
        super(); // it needs to be called, that's just how it is :D
        let news = [], messages = [];

        // Builds an array of React components that can be spitted out in the render()
        this.returnTwoItemsSortedByDate( featured.news ).map( ( item ) => {
            let key = "nws" + random(9999999);
            news.push( <Item key={key} {...item}/> );
        });

        // Builds an array of React components that can be spitted out in the render()
        this.returnTwoItemsSortedByDate(featured.messages).map( ( item ) => {
            let key = "msg" + random(9999999);
            messages.push( <Item key={key} {...item}/> );
        });

        this.state = { news, messages }
    }

    returnTwoItemsSortedByDate(collection){
        return take(collection.sort( ( a, b ) => {
            let aDateReversed, bDateReversed;

            /**
             * Convert date to from DD-MM-YYYY format to YYYY-MM-DD
             * in order to compare it properly */
            aDateReversed = a.datePosted.split('.').reverse().join('-');
            bDateReversed = b.datePosted.split('.').reverse().join('-');

            return new Date(bDateReversed).getTime() - new Date(aDateReversed).getTime();
        } ), 2);
    }

	render(){
		return(
            <div id="App_homepage_text_container">
                <div id="App_homepage_text_content">
                    <div id="App_homepage_text_line"></div>
                    <div id="App_homepage_text_announcements">
                        <h2>
                            <Link to="newsroom/messages">
                                Messages
                            </Link>
                        </h2>
                        <div id="App_homepage_ann_container">
                            { this.state.messages }
                        </div>
                    </div>
                    <div id="App_homepage_text_news">
                        <h2>
                            <Link to="newsroom/news">
                                News
                            </Link>
                        </h2>
                        <div id="App_homepage_news_container">
                            { this.state.news }
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
