import React from 'react';
import Header from '../components/Header'

export const StartSide = () => {

    const divStyle = {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '56.25%'
    };

    const iframeStyle = {
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        top: '0', 
        left: '0', 
        border: 'none', 
        padding: '0', 
        margin: '0',
        overflow:'hidden'
    }

    return (
       <><Header/>
    <div style={divStyle}><iframe src="https://share.synthesia.io/embeds/videos/ac574f28-113d-4f85-90b7-274645c51fed" loading="lazy" title="Synthesia video player - Your AI video" allow="encrypted-media; fullscreen;" style={iframeStyle}></iframe></div>
    </> );
}