import React from "react";
import { Link } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Layout extends React.Component {
	render(){
		return(
            <div class="component-page-layout">
                <Header />
                { this.props.children }
                <Footer />
            </div>
		);
	}
}
