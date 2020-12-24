
import React from 'react';

import { PhotoItem } from '../photo-item/photo-item.component';

import { photoList } from '../../mock-data/photo-list.data';

export const PhotoList = props => {

    const PhotoItemSet = 
        photoList.map( 
            photoData => <PhotoItem data={photoData}/> 
        );

    return (
        <div className="container photo-list">
          { PhotoItemSet }  
        </div>
    )
}