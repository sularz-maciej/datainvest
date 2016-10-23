import React from "react";
import { Link } from "react-router";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Index extends React.Component {
	render(){
		return(
            <div class="component-page-index">
                <div id="App_homepage_background_container">
                    <div class="slide-top-container">
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
</div>
<a name="#MenuBlock"></a>
<div id="App_homepage_title_container">
    <div id="App_homepage_title_content">
        <div id="App_homepage_intro_title">
            <h2>Data Invest is a high-tech company based in Toruń,
                Poland. We offer cutting edge technologies,
                including IT Security (DDoS/Application Protection),
                Big Data and Cloud Solutions.
            </h2>
        </div>
    </div>
</div>
<div id="App_homepage_divisions_containter">
    <div id="App_homepage_division_background"></div>
    <div id="App_homepage_divisions_content">
        <ul id="App_homepage_intro_divisions">
            <li>
                <p>
                    <Link to="business/dataspace">
                        <img src="images/app_logo_data_space.png" /><br /><br />
                        Sophisticated, top-tier 3000 m Data Center located in Toruń, Poland
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link to="business/datalab">
                        <img src="images/app_logo_data_lab.png" /><br /><br />
                        Place where clever data management ideas are born every day
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link to="business/dataventures">
                        <img src="images/app_logo_data_ventures.png" /><br /><br />
                        Corporate venture capital fund searching for bright entrepreneurs with revolutionary ideas
                    </Link>
                </p>
            </li>
        </ul>
    </div>
</div>
</div>
<div id="App_homepage_intro_containter">
    <div id="App_homepage_intro_content">
        <h3>
            We believe that data acquisition, processing and
            management become an ultimate source of competitive
            advantage. We want to be with you at the forefront
            of this revolution.
        </h3>
        <Link to="company/overview" id="App_homepage_intro_link">
            Get to know more about Data Invest &gt;
        </Link>
    </div>
</div>
<div id="App_homepage_text_container">
    <div id="App_homepage_text_content">
        <div id="App_homepage_text_line"></div>
        <div id="App_homepage_text_announcements">
            <h2>
                <Link to="newsroom/messages">
                    Messages
                </Link>
            </h2>
            <div id="App_homepage_ann_container">
                <div class="App_homepage_ann_single">
                    <h2>
                        <a href="/news/8,grants" title="Grants">Grants</a>
                    </h2>
                    <p>
                        Auction results for project "The purchase
                        of infrastructure and software suppor the
                        centre for Research and Development in
                        the field of AI".
                    </p>
                </div>
                <div class="App_homepage_ann_single">
                    <h2>
                        <a href="/news/7,auction_results" title="Auction results">Auction results</a>
                    </h2>
                    <p>
                        Auction results for measure 3 for project
                        „The purchase of infrastructure and software
                        suppor the centre for research and development
                        in the field of AI”.
                    </p>
                </div>
            </div>
        </div>
        <div id="App_homepage_text_news">
            <h2>
                <Link to="newsroom/news">
                    News
                </Link>
            </h2>
            <div id="App_homepage_news_container">
                <div class="App_homepage_news_single">
                    <h2>
                        <a href="/news/15,nadanie_statusu_centrum_badawczo_rozwojowego"
                            title="Research &amp; Development Center Status">
                            Research &amp; Development Center Status
                        </a>
                    </h2>
                    <p>
                        <span id="result_box">We are pleased to inform that
                            company </span>Data Invest Spółka z o.o. s.k.a. has
                            the status of Research and Development center granted
                            by the Polish Minister of Economy on 30th September.
                        </p>
                        <span class="App_homepage_news_single_date">08.10.2014</span>
                    </div>
                    <div class="App_homepage_news_single">
                        <h2>
                            <a href="/news/14,iso_certification" title="ISO Certification">ISO Certification</a>
                        </h2>
                        <p>
                            We are pleased to announce that the company Data
                            Invest sp. z o.o. s.k.a. obtained the quality
                            management certificate ISO 9001:2008 in the
                            scope of: elaborating solutions in the field
                            of cloud computing, high accessibility, hpc
                            and innovative it/ict solutions in the area
                            of research and development, prototype projects,
                            industrial research, applied, basic and precompetitive
                            solutions, natural sciences and technology.
                        </p>
                        <span class="App_homepage_news_single_date">08.05.2013</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="global-cookie-info">
        <div id="global-cookie-info-text">
            This site requires cookies for proper work. By continuing
            to use this site you are agreeing to our cookies policy.
            <a href="/cookies_policy" target="_blank">
                <b>Go to cookies policy</b>
            </a>.<br /><br />
            <span id="close-cookie-info" style={{ cursor: 'pointer', margin: 'auto' }}>
                <b>Close it</b>
            </span>
        </div>
    </div>
</div>
		);
	}
}
