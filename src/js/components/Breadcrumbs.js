import React from "react";
import { Link } from "react-router";
import { capitalize, compact, split } from "lodash";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Breadcrumbs extends React.Component {

    /*
     * Dynamically creates breadcrumbs based on 'this.props.location.pathname'
     *
     * NOTE:
     * To make the last breadcrumb active simply set an attribute 'enableLastLink'
     * in the Breadcrumbs component like so:
     *
     * <Breadcrumbs path="this/leads/some-where" enableLastLink />
     *
     * IMPORTANT:
     * Currently only supports the pretty links to separate the words by a dash
     * character '-'. Will not work with underscores nor any other separator!
     *
     * The url must follow this pattern:
     * http://domain.name/path/to-a-very/long/article
     *
     *
     * TODO: Change the way that name is generated in case of urls that allow
     *       the use of the slug. Currently it will generate names like the
     *       example below:
     *
     *       Home / News / Awesome Article 2
     *
     *       It is possible because url path is directly being transformed into
     *       breadcrumb name. To solve that we should use title property of the
     *       article instead of the slug.
     */
    getArrayOfCrumbLinks(){
        // Storres current path passed down via attribute
        let path = this.props.path;
        // Allows to enable/disable the last breadcrumb
        let enableLastLink = this.props.enableLastLink | false;
        // Converts the path into an array and removes empty elements
        let crumbs = compact( split( path, '/' ) );
        // Used to return an array of react components
        let crumbsComponents = [];
        // Stores the url used to navigate to a particular crumb
        let linkUrl;

        /*
         * I decided to use a for loop to itterate through each breadcrumb. It
         * occured to me as the cleanest and least confusing way to write it.
         * Should make the most sense in case this file was revisited in the
         * future :-)
         */
        for(let i = 0; i < crumbs.length; i++){
            // Used in the for loop to assign currently itterated element
            let currentCrumb = crumbs[i];
            // Stores the name of the a element
            let linkName = capitalize(currentCrumb);
            // Stores a unique key for the crumbComponent
            let key = currentCrumb + "-" + Date.now();

            // If the link name has multiple parts, split them apart and capitalize.
            if(linkName.indexOf('-') > 0){
                linkName = linkName.split('-').map((x) => capitalize(x)).join(" ");
            }

            // Builds the url for each crumb, it is passed to the <Link> element
            if(!linkUrl) linkUrl = currentCrumb;
            else linkUrl += "/" + currentCrumb;

            /*
             * When we reach the very last crumb we don't set it as a link,
             * just print it's name instead.
             */
            if(i == crumbs.length - 1 && !enableLastLink){
                crumbsComponents.push(<li key={ key }>{ linkName }</li>);
            }else{
                crumbsComponents.push(<li key={ key }><Link to={ linkUrl }>{ linkName }</Link></li>);
            }
        }

        /*
         * Adds the very first breadcrumb that points to the homepage
         * IMPORTANT:
         * There must be a redirection set up in the Routes in order
         * for it to work!
         */
        crumbsComponents.unshift(<li key={"home"+Date.now()}><Link to="home">Home</Link></li>);

        /*
         * Return an array of React components. This way we can simply just
         * execute the function in the render() method and React will know
         * what to do! Just brilliant! Love it ;-)
         */
        return crumbsComponents;
    }

	render(){
		return(
            <div id="App_breadcrumb_container" class="component-breadcrumbs">
                <div id="App_breadcrumb_content">
                    <ul id="ruzam_breadcrumbs" class="ruzam_breadcrumb">
                        { this.getArrayOfCrumbLinks() }
                    </ul>
                </div>
            </div>
		);
	}
}
