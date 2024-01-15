import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 300,
    img,
    title,
    subheading,
    imgPosition = "center",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-2"
        style={{
          display: "grid",
          alignItems: "center",
          marginTop: "2rem",
          height: "300px",
        }}
      >
        <div
          className="full-width-image-container margin-top-0"
          style={{
            position: "relative",
            backgroundImage: `url('/img/banner.jpeg')`,

            height: "200px",
          }}
        ></div>
        {img?.url ? (
          <img
            src={img}
            objectFit={"contain"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
              borderRadius: "10px",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"contain"}
            objectPosition={imgPosition}
            style={{
              position: "relative",
              top: "-151px",
              // gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
              borderRadius: "10px",
              opacity: 1,
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              margin: "1rem auto",
              marginTop: "1.2rem",
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {/* {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  backgroundColor: "rgb(255, 68, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  backgroundColor: "rgb(255, 68, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )} */}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
