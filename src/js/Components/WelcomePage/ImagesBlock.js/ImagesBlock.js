import React, { useEffect, useState } from 'react';
import SingleImageBlock from './SingleImageBlock/SingleImageBlock';

const ImagesBlock = ({ images }) => {
    return (
        <div className="content-block">
            <div className="content-row">
                <SingleImageBlock image={images[0]} />
                <SingleImageBlock image={images[1]} />
            </div>
            <div className="content-row">
                <SingleImageBlock image={images[2]} />
                <SingleImageBlock image={images[3]} />
            </div>
        </div>
    );
};

export default ImagesBlock;
