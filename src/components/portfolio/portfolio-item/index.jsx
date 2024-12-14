import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="single-portfolio">
            {/* Replace the thumbnail with custom content */}
            <div className="portfolio-info">
                <h3 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/portfolio-details/${portfolio.id}`
                        }
                    >
                        {portfolio.name}
                    </Link>
                </h3>
                <p className="desc">{portfolio.services}</p>
                {/* <div className="meta">
                    <span className="category">
                        Categories:{""}
                        {portfolio.categories.join(", ")}
                    </span>
                    <span className="date">Date: {portfolio.date}</span>
                </div> */}
            </div>

            {/* Optionally include a call-to-action or link */}
            <div className="cta">
                <Link
                    to={
                        process.env.PUBLIC_URL +
                        `/portfolio-details/${portfolio.id}`
                    }
                    className="btn-view-details"
                >
                    View Portfolio
                </Link>
            </div>
        </div>
    );
};

PortfolioItem.propTypes = {
    portfolio: PropTypes.object.isRequired,
};

export default PortfolioItem;
