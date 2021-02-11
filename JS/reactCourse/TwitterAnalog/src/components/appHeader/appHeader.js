import React from 'react';

const AppHeader = ({entries, liked}) => {
    const name = "Twitter-Analogue";
    return (
        <div className="appHeader d-flex">
            <h1>{name}</h1>
            <h2>{entries} entries, {liked} liked</h2>
        </div>
    )
} 

export default AppHeader;