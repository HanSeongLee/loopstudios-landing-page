import React from 'react';
import CreationCard from "../../components/CreationCard";

const creations = [
    {
        src: '/img/mobile/image-deep-earth.jpg',
        title: 'DEEP \nEARTH',
    },
    {
        src: '/img/mobile/image-night-arcade.jpg',
        title: 'NIGHT \nARCADE',
    },
    {
        src: '/img/mobile/image-soccer-team.jpg',
        title: 'SOCCER \nTEAM VR',
    },
    {
        src: '/img/mobile/image-grid.jpg',
        title: 'THE \nGRID',
    },
    {
        src: '/img/mobile/image-from-above.jpg',
        title: 'FROM UP \nABOVE VR',
    },
    {
        src: '/img/mobile/image-pocket-borealis.jpg',
        title: 'POCKET \nBOREALIS',
    },
    {
        src: '/img/mobile/image-curiosity.jpg',
        title: 'THE \nCURIOSITY',
    },
    {
        src: '/img/mobile/image-fisheye.jpg',
        title: 'MAKE IT \nFISHEYE',
    },
];

const CreationContainer = () => {
    return (
        <>
            {creations?.map((creation) => (
                <CreationCard {...creation} />
            ))}
        </>
    );
};

export default CreationContainer;
