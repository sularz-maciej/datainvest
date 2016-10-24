import React from "react";
import { Link } from "react-router";
import { includes, split, compact } from "lodash";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Layout extends React.Component {
    /*
     * Decides wether to display Breadcrumbs component
     * based on the current path.
     */
    handleBreadcrumbs(){
        let excludeBreadcrumbsFromPaths = ['/'];

        if(!includes(excludeBreadcrumbsFromPaths, this.props.location.pathname)){
            return <Breadcrumbs path={this.props.location.pathname} />;
        }

        return;
    }
	render(){
		return(
            <div class="component-page-layout">
                <Header />
                { this.handleBreadcrumbs() }
                { this.props.children }
                <Footer />
            </div>
		);
	}
}
