import React from 'react';
import CardImage from "./CardImage";
import CardItem from "./CardItem";
import Footer from "./Footer";

function Card({hero}) {

    return (<div className={`clash-card ${hero.name}`}>
        <CardImage src={hero.img} name={hero.name}/>
        <CardItem type={`clash-card__level clash-card__level--${hero.name}`}>{hero.level}</CardItem>
        <CardItem type={"clash-card__unit-name"}>{hero.name}</CardItem>
        <CardItem type={"clash-card__unit-description"}>{hero.description}</CardItem>
       <Footer units={hero.units} name={hero.name}/>

    </div>);
}

export default Card;