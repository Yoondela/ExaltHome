import PageTitle from "../../../components/page-title";

const PageTitleContainer = () => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <PageTitle
                            classOption="page-title-content content-style2 text-center"
                            subTitle="About us"
                            title="We Are Exalt Home"
                        />
                    </div>
                </div>
            </div>
            <div className="thumb" data-aos="fade-up" data-aos-delay="300">
                <img
                    className="w-100"
                    src={process.env.PUBLIC_URL + "./img/about/about-02.avif"}
                    alt="Exalt office"
                />
            </div>
        </div>
    );
};

export default PageTitleContainer;
