import React from 'react';

function State({state, value, noBordered}) {

    let classname = "one-third ";
    if (noBordered) {
        classname += "no-border"
    }
    return (
        <div className={classname}>
            <div className="stat">{state}</div>
            <div className="stat-value">{value}</div>
        </div>
    );
}

export default State;