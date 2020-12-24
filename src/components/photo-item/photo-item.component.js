
import React from 'react';

export const PhotoItem = props => {

    const { name, url } = props.data;

    return (
        <div className="container photo-item">
            <img src={url}></img>
            <div className="caption">
                {name}
            </div>
        </div>
    )
}