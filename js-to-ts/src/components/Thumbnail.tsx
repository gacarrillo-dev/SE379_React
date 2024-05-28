import React from 'react';

interface Props {
    description: string;
    image: string;
    width?: number; // Make width optional since it has a default value
}

export const Thumbnail: React.FC<Props> = ({ description, image, width = 50 }) => {
    return (
        <div className="thumbnail">
            <img alt={description} src={image} height={width} width={width} />
        </div>
    );
};
