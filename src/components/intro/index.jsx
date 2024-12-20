import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Intro = ({ data }) => {
    return (
        <div
            className="intro-section section overlay"
            style={{
                backgroundImage: `url(${
                    process.env.PUBLIC_URL + data.backgroundImage
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                    <div className="col align-self-center">
                        <div className="intro-content">
                            {/* inspire 2026 */}
                            <span className="sub-title text-3xl weight-300 text-white">
                                {data.subTitle}
                            </span>
                            {/* what we do */}
                            <h2 className="title text-3xl weight-300 text-[var(--theme-color)]">
                                {data.title}
                            </h2>
                            {/* smaller text */}
                            <div className="desc text-2xl text-white">
                                <p>{data.desc}</p>
                            </div>
                            {/* book/explore button */}
                            <Link
                                to={process.env.PUBLIC_URL + "/"}
                                className="intro-btn"
                            >
                                {data.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
