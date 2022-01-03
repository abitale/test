import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Slider.css'
import YoutubeEmbed from "./YoutubeEmbed";

const Slider = ({ embed, title, subtitle, flipped }) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    const renderContent = () => {
        if (!flipped) {
            return (
                <>
                    <YoutubeEmbed embedId={embed} />
                    <div className='slider_content'>
                        <h1 className='slider_title'>{title}</h1>
                        <p className='slider_subtitle' >{subtitle}</p>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <div className='slider_content'>
                        <h1 className='slider_title'>{title}</h1>
                        <p className='slider_subtitle'>{subtitle}</p>
                    </div>
                    <YoutubeEmbed embedId={embed} />
                </>
            );
        }
    };

    return <div className={inView ? 'slider slider-zoom' : 'slider'} ref={ref}>{renderContent()}</div>;
}

export default Slider
