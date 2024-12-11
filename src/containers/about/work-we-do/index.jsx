import { Link } from "react-router-dom";
import AboutData from "../../../data/global/about.json";
import ServicesData from "../../../data/global/services.json";

const WorkWeDo = () => {
    return (
        <div className="service-area">
            <div className="container about-service-container">
                <div className="row">
                    {ServicesData.map((item) => (
                        <div
                            key={item.id}
                            className={
                                "service-data-item col-lg-8 col-xl-8 mb-sm-50 mb-md-70 service-${item.id}"
                            }
                            data-aos="fade-up"
                        >
                            <h2 className="service-item-title">{item.title}</h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item.excerpt,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkWeDo;
