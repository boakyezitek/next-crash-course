import React from 'react';
import headerStyles from  '../styles/Header.module.css';

function Header(props) {
    const x = 3;
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Web Dev</span> News
            </h1>
            {/* <style>
                {`.title {
                    color:${x > 3 ? 'red' : 'blue'};
                }`}
            </style> */}
        </div>
    );
}

export default Header;