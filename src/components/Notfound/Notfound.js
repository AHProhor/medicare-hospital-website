import React from 'react';
import notFound from '../../images/others/404_page_cover.jpg';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="notFoundStyle">
            <img src={notFound} alt="notfoundImage" />
        </div>
    );
};

export default Notfound;