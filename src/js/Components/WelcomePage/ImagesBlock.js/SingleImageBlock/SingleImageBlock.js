import React from 'react';

const SingleImageBlock = ({ image }) => {
    return (
        <div
            className="content-block"
            style={{
                backgroundImage: `url(${image})`,
            }}
        ></div>
    );
};

export default SingleImageBlock;
