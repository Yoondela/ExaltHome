import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation(); // Get the current path
    const [activePath, setActivePath] = useState(location.pathname); // Keep track of active path

    const handleLinkClick = (path) => {
        setActivePath(path); // Update active path on click
    };

    return (
        <div className="header">
            <nav className="flex justify-end h-20">
                <ul className="mb-0 mt-4 flex items-center justify-center space-x-10 text-lg">
                    <li>
                        <Link
                            to="/"
                            className={activePath === "/" ? "active" : ""}
                            onClick={() => handleLinkClick("/")}
                        >
                            <span className="first-letter">H</span>
                            om
                            <span className="last-letter">e</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={activePath === "/about" ? "active" : ""}
                            onClick={() => handleLinkClick("/about")}
                        >
                            <span className="first-letter">A</span>
                            bou
                            <span className="last-letter">t</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            className={
                                activePath === "/portfolio" ? "active" : ""
                            }
                            onClick={() => handleLinkClick("/portfolio")}
                        >
                            <span className="first-letter">S</span>
                            ervice
                            <span className="last-letter">s</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={
                                activePath === "/contact" ? "active" : ""
                            }
                            onClick={() => handleLinkClick("/contact")}
                        >
                            <span className="first-letter">C</span>
                            ontac
                            <span className="last-letter">t</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            className={activePath === "/blog" ? "active" : ""}
                            onClick={() => handleLinkClick("/blog")}
                        >
                            <span className="first-letter">B</span>
                            lo
                            <span className="last-letter">g</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
