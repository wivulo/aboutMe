import React from 'react';
import bgVideo from './vid/bg_video.mp4';

export default class MyVideocomponent extends React.Component {
    render() {
        return (
            <video muted autoPlay loop preload='auto' >
                <source src={bgVideo} type="video/mp4" />
            </video>
        );
    }
}