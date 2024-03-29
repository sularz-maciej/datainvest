/**
 * NOTE: In this project I am using ES6 features that are transpiled down by
 *       babel. More info refer to the website:
 *       http://es6-features.org
 *
 * TODO: 1. Modularize the site:
 *              * especially the pages.
 *              * extract the content from the components - necessary for translation.
 *              * check scripts.js and enclose possible jQery scripts within.
 *                the component it relates to.
 *       2. DRY up the cpde a bit - come up helpers/utilities classes and
 *          exctract code duplication. It's not too bad though!
 *       3. Implement translation capabilities.
 *       4. Attach to a backend.
 *       5. Consider the use of Flux or Redux (in case of bigger apps) to handle
 *          data.
 *
 * DISCLAIMER: This project is for practice purposes only. I am not affiliated
 *             with the Data Invest Sp. z o.o. S.K.A. in any way, shape or form.
 *
 *             Likewise this is my first ever React.js app and some approaches
 *             might not be optimal.
 *
 *                                                            Maciej Sularz
 */

/**
 * Modules - Value Export/Import
 * http://es6-features.org/#ValueExportImport
 */
import React from "react";
import ReactDOM from "react-dom";
/**
 * Destructuring Assignment - Matching, Shorthand Notation
 * http://es6-features.org/#ObjectMatchingShorthandNotation
 */
import { Router, Route, Redirect, IndexRoute, IndexRedirect, hashHistory } from "react-router"

// Importing App components
import Layout from "./pages/Layout";

import Index from "./pages/Index";

import Company from "./pages/Company";
import CompanyOverview from "./pages/company/Overview";
import CompanyOffices from "./pages/company/Offices";
import CompanyGrants from "./pages/company/Grants";
import CompanyPatents from "./pages/company/Patents";
import CompanyCsr from "./pages/company/Csr";

import Business from "./pages/Business";
import BusinessOverview from "./pages/business/Overview";
import BusinessDatalab from "./pages/business/Datalab";
import BusinessDataspace from "./pages/business/Dataspace";
import BusinessDataventures from "./pages/business/Dataventures";

import Careers from "./pages/Careers";
import CareersOverview from "./pages/careers/Overview";
import CareersOpenPositions from "./pages/careers/OpenPositions";

import Contact from "./pages/Contact";

import Newsroom from "./pages/Newsroom";
import NewsroomList from "./pages/newsroom/List";
import NewsroomDetails from "./pages/newsroom/Details";

import Legal from "./pages/Legal";
import TermsOfUse from "./pages/legal/Terms";
import TrademarkNotice from "./pages/legal/Trademark";
import CookiesPolicy from "./pages/legal/Cookies";

// Instantiating the App
const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to='en' />
            <IndexRoute component={Index}></IndexRoute>
            {/* Main Menu Routes */}
            <Redirect from="home" to="/" />
            <Route path="company" component={Company}>
                <IndexRedirect to='overview' />
                <Route path="overview" component={CompanyOverview}></Route>
                <Route path="offices" component={CompanyOffices}></Route>
                <Route path="grants" component={CompanyGrants}></Route>
                <Route path="patents" component={CompanyPatents}></Route>
                <Route path="csr" component={CompanyCsr}></Route>
            </Route>
            <Route path="business" component={Business}>
                <IndexRedirect to='overview' />
                <Route path="overview" component={BusinessOverview}></Route>
                <Route path="dataspace" component={BusinessDataspace}></Route>
                <Route path="datalab" component={BusinessDatalab}></Route>
                <Route path="dataventures" component={BusinessDataventures}></Route>
            </Route>
            <Route path="careers" component={Careers}>
                <IndexRedirect to='overview' />
                <Route path="overview" component={CareersOverview}></Route>
                <Route path="open-positions" component={CareersOpenPositions}></Route>
            </Route>
            <Route path="contact" component={Contact}></Route>
            <Route path="newsroom" component={Newsroom}>
                <IndexRedirect to='news' />
                <Route path=":type" component={NewsroomList}></Route>
                <Route path=":type/:slug" component={NewsroomDetails}></Route>
            </Route>
            {/* Footer Menu Routes */}
            <Route path="legal" component={Legal}>
                <IndexRedirect to='terms' />
                <Route path="terms-of-use" component={TermsOfUse}></Route>
                <Route path="trademark-notice" component={TrademarkNotice}></Route>
                <Route path="cookies-policy" component={CookiesPolicy}></Route>
            </Route>
        </Route>
    </Router>,
app);
