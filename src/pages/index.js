import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import QuteContainer from "../containers/global/global-qute/index.jsx";
import Homecontent from "../components/home-content/index.jsx";
import IntroContainer from "../containers/home/intro/index.jsx";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="exalt – Photography React JS Template" />
                <div className="wrapper home-default-wrapper">
                    <Header />
                    <IntroContainer />
                    <div className="main-content">
                        <QuteContainer />
                        <Homecontent></Homecontent>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
