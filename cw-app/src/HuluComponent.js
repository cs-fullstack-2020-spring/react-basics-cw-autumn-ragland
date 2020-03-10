import React from 'react';
import './App.css';

function HuluComponent(prop){
    console.log(prop);
    return(
        <div>
            <h3>Show Name : {prop.show.name}</h3>
            <h4>Show Rating : {prop.show.rating} / 10</h4>
            <h4>Show Genre : {prop.show.genre}</h4>
            <h4>Show Number of Seasons : {prop.show.numberOfSeasons}</h4>
        </div>
    );
}

export default HuluComponent;