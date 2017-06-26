import ReactLoading from 'react-loading';
import React, { Component } from 'react';

export default ({ isLoading }) => {
    const dom = (
        <div className="loading-overlay">
            <ReactLoading type="spin" color="#444" className="loading-icon" />
        </div>
    );
    return isLoading ? dom : null;
};

