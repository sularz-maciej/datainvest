// Utilising ES6 features that will be transpiled down by babel

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
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from "react-router"

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
import NewsroomNews from "./pages/newsroom/News";
import NewsroomMessages from "./pages/newsroom/Messages";

import TermsOfUse from "./pages/TermsOfUse";
import TrademarkNotice from "./pages/TrademarkNotice";
import CookiesPolicy from "./pages/CookiesPolicy";

// Instantiating the App
const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Index}></IndexRoute>
            {/* Main Menu Routes */}
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
                <Route path="news" component={NewsroomNews}></Route>
                <Route path="messages" component={NewsroomMessages}></Route>
            </Route>
            {/* Footer Menu Routes */}
            <Route path="terms-of-use" component={TermsOfUse}></Route>
            <Route path="trademark-notice" component={TrademarkNotice}></Route>
            <Route path="cookies-policy" component={CookiesPolicy}></Route>
        </Route>
    </Router>,
app);
