import React from 'react';
import CreationCard from "../../components/CreationCard";

const creations = [
    {
        src: '/img/image-deep-earth.jpg',
        srcMobile: '/img/mobile/image-deep-earth.jpg',
        title: 'DEEP \nEARTH',
    },
    {
        src: '/img/image-night-arcade.jpg',
        srcMobile: '/img/mobile/image-night-arcade.jpg',
        title: 'NIGHT \nARCADE',
    },
    {
        src: '/img/image-soccer-team.jpg',
        srcMobile: '/img/mobile/image-soccer-team.jpg',
        title: 'SOCCER \nTEAM VR',
    },
    {
        src: '/img/image-grid.jpg',
        srcMobile: '/img/mobile/image-grid.jpg',
        title: 'THE \nGRID',
    },
    {
        src: '/img/image-from-above.jpg',
        srcMobile: '/img/mobile/image-from-above.jpg',
        title: 'FROM UP \nABOVE VR',
    },
    {
        src: '/img/image-pocket-borealis.jpg',
        srcMobile: '/img/mobile/image-pocket-borealis.jpg',
        title: 'POCKET \nBOREALIS',
    },
    {
        src: '/img/image-curiosity.jpg',
        srcMobile: '/img/mobile/image-curiosity.jpg',
        title: 'THE \nCURIOSITY',
    },
    {
        src: '/img/image-fisheye.jpg',
        srcMobile: '/img/mobile/image-fisheye.jpg',
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
