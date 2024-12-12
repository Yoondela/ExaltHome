import React, { useEffect } from "react";
import lightGallery from "lightgallery";

// Import LightGallery styles
import "lightgallery/css/lightgallery.css";

const ServicesGallery = () => {
    useEffect(() => {
        // Initialize LightGallery
        const galleryElement = document.getElementById("custom-lightgallery");
        lightGallery(galleryElement, {
            selector: "a", // Target anchor tags
            dynamic: true,
            dynamicEl: [
                {
                    src: `<div style="padding: 20px; text-align: center;"><h2>Custom Content 1</h2><p>This is some custom HTML content for item 1.</p></div>`,
                },
                {
                    src: `<div style="padding: 20px; text-align: center;"><h2>Custom Content 2</h2><p>This is some custom HTML content for item 2.</p></div>`,
                },
                {
                    src: `<div style="padding: 20px; text-align: center;"><h2>Custom Content 3</h2><p>This is some custom HTML content for item 3.</p></div>`,
                },
            ],
            appendSubHtmlTo: ".lg-item", // Attach custom HTML inside the gallery
            subHtmlSelectorRelative: true,
        });

        return () => {
            // Destroy LightGallery on component unmount
            if (galleryElement) {
                galleryElement.lg && galleryElement.lg.destroy();
            }
        };
    }, []);

    return (
        <div id="custom-lightgallery">
            <a href="/" data-src="item-1">
                <div className="gallery-item">Open Item 1</div>
            </a>
            <a href="/" data-src="item-2">
                <div className="gallery-item">Open Item 2</div>
            </a>
            <a href="/" data-src="item-3">
                <div className="gallery-item">Open Item 3</div>
            </a>
        </div>
    );
};

export default ServicesGallery;
