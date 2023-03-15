import React from 'react';
import State from "./State";

function Footer({units, name}) {
    const unitsBox = units.map((box, index) => {
        return <State state={box.state} value={box.value} noBordered={index === units.length - 1}/>
    })
    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {unitsBox}
        </div>
    );
}

export default Footer;