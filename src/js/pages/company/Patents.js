import React from "react";

// by exporting this class we can require it in client.js
// https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export#Using_the_default_export
export default class Patents extends React.Component {
    /**
     * TODO: Convert this into individual components, each patent would be a
     *       self contained unit with a modal window inside it that reaveals
     *       on click. DO it the React way! ;-)
     */
	render(){
		return(
			<div class="component-page-company-patents">
                <h1 class="App_section_text_title">
                    <span class="bold">Our company</span><br />Patents
                </h1>
                <p>
                    Data Invest is involved in the development of advanced technologies,
                    as well as their effective implementation in the business.
                    Below there are the technologies that are patent pending:
                </p>
                <div class="App_content_offer_container">
                	<div class="App_content_offer_row">
                		<div class="App_content_offer_item overlay" id="patent_1">
                			<h4>
                				<a class="disabled" href="/sales_specialist"
                                    rel="#overlay">Patent 1</a>
                            </h4>
                			<p>
                				The way of analyzing and the mechanism for
                                analyzing synchronous signals dependable on time
                            </p>
                		</div>
                		<div class="App_content_offer_item_empty">&nbsp;</div>
                		<div class="App_content_offer_item overlay" id="patent_2">
                			<h4>
                				<a class="disabled" href="/sales_specialist"
                                    rel="#overlay">Patent 2</a>
                            </h4>
                			<p>
                				A way of structuring and functioning of metadata
                                in semantic networks
                            </p>
                		</div>
                		<div class="App_content_offer_item_empty">&nbsp;</div>
                		<div class="App_content_offer_item overlay" id="patent_3">
                			<h4>
                				<a class="disabled" href="/sales_specialist"
                                    rel="#overlay">Patent 3</a>
                            </h4>
                			<p>
                				Manner of Data-Perspectives-Logic-Views-Templates
                                (DPLVT)
                            </p>
                		</div>
                	</div>
                	<div class="App_content_offer_row_empty">&nbsp;</div>
                	<div class="App_content_offer_row">
                		<div class="App_content_offer_item overlay" id="patent_4">
                			<h4>
                				<a class="disabled" href="/sales_specialist"
                                    rel="#overlay">Patent 4</a>
                            </h4>
                			<p>
                				Way of evolution algorithms popularization with
                                the use of coding genotype of individual neuron nets
                            </p>
                		</div>
                		<div class="App_content_offer_item_empty">&nbsp;</div>
                		<div class="App_content_offer_item overlay" id="patent_5">
                			<h4>
                				<a class="disabled" href="/sales_specialist"
                                    rel="#overlay">Patent 5</a>
                            </h4>
                			<p>
                				Way of processing genetic algorithms equipped
                                with individual neuron nets with the use of
                                many units GPGPU
                            </p>
                		</div>
                		<div class="App_content_offer_item_empty">&nbsp;</div>
                	</div>
                </div>
                <div class="RuzamCmsBundle_page_8_patent_description"
                    id="patent_1_desc" style={{ display: 'none' }}>
                	The patent connected with huge data set processing in the
                    time comparable to super computers with simultaneous saving
                    costs related both to processor price ( simultaneous use of
                    GP and CP units ) and servers that they operate on and
                    to energy use, too. Utility of counting techniques of this
                    kind will let modern counting methods develop, including
                    Artificial Intelligence algorithms because of high parallelism
                    of counting processes. Patent rights guarantee the way
                    adjusted to accounting units ( GPU ) while analyzing the
                    mass inflow of data in the real time ( for example: stock
                    quotations, currency fluctuation rate, stock rating ).
                    Patents may become useful in nonfinancial matters ( medicine,
                    bio – and nano – technology, neural science, seismography, etc ).
                    Examples of areas of business usage:
                	<ul>
                		<li>
                			Analyzing of huge finance data set, for example from
                            capital markets, raw material markets, etc.
                        </li>
                		<li>
                			Fast analyses of huge data streams related to sale,
                            currency and price fluctuation, number of various factors
                            and parameters ( not only financial but technical in
                            electro – engineering networks ).
                        </li>
                		<li>
                			Analyses of various dynamic models ( strictly dependant
                            on time or other parameter ), their simulation ( also in
                            the pattern ‘what –if “ – simultaneous counting of many
                            alternatives ), e.g. financial models, market simulations,
                            risk assessment, marking out some dependency between
                            changeable in time parameters, grid protection from excessive
                            load, transport processes’ optimization, wind – power
                            plants’ simulations, etc ).
                        </li>
                		<li>
                			Providing other analytic systems with great accounting
                            capacity adjusted to mass collateral assessments
                            ( which means that it allows to make a great deal
                            of transactions in the same time ).
                        </li>
                		<li>
                			Signal analyses, e.g. medical ( coming from
                            diagnostic equipment ) and their processing in
                            order to find dependency and visualization too.
                        </li>
                	</ul>
                </div>
                <div class="RuzamCmsBundle_page_8_patent_description"
                    id="patent_2_desc" style={{ display: 'none' }}>
                	&nbsp; A patent lets data bases be built. These data bases
                    contain additional information ( metadata ) connected with
                    stuff intended for mobile phones and other mobile equipment.
                    Stuff mentioned here: e.g. rings, wallpapers, games, programs.
                    Whereas the metadata are: descriptions, target groups, sale
                    efficiency, association to other problems. The core of patent
                    rights is the way of storing ( as a semantic net ) the additional
                    data ( metadata ), allowing for intelligent analyzing with the use
                    of Artificial Intelligence methods ( e.g. classification, heuristic
                    deduction, genetic algorithms, decisive trees ). To examine and
                    predict consumer trends, an in-coming offered way of structuring
                    metadata will be used.<br />
                	Business usage:
                	<ul>
                		<li>
                			Fast processing of metadata related to content
                            ( in the real time ) in order to adjust to consumer
                            needs as fast as possible, e.g. joining various
                            contents into lower price packages.
                        </li>
                		<li>
                			The use of parallel units allows of multidimensional
                            analysis which are better than ”classical” BI with
                            regards to speed, automatic “understanding” of the
                            meaning of analyzed content ( the content is semantic,
                            not only numeral ) and pursuit of optimization
                            processes in an inaccessible way with explicit
                            approach ( which is in classical BI ).
                        </li>
                		<li>
                			Possible cooperation with mobile phone software in
                            order to examine consumer behavior and reach target
                            consumer groups and, what’s more possible, the process
                            of building of appropriate consumer archeotypes.
                        </li>
                	</ul>
                </div>
                <div class="RuzamCmsBundle_page_8_patent_description"
                    id="patent_3_desc" style={{ display: 'none' }}>
                	&nbsp; The core of the invention is the manner of building
                    program applications with the use of additional data layer
                    which allows for preventing intact structure and content of
                    basic data layer while changing the logic of software
                    action. In a standard model of creating programming applications
                    ( Model-View-Controller) it is assumed that a model layer
                    also includes access to data and enables operating on them.
                    Hence it can be treated as data connection, operations carried
                    on them and their structure with application logics.
                    The problem appears when making changes in logics that force
                    modification of data layer ( usually on the level of data
                    base structure ). It reflects in significant costs related
                    to application development, particularly if software is
                    complicated and present on the market for a longer time.
                    The aim of building programming application allowing for
                    essential extension of profitability periods of making their
                    multiple modifications, particularly beyond achievable time
                    of product life. The aim was realized through the elaboration
                    of the manner of building programming applications in the view
                    of multilayer model comprising data, perspectives, logic,
                    views and templates.<br /><br />
                	Business utility:
                	<ul>
                		<li>
                			Making changes in software without the necessity to
                            modify the structure and content of source data which
                            results in savings in project.
                        </li>
                		<li>
                			Enlarging flexibility of building IT solutions, which
                            allows for future solid reconstruction of software
                            logic.
                        </li>
                		<li>
                			Possibility to build separate data layers and
                            perspectives layers by independent programming teams,
                            which influences cutting the time of creating an
                            application and simultaneously the costs of its
                            creation and reconstruction.
                        </li>
                	</ul>
                </div>
                <div class="RuzamCmsBundle_page_8_patent_description"
                    id="patent_4_desc" style={{ display: 'none' }}>
                	Genetic algorithms ( in other words evolution ) are one of
                    the most advanced method of Artificial Intelligence ( AI ).
                    They are used to solve ambiguous problems ( usually complex
                    and insufficiently determined ). The principle of the
                    patent is the use of genetic code and natural selection
                    rules ( their virtual counterparts are “sewed” in particular
                    genetic algorithms and the environment of their action ).
                    Algorithms, that solve some part of a problem, are associated
                    among themselves ( genotype population ), the weaker are removed
                    ( natural selection ). Next “generations” of algorithms cope
                    with a problem better and better and bring into effect their
                    whole solution or come very near to their solution ( when optimal
                    solution isn’t achievable ). Patent “reinforces” genetic
                    algorithms with another object of AI – neuron nets, which are
                    also coded with the use of appropriate part of virtual genotype.
                    Genotype, characteristic for genetic algorithms, is then used
                    for developing and coding neuron nets ( here in another
                        generations partially trained nets are multiplied, not
                        algorithms in explicite form ).<br /><br />
                	Business utility:
                	<ul>
                		<li>
                			Solving complex calculating tasks on which particular
                            algorithms are not created, i.e. investment portfolio
                            optimization, logistic problems, risk management,
                            complex optimizing processes, searching information,
                            facts association in expert systems etc.
                        </li>
                		<li>
                			Social consumer behaviors’ simulations, fashion
                            phenomena and their passing, etc., what’s particularly
                            important when building competition dominance on the
                            market dominated by consumers’ preferences and opinions.
                        </li>
                		<li>
                			Scanning huge data and metadata sets and finding on
                            their bases existing dependence, usually invisible
                            in any simplified set.
                        </li>
                	</ul>
                </div>
                <div class="RuzamCmsBundle_page_8_patent_description"
                    id="patent_5_desc" style={{ display: 'none' }}>
                	&nbsp; This patent is a developing of the previous one with
                    the use of specialist multi-spinal processors ( GPGPU ),
                    originally used for graphic operations. The data processing
                    manner with the use of these processes much differs from
                    classical methods. Hence the method of genetic algorithms
                    software equipped with individual neuron nets using multi –
                    spinal processors has been worked out. It allows not only
                    for high acceleration of counting but it enables rational
                    savings connected with lower cost of purchase of calculating
                    power and its higher efficiency for energy consumption.
                    Using the environment for parallel/simultaneous calculating,
                    that GPGPU items are adjusted to, is very significant. Using
                    GPGPU gives radical advantage because i.e. neuron calculating
                    use mass parallel but in most cases simple operations. So
                    the amount of simpler ( and cheaper ) calculating items is
                    more important than calculating power of single spinals as
                    it happens in case of classical CPU which are used in
                    relatively expensive super computers and clusters.<br /><br />
                	Business utility:
                	<ul>
                		<li>
                			As for patent entitled “Way of evolution algorithms
                            popularization with the use of coding genotype of
                            individual neuron nets”, however with a difference
                            that calculating power of parallel items is used.
                        </li>
                	</ul>
                </div>
    		</div>
		);
	}
}
