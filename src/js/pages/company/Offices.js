import React from "react";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Offices extends React.Component {
	render(){
		return(
			<div class="component-page-company-offices">
                <h1 class="App_section_text_title">
                    <span class="bold">Our company</span><br />Offices
                </h1>
                <h2>
                    Toruń (Head Office)
                </h2>
                <p>
                    Włocławska 161<br />
                    87-100 Toruń,<br />
                    Poland
                </p>
                <p>
                    <a href="https://maps.google.pl/maps?q=W%C5%82oc%C5%82awska+167,+Toru%C5%84&amp;hl=pl&amp;ie=UTF8&amp;sll=52.222379,21.035782&amp;sspn=0.011029,0.033023&amp;oq=W%C5%82oc%C5%82awska+1&amp;hnear=W%C5%82oc%C5%82awska+167,+Toru%C5%84,+kujawsko-pomorskie&amp;t=m&amp;z=16&amp;iwloc=lyrftr:m,13056731588095571292,52.991398,18.666286" target="_blank">Show on a map</a>
                </p>
                <h2>
                    Warszawa (Sales Office)
                </h2>
                <p>
                    Rozbrat 6/17<br />
                    00-451 Warsaw,<br />
                    Poland</p>
                <p>
                    <a href="https://maps.google.pl/maps?q=Rozbrat+6%2F17,+Warszawa&amp;hl=pl&amp;sll=52.379853,17.441157&amp;sspn=5.627399,16.907959&amp;oq=Rozbrat+6%2F17&amp;hnear=Rozbrat+6,+Warszawa,+mazowieckie&amp;t=m&amp;z=16" target="_blank">Show on a map</a>
                </p>
                <h2>
                    Wrocław (Sales Office)
                </h2>
                <p>
                    Jana Ewangelisty Purkyniego 1<br />
                    50-155 Wrocław,<br />
                    Poland
                </p>
                <p>
                    <a href="https://www.google.pl/maps/place/Jana+Ewangelisty+Purkyniego+1,+Wroc%C5%82aw/@51.1101998,17.0396273,17z/data=!3m1!4b1!4m2!3m1!1s0x470fc277d23d4e59:0x16bc508fa423b4dc" target="_blank">Show on a map</a>
                </p>
            </div>
		);
	}
}
