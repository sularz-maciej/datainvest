import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class CookieConsent extends React.Component {
    render(){
		return(
            <div id="global-cookie-info">
                <div id="global-cookie-info-text">
                    This site requires cookies for proper work. By continuing
                    to use this site you are agreeing to our cookies policy.
                    <Link to="legal/cookies-policy">
                        <b>Go to cookies policy</b>
                    </Link>. <span id="close-cookie-info"
                        style={{ cursor: 'pointer', margin: 'auto' }}><b>Close it</b>
                    </span>
                </div>
            </div>
		);
	}
}
