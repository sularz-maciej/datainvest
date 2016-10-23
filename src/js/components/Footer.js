import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Footer extends React.Component {
	render(){
		return(
            <div id="App_footer_container" class="component-footer">
                <div id="App_footer_content">
                    <div id="App_footer_menu">
                        <ul class="RuzamMenuBundle_footer_menu">
                            <li><Link to="legal/terms-of-use">Terms of use</Link></li>
                            <li><Link to="legal/trademark-notice">Trademark notice</Link></li>
                            <li><Link to="legal/cookies-policy">Cookies policy</Link></li>
                            <li><Link to="company/grants">Grants</Link></li>
                        </ul>
                    </div>
                    <div id="App_footer_copyright">
                        © 2015 DataInvest, All Rights Reserved. Made in Poland.
                    </div>
                    <ul class="App_footer_social">
                        <li>
                            <a href="https://twitter.com/DATASPACEPL" class="App_social_twitter" title="Our Twitter" target="_blank"></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/pages/DATASPACE/456702187756370" class="App_social_facebook" title="Our Twitter" target="_blank"></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/data-invest?trk=biz-companies-cym" class="App_social_linkedin" title="Our Twitter" target="_blank"></a>
                        </li>
                    </ul>
                </div>
            </div>
		);
	}
}
