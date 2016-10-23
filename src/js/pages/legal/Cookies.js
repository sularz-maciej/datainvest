import React from "react";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Cookies extends React.Component {
	render(){
		return(
            <div class="component-page-legal-cookies-policy">
                <h1 class="App_section_text_title">
                    <span class="bold">Terms</span><br />Cookies policy
                </h1>
                <ol style={{ listStyleType: 'decimal', overflow: 'hidden', display: 'block', paddingLeft: '20px' }}>
                	<li>
                		Cookies are pieces of information that are stored in a
                        website user’s terminal equipment by means of software
                        application while the user is using the website.
                    </li>
                	<li>
                		www.datainvest.pl does not automatically record information
                        about individual users, except for information included
                        in cookies themselves.
                    </li>
                	<li>
                		Cookies carry the name of the issuing website, the time
                        they have been stored for in a user’s terminal equipment
                        and unique identification numbers.
                    </li>
                	<li>
                		The website operator Data Invest Spółka z ograniczoną
                        odpowiedzialnością s.k.a., seated at ul. Włocławska 167,
                         87-100 Toruń, sends cookies to the website user’s
                         terminal equipment and gains access to them.
                     </li>
                	 <li>
                		www.datainvest.pl uses the following types of cookies:
                		<ul>
                			<li>
                				"access" cookies" – they make it possible to get
                                access to the services available on the website;
                            </li>
                			<li>
                				"analytical" cookies" – they make it possible to
                                collect information on what the webpages of the
                                website are used for;
                            </li>
                			<li>
                				"functional" cookies – they make it possible to
                                “remember” the interface settings picked by the user.
                            </li>
                		</ul>
                	</li>
                	<li>
                		Internet browsers allow for default storing cookies in
                        the user’s terminal equipment. The website users can change
                        the settings of the cookies (at any time) and block the
                        recording of cookies in their terminal equipment.The website
                        operator informs that blocking cookies may affect the usability
                        of the website and it can make it impossible to use the website
                        functions that have been picked. More information on cookies
                        is available in the “Help” section of the user’s internet
                        browser.
                    </li>
                </ol>
            </div>
		);
	}
}
