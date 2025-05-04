import React from "react";
import './TracksContainer.css';

export const TracksCard = (track) => {
    return (
        <div className="tracksCard">
            <div className="trackLogo">
                <img src={track.trackImg} alt="" />
            </div>
            <div className="trackNameAvt">
                <h3>{track.title}</h3>
                <span>{track.avtor}</span>
            </div>
            <span>{track.nameAlbum}</span>
            <span>{track.prod}</span>
        </div>
    )
}