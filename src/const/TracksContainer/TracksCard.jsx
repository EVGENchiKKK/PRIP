import React from "react";
import './TracksContainer.css';

export const TracksCard = ({track}) => {
    return (
        <div className="tracksCard">
            <div className="trackLogo">
                <img src={track.cover} alt="" />
            </div>
            <div className="trackNameAvt">
                <h3>{track.title}</h3>
                <span>{track.artist}</span>
            </div>
            <span>{track.album}</span>
            <span>{track.duration}</span>
        </div>
    )
}