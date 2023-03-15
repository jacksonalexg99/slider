import React from 'react';

function Arrow({direction, handlerArrow}) {
    return (
        <div className="arrow-wrapper">
            <div className="round">
                <div id="cta">
                    <span className={`arrow ${direction}`} onClick={handlerArrow}/>
                </div>
            </div>
        </div>
    );
}

export default Arrow;