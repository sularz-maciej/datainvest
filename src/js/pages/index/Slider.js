import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Slider extends React.Component {
    render(){
		return(
            <div id="myCarousel" class="carousel slide" data-interval="5000" data-wrap="true" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1" ></li>
                    <li data-target="#myCarousel" data-slide-to="2" ></li>
                    <li data-target="#myCarousel" data-slide-to="3" ></li>
                    <li data-target="#myCarousel" data-slide-to="4" ></li>
                    <li data-target="#myCarousel" data-slide-to="5" ></li>
                </ol>
                <div class="carousel-inner">
                    <div class="item active" style={{ backgroundImage: 'url(images/slider/ed24d275928f41d98abfd91e5757853a.jpeg)' }}>
                        <div class="container">
                            <div class="row bottom-caption">
                                <h1>
                                    REINVENTING DATA <br /> ANALYTICS TECHNOLOGIES
                                </h1>
                                <div class="slide-top-spacer"></div>
                                <p class="text-center">
                                    <a class="btn btn-default btn-slide"
                                        href="javascript:anchor(&#039;#MenuBlock&#039;)">
                                        Explore our Business <span class="cheveron-right-small">&nbsp;</span>
                                    </a><br />
                                    <span class="btn-slide-caption">&nbsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item " style={{ backgroundImage: 'url(images/slider/f36f0b2a51ec2e2b6ad7147fe64bf51b.jpeg)' }}>
                        <div class="container">
                            <div class="row bottom-caption">
                                <h1>
                                    Global expierience <br /> in DDoS protection
                                </h1>
                                <div class="slide-top-spacer"></div>
                                <p class="text-center">
                                    <a class="btn btn-default btn-slide"
                                        href="https://dataspace.pl/anty-ddos/">
                                        Go to Anti DDoS <span class="cheveron-right-small">&nbsp;</span>
                                    </a><br />
                                    <span class="btn-slide-caption">&nbsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item " style={{ backgroundImage: 'url(images/slider/aece7884b08fde9586c9cad3bb96ef8a.jpeg)' }}>
                        <div class="container">
                            <div class="row bottom-caption">
                                <h1>
                                    Big Data <br /> for financial markets
                                </h1>
                                <div class="slide-top-spacer"></div>
                                <p class="text-center">
                                    <a class="btn btn-default btn-slide"
                                        href="http://turbineanalytics.com/en/">
                                        Go to TURBINE <span class="cheveron-right-small">&nbsp;</span>
                                    </a><br />
                                    <span class="btn-slide-caption">&nbsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item " style={{ backgroundImage: 'url(images/slider/a646ea1e8866a7779efd90a73e999b1f.jpeg)' }}>
                        <div class="container">
                            <div class="row bottom-caption">
                                <h1>
                                    Source of Bitcoin liquidity <br/> built with a robust technology
                                </h1>
                                <div class="slide-top-spacer"></div>
                                <p class="text-center">
                                    <a class="btn btn-default btn-slide"
                                        href="http://www.bazaarbt.com/">
                                        Go to BAZAAR <span class="cheveron-right-small">&nbsp;</span>
                                    </a><br />
                                    <span class="btn-slide-caption">&nbsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item " style={{ backgroundImage: 'url(images/slider/d279c4b67bc7b268005c7fbd5e0752db.jpeg)' }}>
                        <div class="container">
                            <div class="row bottom-caption">
                                <h1>
                                    Cutting-edge droneware<br />technologies
                                </h1>
                                <div class="slide-top-spacer"></div>
                                <p class="text-center">
                                    <a class="btn btn-default btn-slide"
                                        href="http://airbot.io/">Go to AIRBOT <span class="cheveron-right-small">&nbsp;</span>
                                    </a><br />
                                    <span class="btn-slide-caption">&nbsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item " style={{ backgroundImage: 'url(images/slider/f8cb2ff61df9b82055094d567bc54e15.jpeg)' }}>
                        <div class="container">
                            <div class="row bottom-caption">
                                <h1>
                                    AT THE FOREFRONT <br /> OF BIG DATA REVOLUTION
                                </h1>
                                <div class="slide-top-spacer"></div>
                                <p class="text-center">
                                    <a class="btn btn-default btn-slide"
                                        href="http://numerix.pl/">
                                        Go to NUMERIX <span class="cheveron-right-small">&nbsp;</span>
                                    </a><br />
                                    <span class="btn-slide-caption">&nbsp;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <img src="images/arrow-left.png" />
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <img src="images/arrow-right.png" />
                </a>
            </div>
		);
	}
}