import React from "react";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Csr extends React.Component {
	render(){
		return(
			<div class="component-page-company-csr">
                <h1 class="App_section_text_title">
                    <span class="bold">Our company</span><br />CSR
                </h1>
                <p>
                    In 2012, the Group decided to support two talented artists –
                    Tomasz Alen Kopera and Adam Łożykowski. Its efforts led to
                    establishing a company - Art and Prestige - and the associated
                    on-line service - Art&amp;Prestige (<a href="http://www.artandprestige.com"
                    target="_blank">www.artandprestige.com</a>). The core business
                    of the Art and Prestige company is domestic and international
                    promotion and sales of works created by the two artists.<br />

                    The board of Data Invest decided to take up this project out
                    of concern for Polish modern art – which has immense potential
                    but faces all too many obstacles and adversities in trying to
                    make itself known to the world.
                </p>
                <p style={{ textAlign: 'center' }}>
                    <a href="http://www.artandprestige.com" target="_blank">
                        <img alt="" src="images/uploads/art_and_prestige.jpg"
                            style={{ width: '231px', height: '104px' }} />
                    </a>
                </p>
            </div>
		);
	}
}
