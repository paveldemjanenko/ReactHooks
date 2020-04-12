import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1, 2, 3, 4].map(imageId => {
                return (
                    <div key={imageId}>
                        <ImageToggleOnScroll primaryImg={`/static/images/${imageId}.jpg`}
                            secondaryImg={`/static/images/bw/${imageId}.jpg`}
                            alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnScroll;