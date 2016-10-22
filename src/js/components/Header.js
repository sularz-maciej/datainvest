import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Header extends React.Component {
	render(){
		return(
            <div id="App_header_container" class="component-header">
                <div id="App_header_content">
                    <div id="App_header_logo">
                        <Link to="/">
                            <img src="images/app_logo_xl.png" alt="Data Invest Sp. z o.o. S.K.A." id="App_site_logo" />
                        </Link>
                    </div>
                    <div id="App_header_menu">
                        <ul class="RuzamMenuBundle_Top-Menu">
                            <li class="RuzamMenuBundle_open_menu" id="RuzamMenuBundle_Top-Menu_21">
                                <Link to="company">Our company</Link>
                                <div class="RuzamMenuBundle_hidden_menu" id="RuzamMenuBundle_Top-Menu_21_hidden_menu">
                                    <ul class="RuzamMenuBundle_nested_items">
                                        <li>
                                            <Link to="company/overview">Overview</Link>
                                        </li>
                                        <li>
                                            <Link to="company/offices">Offices</Link>
                                        </li>
                                        <li>
                                            <Link to="company/grants">Grants</Link>
                                        </li>
                                        <li>
                                            <Link to="company/patents">Patents</Link>
                                        </li>
                                        <li>
                                            <Link to="company/csr">Csr</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="Top-Menu_separator">&nbsp;</li>
                            <li class="RuzamMenuBundle_open_menu" id="RuzamMenuBundle_Top-Menu_22">
                                <Link to="business">Our business</Link>
                                <div class="RuzamMenuBundle_hidden_menu" id="RuzamMenuBundle_Top-Menu_22_hidden_menu">
                                    <ul class="RuzamMenuBundle_nested_items">
                                        <li>
                                            <Link to="business/overview">Overview</Link>
                                        </li>
                                        <li>
                                            <Link to="business/dataspace">Dataspace</Link>
                                        </li>
                                        <li>
                                            <Link to="business/datalab">Datalab</Link>
                                        </li>
                                        <li>
                                            <Link to="business/dataventures">Dataventures</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="Top-Menu_separator">&nbsp;</li>
                            <li class="RuzamMenuBundle_open_menu" id="RuzamMenuBundle_Top-Menu_29">
                                <Link to="careers">Careers</Link>
                                <div class="RuzamMenuBundle_hidden_menu" id="RuzamMenuBundle_Top-Menu_29_hidden_menu">
                                    <ul class="RuzamMenuBundle_nested_items">
                                        <li>
                                            <Link to="careers/overview">Overview</Link>
                                        </li>
                                        <li>
                                            <Link to="careers/open-positions">Open Positions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="Top-Menu_separator">&nbsp;</li>
                            <li>
                                <Link to="contact">Contact</Link>
                            </li>
                            <li class="Top-Menu_separator">&nbsp;</li>
                            <li class="RuzamMenuBundle_open_menu" id="RuzamMenuBundle_Top-Menu_30">
                                <Link to="newsroom">Newsroom</Link>
                                <div class="RuzamMenuBundle_hidden_menu" id="RuzamMenuBundle_Top-Menu_30_hidden_menu">
                                    <ul class="RuzamMenuBundle_nested_items">
                                        <li>
                                            <Link to="newsroom/news">News</Link>
                                        </li>
                                        <li>
                                            <Link to="newsroom/messages">Messages</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="App_locale_switch">
                        <span><a href="/pl/">Polski</a></span>
                        <span class="selected"><a href="/">English</a></span>
                    </div>
                </div>
            </div>
		);
	}
}
