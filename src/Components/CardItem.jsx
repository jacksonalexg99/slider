import React from 'react';

function CardItem({type,children}) {
    return (
        <>
            <div className={type}>{children}</div>


        </>
    )
        ;
}

export default CardItem;