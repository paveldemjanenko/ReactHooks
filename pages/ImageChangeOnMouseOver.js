import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/images/1.jpg"
            secondaryImg="/static/images/2.jpg"
            alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/images/3.jpg"
            secondaryImg="/static/images/4.jpg"
            alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;