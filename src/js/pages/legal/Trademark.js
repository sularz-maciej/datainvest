import React from "react";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Trademark extends React.Component {
	render(){
		return(
            <div class="component-page-legal-trademark-notice">
                <h1 class="App_section_text_title">
                    <span class="bold">Terms</span><br />Trademark notice
                </h1>
                <p>
                    All trademarks, service marks, trade names, and logos
                    displayed on this Website (collectively referred to as the
                    "Marks") are proprietary to Data Invest or their respective
                    owners, and are protected by E.U. and international
                    trademark laws. Any use of the Marks, or any other Marks
                    owned by or licensed to Data Invest Spółka z ograniczoną 
                    odpowiedzialnością s.k.a., without Data Invest Spółka z
                    ograniczoną odpowiedzialnością s.k.a. express written consent,
                    is strictly prohibited.
                </p>
	        </div>
		);
	}
}
