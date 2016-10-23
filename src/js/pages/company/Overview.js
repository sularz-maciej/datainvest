import React from "react";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Overview extends React.Component {
	render(){
		return(
			<div class="component-page-company-overview">
                <h1 class="App_section_text_title">
                    <span class="bold">Our company</span><br />Overview
                </h1>
                <h2 class="App_section_text_subtitle">
                    Data Invest is a high-tech company based in Toruń, Poland.
                    We offer cutting edge technologies, including big data,
                    high performance computing and cloud solutions.
                </h2>
                <p>
                    We believe that data acquisition, processing and management
                    is becoming an ultimate source of competitive advantage in
                    current turbulent markets. We want to be at the forefront of
                    this revolution. Our business is divided into 3 divisions:
                </p>
                <ul>
                    <li>
                        <strong>Data Space</strong> – sophisticated,
                            top-tier 3000 m Data Center located in
                            Toruń, Poland
                    </li>
                    <li>
                        <strong>Data Lab</strong> – place where the clever
                            data management ideas are born every day
                    </li>
                    <li>
                        <strong>Data Ventures</strong> – corporate venture
                            capital fund searching for bright
                            entrepreneurs with revolutionary ideas
                    </li>
                    </ul>
                    <p>
                        The company was founded in 2009 as Markom Invest
                        Sp. z o.o. In 2013 it was rebranded into Data Invest
                        Sp. z o.o. S.K.A. and started execution of a dynamic
                        growth strategy based on state-of-art technologies
                        and R&amp;D facilities.
                    </p>
                    <p>
                        &nbsp;
                    </p>
                    <p>
                        <img alt="" src="images/uploads/thumb_16_news_small.jpeg" style={{'maxWidth': '149px'}} />
                    </p>
                    <p>
                        We are pleased to announce that the company Data
                        Invest sp. z o.o. s.k.a. has the quality management
                        certificate ISO 9001:2008 in the scope of: elaborating solutions
                        in the field of cloud computing, high accessibility,
                        hpc and innovative it/ict solutions in the area of research
                        and development, prototype projects, industrial research,
                        applied, basic and precompetitive solutions, natural
                        sciences and technology.
                    </p>
                    <p>
                        &nbsp;
                    </p>
                    <p  class="text-center">
                        <img alt="" src="images/uploads/Bez%C2%A0tytu%C5%82u.png" style={{'maxWidth': '300px'}} />
                        </p>
                    <p class="text-center">
                        &nbsp;
                    </p>
                    <p>
                        Data Invest Spółka z o.o. s.k.a. has the status
                        of Research and Development center granted by the
                        Polish Minister of Economy on 30th September.
                        <span id="result_box">The status has been</span>
                         granted under the Act of certain forms of support
                         for innovation activities from May 30, 2008.
                     </p>
                    <p class="text-center">
                        <img alt="" src="images/uploads/brcenter.png"
                            style={{'maxWidth': '300px'}} />
                    </p>
            </div>
		);
	}
}
