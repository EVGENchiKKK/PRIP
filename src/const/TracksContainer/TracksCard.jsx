import React from "react";
import './TracksContainer.css';

export const TracksCard = ({track, number}) => {

    return (
        <div className="tracksCard">
            <div className="trackLogo">
                <span className="trackNumber">{number}</span>
                <img src={track.cover} alt="" />
            </div>
            <div className="trackNameAvt">
                <h3>{track.title}</h3>
                <span>{track.artist}</span>
            </div>
            <span className="nameAlbum">{track.album}</span>
            <span className="prodTrack">{track.duration}</span>
        </div>
    )
}