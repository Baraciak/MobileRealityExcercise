import React from 'react';

const TextBlock = ({ header, headerCaption, content, buttonText, buttonAction }) => {
    return (
        <div className="content-block content-block__text">
            <div className="text-content txt-center">
                <div className="section">
                    <div className="text-header">{header}</div>
                    <div className="text-header__caption">{headerCaption}</div>
                </div>
                <div className="section">{content}</div>
                <div className="section">
                    <div className="button" onClick={buttonAction ? buttonAction : () => {}}>
                        {buttonText}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextBlock;
