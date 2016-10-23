import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Featurette extends React.Component {
    render(){
		return(
            <div class="app_main_center_left_news_entry" class="component-page-newsroom-component-featurette">
                <div class="app_main_center_left_news_entry_separator"></div>
                <div class="app_main_center_left_news_entry_content">
                    <span class="app_main_center_left_news_entry_date">{ this.props.datePosted }</span>
                    <div class="app_main_center_left_news_entry_title">
                        <h2>
                            <Link to={ this.props.path }>{ this.props.title }</Link>
                        </h2>
                    </div>
                    <div class="app_main_center_left_news_entry_separator_top"></div>
                    <div class="app_main_center_left_news_entry_content_text">
                        <div class="app_main_center_left_news_entry_content_image">
                            <img src={ this.props.thumbnail } />
                        </div>
                        <p>
                            { this.props.excerpt }
                        </p>
                    </div>
                </div>
                <div class="app_main_center_left_news_entry_separator"></div>
                <div class="app_main_center_left_news_entry_line"></div>
                <div class="app_main_center_left_news_entry_separator"></div>
            </div>
		);
	}
}
